import { FC } from 'react';
import { ProductNav } from '../categoryNav';
import { ImageComponent } from '../../atoms/image';
import image from 'public/images/Frame.png';

export const BannerArea: FC = () => {
  return (
    <section className="flex gap-1 h-[400px] ">
      <ProductNav />
      <div className="border w-[70%] h-[100%] rounded-[20px] m-4  relative z-1">
        <ImageComponent image={image} alt="a" fill={true} stylization="z-0 rounded-[20px]" />
      </div>
    </section>
  );
};
