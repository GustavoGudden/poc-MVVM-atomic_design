'use client';

import { FC } from 'react';
import { IProduct } from '@/models/ProductModel';
import { ProductView } from '../../molecules/productView';
import { ProductInfo } from '../../molecules/productInfo';

import { ImageComponent } from '@/components/atoms/image';
import Image from 'next/image';

interface Iproduct {
  data: IProduct;
  onClickProductCard: (id: string) => void;
}

export const ProductCard: FC<Iproduct> = ({ data, onClickProductCard }) => {
  return (
    <div className="relative flex flex-col xl:flex-auto rounded-[4px]  ">
      <div className="xl:w-full xl:h-full h-[180px] bg-gray-50">
        <ProductView product={data} />
        <div className="w-full  h-full flex justify-center  m-auto ">
          <div className=" flex justify-center items-center my-4">
            <Image src={data.imageBannerIcon} alt="alguma coisa" className="xl:p-0 p-[25%]" width={190} height={180} />
          </div>
        </div>
      </div>
      <ProductInfo onClickProductCard={onClickProductCard} data={data} />
    </div>
  );
};
