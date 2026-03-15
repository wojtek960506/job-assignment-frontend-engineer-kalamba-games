import { createContext } from "react";

export type AuthContextType = {
  authToken: string | null;
  setAuthToken: (authToken: string | null) => void;
  resetAuthToken: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
