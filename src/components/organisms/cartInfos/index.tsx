import { FC } from 'react';

import { CouponArea } from '@/components/molecules/CouponArea';
import { CartBilling } from '../cartBilling';

interface ICartBilling {
  totalValueCart: number;
}

export const CartInfo: FC<ICartBilling> = ({ totalValueCart }) => {
  return (
    <div className="flex xl:justify-between flex-wrap my-4 gap-4 mt-4">
      <CouponArea />
      <CartBilling totalValueCart={totalValueCart} />
    </div>
  );
};
