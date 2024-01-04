'use client';
import { FC } from 'react';

import { Header } from '@/components/organisms/header';
import { useRouter } from 'next/navigation';

export const HeaderLayout: FC = () => {
  const router = useRouter();

  const redirectToCart = () => {
    router.push('/cart');
  };

  const RedirectToLogin = () => {
    router.push('/login');
  };

  return <Header redirectToCart={redirectToCart} RedirectToLogin={RedirectToLogin} />;
};
