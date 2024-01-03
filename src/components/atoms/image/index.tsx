import Image from 'next/image';
import { FC } from 'react';

interface IImage {
  image: string;
  alt: string;
  stylization?: string;
  fill: boolean;
}

export const ImageComponent: FC<IImage> = ({ image, alt, stylization, fill }) => {
  return fill ? (
    <Image src={image} alt={alt} className={stylization} fill={fill} placeholder="blur" quality={100} />
  ) : (
    <Image src={image} alt={alt} className={stylization} width={190} height={180} quality={100} />
  );
};
