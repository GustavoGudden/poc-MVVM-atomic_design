import { Button } from '@/components/atoms/button';
import { FC } from 'react';

export const CouponArea: FC = () => {
  return (
    <div className="flex mt-4 gap-4 h-[200px]">
      <input type="text" placeholder="Coupon Code" className="border rounded-[4px] p-3 h-[50px]" />
      <Button className="text-white w-[200px] p-3 bg-red-500 rounded-[4px] text-[16px] h-[50px] font-medium">Apply Coupon</Button>
    </div>
  );
};
