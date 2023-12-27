'use client';

import { FC } from 'react';
import { IProduct } from '@/models/ProductModel';
import { ProductView } from '../../molecules/productView';
import { ProductInfo } from '../../molecules/productInfo';
import control from 'public/images/productsImages/control.png';
import { ImageComponent } from '@/components/atoms/image';

interface Iproduct {
  data: IProduct;
  onClickProductCard: (id: string) => void;
}

export const ProductCard: FC<Iproduct> = ({ data, onClickProductCard }) => {
  const handleClick = () => {
    console.log('Product card clicked with id:', data.id);
    onClickProductCard(data.id);
  };

  return (
    <div onClick={handleClick} className="border relative flex flex-col flex-auto rounded-[4px]  bg-slate-50">
      <ProductView />
      <ImageComponent image={control} alt="" stylization="mx-auto my-0" />
      <ProductInfo />
    </div>
  );
};
