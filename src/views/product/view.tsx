'use client';

import { ProducPageTemplate } from '@/components/templates/productTemplate';
import { useProductPageViewModel } from './view.model';

// View Model

// Mockdata

export default function ProductPageView() {
  const { GetParams, getProductsById } = useProductPageViewModel();

  return <ProducPageTemplate getParams={GetParams} getProductsById={getProductsById} />;
}
