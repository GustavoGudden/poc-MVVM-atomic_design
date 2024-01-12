'use client';

import { LoginArea } from '@/components/organisms/loginArea';
import { FC } from 'react';

// Mock data

interface ILoginTemplate {}

export const LoginTemplate: FC<ILoginTemplate> = ({}) => {
  return (
    <>
      <section>
        <LoginArea />
      </section>
    </>
  );
};
