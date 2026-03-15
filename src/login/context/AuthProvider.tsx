import { AUTH_STORE_KEY, useAuthStore } from "login/store"
import { ReactNode, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {

  const { authToken, setAuthToken } = useAuthStore();

  const resetAuthToken = () => setAuthToken(null);

  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.key === AUTH_STORE_KEY) useAuthStore.persist.rehydrate();
    }

    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, []);

  return (
    <AuthContext.Provider
      value={{ authToken, setAuthToken, isAuthenticated: !!authToken, resetAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
