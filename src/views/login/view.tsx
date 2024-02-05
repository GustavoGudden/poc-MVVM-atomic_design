'use client';

import { HomeTemplate } from '@/components/templates/homeTemplate';

// View Model
import { useLoginViewModel } from './view.model';
import { LoginTemplate } from '@/components/templates/loginTemplate';

export default function LoginView() {
  const { handleLogin, setEmail, setPassword, redirectToHome, handleFormLogin } = useLoginViewModel();

  return (
    <LoginTemplate
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
      redirectToHome={redirectToHome}
      handleFormLogin={handleFormLogin}
    />
  );
}
