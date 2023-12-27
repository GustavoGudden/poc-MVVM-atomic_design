import { ImageComponent } from '@/components/atoms/image';
import controll1 from 'public/images/productImages/controll1.png';
import controll2 from 'public/images/productImages/controll2.png';
import controll3 from 'public/images/productImages/controll3.png';
import controll4 from 'public/images/productImages/controll4.png';
import { FC } from 'react';

export const ProductAllImages: FC = () => {
  return (
    <div className=" flex flex-col  gap-4 h-full">
      <ImageComponent image={controll1} alt="controle" stylization="w-[170px] h-[150px] " />
      <ImageComponent image={controll2} alt="controle" stylization="w-[170px] h-[150px]" />
      <ImageComponent image={controll3} alt="controle" stylization="w-[170px] h-[150px]" />
      <ImageComponent image={controll4} alt="controle" stylization="w-[170px] h-[150px]" />
    </div>
  );
};
