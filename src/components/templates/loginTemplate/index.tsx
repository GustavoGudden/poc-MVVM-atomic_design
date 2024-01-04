'use client';

import { LoginArea } from '@/components/organisms/loginArea';
import { FC } from 'react';

// Mock data

interface ILoginTemplate {
  redirectToCart: () => void;
}

export const LoginTemplate: FC<ILoginTemplate> = ({ redirectToCart }) => {
  return (
    <>
      <section className="">
        <LoginArea />
      </section>
    </>
  );
};
