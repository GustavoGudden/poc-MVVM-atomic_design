import { FC } from 'react';
import { Text } from '@/components/atoms/text';
import { Input } from '@nextui-org/react';
import { AiOutlineSend } from 'react-icons/ai';

export const FooterPromotionArea: FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Text className="font-bold text-[24px]">Exclusive</Text>
      <div className="flex flex-col gap-[16px]">
        <Text className="text-[20px] font-medium">Subscribe</Text>
        <Text className="">Get 10% off your first order</Text>
        <div className="w-[50%]">
          <Input
            type="email"
            color="default"
            placeholder="Enter your email"
            labelPlacement="outside"
            radius="sm"
            variant="bordered"
            endContent={<AiOutlineSend className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          />
        </div>
      </div>
    </div>
  );
};
