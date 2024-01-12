import { Button } from '@/components/atoms/button';
import { Input } from '@nextui-org/react';
import { FC } from 'react';

export const CouponArea: FC = () => {
  return (
    <div className="flex mt-4 gap-1 h-[50px] xl:w-auto w-full ">
      <Input
        type="text"
        placeholder="Coupon Code"
        variant="bordered"
        radius="sm"
        classNames={{ base: ['w-full'], inputWrapper: ['border-1  border-gray-300 h-[50px] '] }}
      />
      <Button className="text-white w-[70%]  bg-red-500 rounded-[4px]  px-6 text-[16px] h-[50px]  font-medium">Apply Cuppon</Button>
    </div>
  );
};
