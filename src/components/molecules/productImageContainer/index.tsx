import { FC } from 'react';
import { ImageComponent } from '@/components/atoms/image';

import Image from 'next/image';

export const ProductImageContainer: FC = () => {
  return (
    <div className=" relative xl:grow-[1]  xl:w-auto w-full h-[300px]  flex justify-center items-center  rounded-[4px] bg-gray-50">
      <Image src="/images/productImages/controllBanner.png" alt="" width={190} height={180} quality={100} />
    </div>
  );
};
