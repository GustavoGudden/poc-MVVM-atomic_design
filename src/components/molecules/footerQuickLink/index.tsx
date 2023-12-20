import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const FooterQuickLink: FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Text className="text-[20px] font-medium">Quick Link</Text>
      <div className="flex flex-col gap-[16px]">
        <Text className="text-[16px] font-normal">Privacy Policy</Text>
        <Text className="text-[16px] font-normal">Terms Of Use</Text>
        <Text className="text-[16px] font-normal">FAQ</Text>
        <Text className="text-[16px] font-normal">Contact</Text>
      </div>
    </div>
  );
};
