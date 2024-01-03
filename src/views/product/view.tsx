'use client';

import { ProducPageTemplate } from '@/components/templates/productTemplate';
import { useProductPageViewModel } from './view.model';

// View Model

// Mockdata

export default function ProductPageView() {
  const { getParams, redirectToCart, getProductsById } = useProductPageViewModel();

  return <ProducPageTemplate getParams={getParams} redirectToCart={redirectToCart} getProductsById={getProductsById} />;
}
