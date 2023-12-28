'use client';

import { HomeTemplate } from '@/components/templates/homeTemplate';
import { useCartModel } from './view.model';
import { CartTemplate } from '@/components/templates/cartTemplate';
// View Model

// Mockdata

export default function CartView() {
  const { sendToCart } = useCartModel();

  return <CartTemplate sendToCart={sendToCart} />;
}
