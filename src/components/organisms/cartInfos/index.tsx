import { CouponArea } from '@/components/molecules/CouponArea';
import { FC } from 'react';
import { CartBilling } from '../cartBilling';

export const CartInfo: FC = () => {
  return (
    <div className="flex justify-between mt-4">
      <CouponArea />
      <CartBilling />
    </div>
  );
};
