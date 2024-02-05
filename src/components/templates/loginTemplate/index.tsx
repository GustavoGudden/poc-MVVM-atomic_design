'use client';

import { LoginArea } from '@/components/organisms/loginArea';
import { FC } from 'react';

import { useSession } from 'next-auth/react';

interface ILoginTemplate {
  handleLogin: () => Promise<void>;
  setEmail: React.Dispatch<string>;
  setPassword: React.Dispatch<string>;
  redirectToHome: () => void;
  handleFormLogin: (e: React.FormEvent) => void;
}

export const LoginTemplate: FC<ILoginTemplate> = ({ handleLogin, setEmail, setPassword, redirectToHome, handleFormLogin }) => {
  const { data: session } = useSession();

  if (session) {
    redirectToHome();
  }

  return (
    <>
      <section>
        <LoginArea handleLogin={handleLogin} setEmail={setEmail} setPassword={setPassword} handleFormLogin={handleFormLogin} />
      </section>
    </>
  );
};
