import { FC } from 'react';
import { Text } from '@/components/atoms/text';
import { Input } from '@nextui-org/react';
import { AiOutlineSend } from 'react-icons/ai';

export const FooterPromotionArea: FC = () => {
  return (
    <div className="flex flex-col xl:gap-[24px] gap-4">
      <Text className="font-bold xl:text-[24px] text-[16px]">Exclusive</Text>
      <div className="flex flex-col xl:gap-[16px] gap-4">
        <Text className="xl:text-[20px] text-[12px] font-medium">Subscribe</Text>
        <Text className="xl:text-[16px] text-[12px] font-normal">Get 10% off your first order</Text>
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
};
