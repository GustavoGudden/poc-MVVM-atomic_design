'use client';

import { LoginArea } from '@/components/organisms/loginArea';
import { FC } from 'react';

import { useSession } from 'next-auth/react';

interface ILoginTemplate {
  handleLogin: () => Promise<void>;
  setName: React.Dispatch<string>;
  setPassword: React.Dispatch<string>;
  redirectToHome: () => void;
}

export const LoginTemplate: FC<ILoginTemplate> = ({ handleLogin, setName, setPassword, redirectToHome }) => {
  const { data: session } = useSession();

  if (session) {
    redirectToHome();
  }

  return (
    <>
      <section>
        <LoginArea handleLogin={handleLogin} setName={setName} setPassword={setPassword} />
      </section>
    </>
  );
};
