import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const CartTableHeader: FC = () => {
  return (
    <div className="grid grid-cols-4 rounded-t-[4px]  mt-4 border ">
      <div className="flex justify-center border-r p-4">
        <Text className="text-[16px] font-normal">Product</Text>
      </div>
      <div className="flex justify-center border-r p-4">
        <Text className="text-[16px] font-normal">Price </Text>
      </div>
      <div className="flex justify-center border-r p-4">
        <Text className="text-[16px] font-normal">Quantity</Text>
      </div>
      <div className="flex justify-center p-4">
        <Text className="text-[16px] font-normal">Subtotal</Text>
      </div>
    </div>
  );
};
