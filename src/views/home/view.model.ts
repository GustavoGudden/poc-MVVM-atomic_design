import { useState } from 'react';
import { HomeViewModel } from './model';
import { useRouter } from 'next/navigation';

export const useHomeViewModel = (): HomeViewModel => {
  const router = useRouter();

  const sendAlertToScreen = () => {
    window.alert('voce selecionou um produto');
  };

  const onClickProductCard = (id: string) => {
    router.push(`/product/${id}`);
  };

  const redirectToCart = () => {
    router.push('/cart');
  };

  return { sendAlertToScreen, onClickProductCard, redirectToCart };
};
