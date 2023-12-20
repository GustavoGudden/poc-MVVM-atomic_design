import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { FC } from 'react';

interface IImage {
  image: StaticImageData;
  alt: string;
  fill?: boolean;
  stylization: string;
}

export const ImageComponent: FC<IImage> = ({ image, alt, fill, stylization }) => {
  return <Image src={image} alt={alt} className={stylization} fill={fill} />;
};
