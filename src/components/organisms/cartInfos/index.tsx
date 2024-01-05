import { FC } from 'react';

import { CouponArea } from '@/components/molecules/CouponArea';
import { CartBilling } from '../cartBilling';

interface ICartBilling {
  totalValueCart: number;
}

export const CartInfo: FC<ICartBilling> = ({ totalValueCart }) => {
  return (
    <div className="flex justify-between mt-4">
      <CouponArea />
      <CartBilling totalValueCart={totalValueCart} />
    </div>
  );
};
