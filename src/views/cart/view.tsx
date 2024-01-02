'use client';

// template
import { CartTemplate } from '@/components/templates/cartTemplate';

// View Model
import { useCartModel } from './view.model';

export default function CartView() {
  const { redirectToCart, getProductsById, getAllProducsOnCart } = useCartModel();

  return <CartTemplate redirectToCart={redirectToCart} getProductsById={getProductsById} getAllProducsOnCart={getAllProducsOnCart} />;
}
