import { FC } from 'react';
import { ImageComponent } from '@/components/atoms/image';

import banner from 'public/images/productImages/controllBanner.png';

export const ProductImageContainer: FC = () => {
  return (
    <div className=" grow-[1] flex justify-center items-center  rounded-[4px] bg-gray-50">
      <ImageComponent image={banner} alt="" stylization="" />
    </div>
  );
};
