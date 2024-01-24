import React from 'react';

export interface LoginViewModel {
  handleLogin: () => Promise<void>;
  setName: React.Dispatch<string>;
  setPassword: React.Dispatch<string>;
  redirectToHome: () => void;
}
