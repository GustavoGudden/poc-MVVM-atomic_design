'use client';

import { ProducPageTemplate } from '@/components/templates/productTemplate';
import { useProductPageViewModel } from './view.model';

// View Model

// Mockdata

export default function ProductPageView() {
  const { getParams, getProductsById } = useProductPageViewModel();

  return <ProducPageTemplate getParams={getParams} getProductsById={getProductsById} />;
}
