import { FC } from 'react';
import Image from 'next/image';

import banner from '/public/images/banner1.png';
import { Text } from '@/components/atoms/text';

// Icons
import { FaApple } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

export const Banner: FC = () => {
  return (
    <div className="w-full xl:h-full relative flex justify-end items-end text-white h-[200px]">
      <div className="flex flex-col gap-4 absolute top-5 left-5 xl:top-12 xl:left-20">
        <div className="flex items-center gap-4">
          <FaApple className="xl:w-[40px] xl:h-[50px] w-[25px] h-[25px]" />
          <Text className="xl:text-[16px] font-light text-[14px]">iPhone 14 Series</Text>
        </div>
        <Text className=" xl:text-[48px] font-semibold text-[24px]">
          Up to 10%
          <br /> off Voucher
        </Text>
        <div className="flex items-center gap-2 cursor-pointer">
          <Text className="xl:text-[16px] font-medium underline underline-offset-[10px] text-[14px]">Shop Now</Text>
          <FaArrowRight className="text-white w-[24px]" />
        </div>
      </div>
      <Image src={banner} alt="" className="xl:w-auto xl:h-auto w-[50%] h-auto" />
    </div>
  );
};
