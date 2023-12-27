import { Text } from '@/components/atoms/text';
import { FC, ReactNode } from 'react';

interface IDeliveryBox {
  icon: ReactNode;
  title: string;
  description: string;
}

export const DeliveryBox: FC<IDeliveryBox> = ({ icon, description, title }) => {
  return (
    <div className="flex gap-4 ">
      <div className="border-r-2 h-full py-6 px-4">{icon}</div>
      <div className="flex flex-col justify-center w-full">
        <Text className="text-[20px] font-medium">{title}</Text>
        <Text className="text-[16px] font-medium">{description}</Text>
      </div>
    </div>
  );
};
