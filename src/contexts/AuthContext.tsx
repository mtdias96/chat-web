'use client';

import { User } from "@/entities/User";
import { createContext } from "react";



type AuthContextType = {
  user: User | null;
}

export const AuthContext = createContext({ } as AuthContextType);

interface AuthProviderProps {
  children: React.ReactNode;
  user: User;
}

export function AuthProvider({ children, user }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}
