import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CartModel } from './model';

export const useCartModel = (): CartModel => {
  const sendToCart = () => {
    window.alert('voce selecionou um produto');
  };

  return { sendToCart };
};
