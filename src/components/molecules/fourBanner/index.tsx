import { image } from '@nextui-org/react';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';

type FourBanner = ComponentProps<'div'>;

interface IFourBanner extends FourBanner {
  imagenSrc: string;
}

export const FourBanner: FC<IFourBanner> = ({ className, imagenSrc, children }) => {
  return (
    <div className={className}>
      <img src={imagenSrc} alt="" className=" w-full h-full" />
      {children}
    </div>
  );
};
