'use client';

// template
import { CartTemplate } from '@/components/templates/cartTemplate';

// View Model
import { useCartModel } from './view.model';

export default function CartView() {
  const { sendToCart, redirectToCart } = useCartModel();

  return <CartTemplate sendToCart={sendToCart} redirectToCart={redirectToCart} />;
}
