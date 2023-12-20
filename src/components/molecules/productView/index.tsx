import { FC } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';

export const ProductView: FC = () => {
  return (
    <div className=" flex justify-between px-4 pt-2 ">
      <div className="absolute top-2 left-2  h-[40px] flex justify-center items-center bg-red-500 px-[12px] py-[4px] rounded-[4px]">
        <p className="text-white font-medium text-[12px]">-35%</p>
      </div>
      <div className="flex flex-col absolute right-2 top-2 gap-1">
        <div className="rounded-[50%] bg-slate-300 p-[4px]">
          <CiHeart />
        </div>
        <div className="rounded-[50%] bg-slate-300 p-[4px]">
          <FaRegEye />
        </div>
      </div>
    </div>
  );
};
