'use client';

import { FC, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import control from 'public/images/productsImages/control.png';
import { ImageComponent } from '@/components/atoms/image';
import { IProduct } from '@/models/ProductModel';

interface IProductViewArea {
  product: IProduct;
}

export const ProductView: FC<IProductViewArea> = ({ product }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const handleOpenModel = () => {
    SetIsModalOpen(!isModalOpen);
  };

  return (
    <div className=" flex justify-between px-4 pt-2 ">
      <div className="absolute top-2 left-2  h-[40px] flex justify-center items-center bg-red-500 px-[12px] py-[4px] rounded-[4px]">
        <p className="text-white font-medium text-[12px]">-35%</p>
      </div>
      <div className="flex flex-col absolute right-2 top-2 gap-1">
        <div className="rounded-[50%] bg-slate-300 p-[4px] hover:bg-red-500 hover:text-white">
          <CiHeart />
        </div>
        <div className="rounded-[50%] bg-slate-300 p-[4px]" onClick={handleOpenModel}>
          <FaRegEye />
        </div>
      </div>
      {/* modal */}
      <div
        style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
        className={` ${isModalOpen ? 'block' : 'hidden'} fixed z-[1] pt-[100px] left-0 top-0 w-full h-full   `}
      >
        <span
          onClick={handleOpenModel}
          className="absolute top-[15px] right-[35px] text-white text-[40px] font-bold transition-[0.3s] cursor-pointer "
        >
          &times;
        </span>
        <ImageComponent image={product.imageBannerIcon} alt="" fill={false} stylization="m-auto block  px-[10px] " />
      </div>
    </div>
  );
};
