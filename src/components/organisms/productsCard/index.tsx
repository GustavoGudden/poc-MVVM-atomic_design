import { FC } from 'react';
import { IProduct } from '@/models/ProductModel';
import { ProductView } from '../../molecules/productView';
import { ProductInfo } from '../../molecules/productInfo';

interface Iproduct {
  data: IProduct;
}

export const ProductCard: FC<Iproduct> = ({ data }) => {
  return (
    <div className="border h-full flex flex-col flex-auto rounded-[4px] bg-slate-50 ">
      <ProductView />
      <ProductInfo />
    </div>
  );
};
