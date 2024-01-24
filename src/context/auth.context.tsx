'use client';

// AuthContext.tsx
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  userToken: string | null;
  setUserToken: Dispatch<SetStateAction<string | null>>;
  logout: () => void;
}

// cria o contexto e e seta um default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

//  Cria um provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = (token: string) => {
    setUserToken(token);
  };

  const logout = () => {
    setUserToken(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (userToken != null) {
      localStorage.setItem('token', userToken!);
    }
  }, [setUserToken]);

  return <AuthContext.Provider value={{ userToken, setUserToken, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
