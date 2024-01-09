import { Text } from '@/components/atoms/text';
import { FC, ReactNode } from 'react';
import { IconComponent } from '../iconComponent';

interface IAdvantageItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export const AdvantageItem: FC<IAdvantageItem> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-grow">
      <IconComponent icon={icon} />
      <Text className="font-semibold text-[20px]">{title}</Text>
      <Text className="font-normal text-[14px]">{description}</Text>
    </div>
  );
};
