import { Button } from '@/components/atoms/button';
import { Line } from '@/components/atoms/line';
import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const CartBilling: FC = () => {
  return (
    <div className="flex flex-col gap-4 border-1.5  p-4 rounded-[4px] w-[400px]">
      <Text className="text-[20px] font-medium">Cart Total</Text>
      <div className="flex  justify-between w-full">
        <Text className="text-black text-[16px] font-normal">Subtotal:</Text>
        <Text className="text-black text-[16px] font-normal">$1750</Text>
      </div>
      <Line className="border-t-1" />
      <div className="flex justify-between w-full">
        <Text className="text-black text-[16px] font-normal">Shipping:</Text>
        <Text className="text-black text-[16px] font-normal">Free</Text>
      </div>
      <Line className="border-t-1" />
      <div className="flex justify-between w-full">
        <Text className="text-black text-[16px] font-normal">Total:</Text>
        <Text className="text-black text-[16px] font-normal">$1750</Text>
      </div>
      <Line className="border-t-1" />
      <div className="flex w-full justify-center">
        <Button className="text-white w-[200px] p-3 bg-red-500 rounded-[4px] text-[16px] font-medium">Procees to checkout</Button>
      </div>
    </div>
  );
};
