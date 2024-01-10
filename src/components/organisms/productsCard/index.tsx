'use client';

import { FC } from 'react';
import { IProduct } from '@/models/ProductModel';
import { ProductView } from '../../molecules/productView';
import { ProductInfo } from '../../molecules/productInfo';

import { ImageComponent } from '@/components/atoms/image';

interface Iproduct {
  data: IProduct;
  onClickProductCard: (id: string) => void;
}

export const ProductCard: FC<Iproduct> = ({ data, onClickProductCard }) => {
  return (
    <div className=" relative flex flex-col flex-auto rounded-[4px] ">
      <div className="w-full h-full bg-gray-50">
        <ProductView product={data} />
        <div className="w-full  h-full flex justify-center  m-auto ">
          <div className=" w-full  h-full  flex justify-center items-center my-4">
            <ImageComponent image={data.imageBannerIcon} alt="alguma coisa" fill={false} />
          </div>
        </div>
      </div>
      <ProductInfo onClickProductCard={onClickProductCard} data={data} />
    </div>
  );
};
