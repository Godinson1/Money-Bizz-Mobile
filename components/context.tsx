import React, { createContext } from "react";

type AuthType = {
  toggleTheme: () => void;
  logout: () => void;
  showBalance: () => void;
};

export const AuthContext = createContext<AuthType>({} as AuthType);
