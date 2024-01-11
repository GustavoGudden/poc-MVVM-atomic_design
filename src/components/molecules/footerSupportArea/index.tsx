import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const FooterSupportArea: FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Text className="font-medium xl:text-[20px] text-[16px]">Support</Text>
      <div className="flex flex-col gap-[16px]">
        <Text className="font-normal xl:text-[16px] text-[12px]">
          111 Bijoy sarani, Dhaka,
          <br />
          DH 1515, Bangladesh.
        </Text>
        <Text className="xl:text-[16px] text-[12px] font-normal">exclusive@gmail.com</Text>
        <Text className="xl:text-[16px] text-[12px] font-normal">+88015-88888-9999</Text>
      </div>
    </div>
  );
};
