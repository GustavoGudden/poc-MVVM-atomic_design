import { Button } from '@/components/atoms/button';
import { FC } from 'react';

export const CouponArea: FC = () => {
  return (
    <div className="flex mt-4 gap-4 xl:h-[200px]">
      <input type="text" placeholder="Coupon Code" className="border flex-grow rounded-[4px] py-3 px-1 h-[50px]" />
      <Button className="text-white xs:w-[200px] flex-grow p-3 bg-red-500 rounded-[4px] text-[16px] h-[50px] font-medium">Apply Coupon</Button>
    </div>
  );
};
