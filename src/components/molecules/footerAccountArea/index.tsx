import { FC } from 'react';
import { Text } from '@/components/atoms/text';

export const FooterAccountArea: FC = () => {
  return (
    <div className="flex flex-col xl:gap-[24px] gap-4">
      <Text className="xl:text-[20px] text-[16px] font-medium">Account</Text>
      <div className="flex flex-col gap-[16px]">
        <Text className="font-normal xl:text-[16px] text-[12px]">My Account</Text>
        <Text className="font-normal xl:text-[16px] text-[12px]">Login / Register</Text>
        <Text className="font-normal xl:text-[16px] text-[12px]">Cart</Text>
        <Text className="font-normal xl:text-[16px] text-[12px]">Wishlist</Text>
        <Text className="font-normal xl:text-[16px] text-[12px]">Shop</Text>
      </div>
    </div>
  );
};
