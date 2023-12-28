import { Input } from '@nextui-org/react';
import Image from 'next/image';
import { FC } from 'react';

export const CartProduct: FC = () => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="flex justify-center">
        <Image src="/images/cart/monitor.png" alt="monitor" width={50} height={39} />
      </div>
      <div className="flex justify-center"> $650</div>
      <div className="flex justify-center">
        <Input type="number" placeholder="1" labelPlacement="outside" className="w-[80px] border-2 rounded-[4px]" />
      </div>
      <div className="flex justify-center">$650</div>
    </div>
  );
};
