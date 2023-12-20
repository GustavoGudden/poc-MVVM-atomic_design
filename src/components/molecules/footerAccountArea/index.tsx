import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const FooterAccountArea: FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Text className="text-[20px] font-medium">Account</Text>
      <div className="flex flex-col gap-[16px]">
        <Text className="font-normal text-16px">My Account</Text>
        <Text className="font-normal text-16px">Login / Register</Text>
        <Text className="font-normal text-16px">Cart</Text>
        <Text className="font-normal text-16px">Wishlist</Text>
        <Text className="font-normal text-16px">Shop</Text>
      </div>
    </div>
  );
};
