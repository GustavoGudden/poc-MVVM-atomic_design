import { FC } from 'react';
import Image from 'next/image';

export const ProductAllImages: FC = () => {
  return (
    <div className=" flex flex-col  gap-4 h-full">
      <Image src="/images/productImages/controll1.png " alt="a" className="w-[170px] h-[150px] " width={170} height={150} />
      <Image src="/images/productImages/controll2.png" alt="b" className="w-[170px] h-[150px]" width={170} height={150} />
      <Image src="/images/productImages/controll3.png" alt="c" className="w-[170px] h-[150px]" width={170} height={150} />
      <Image src="/images/productImages/controll4.png" alt="d" className="w-[170px] h-[150px]" width={170} height={150} />
    </div>
  );
};
