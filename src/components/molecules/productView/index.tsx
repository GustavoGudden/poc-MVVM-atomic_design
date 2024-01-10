'use client';
import { FC } from 'react';

import { IProduct } from '@/models/ProductModel';
import { useDisclosure } from '@nextui-org/react';
import { ModalImage } from '../modalImage';

// Icons
import { CiHeart } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';

interface IProductViewArea {
  product: IProduct;
}

export const ProductView: FC<IProductViewArea> = ({ product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full absolute top-0 right-0">
      <div className="absolute top-2 left-2  h-[40px] flex justify-center items-center bg-red-500 px-[12px] py-[4px] rounded-[4px]">
        <p className="text-white font-medium text-[12px]">-35%</p>
      </div>
      <div className="flex flex-col absolute right-2 top-2 gap-1">
        <div className="rounded-[50%] bg-slate-300 p-[4px] hover:bg-red-500 hover:text-white">
          <CiHeart className="cursor-pointer" />
        </div>
        <div className="rounded-[50%] bg-slate-300 p-[4px]" onClick={onOpen}>
          <FaRegEye className="cursor-pointer" />
        </div>
      </div>
      <ModalImage isOpen={isOpen} onOpenChange={onOpenChange} image={product.imageBannerIcon} name={product.name} />
    </div>
  );
};
