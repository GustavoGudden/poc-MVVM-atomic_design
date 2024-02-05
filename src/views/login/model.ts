import React from 'react';

export interface LoginViewModel {
  handleLogin: () => Promise<void>;
  setEmail: React.Dispatch<string>;
  setPassword: React.Dispatch<string>;
  redirectToHome: () => void;
  handleFormLogin: (e: React.FormEvent) => void;
}
