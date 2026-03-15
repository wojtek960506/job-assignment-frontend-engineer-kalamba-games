import { AuthContextType } from "login/context/AuthContext";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const AUTH_STORE_KEY = 'authStore';

type AuthStore = Pick<AuthContextType, "authToken" | "setAuthToken">;

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      authToken: null,
      setAuthToken: (authToken: string | null) => set({ authToken }),
    }),
    { name: AUTH_STORE_KEY },
  )
);
