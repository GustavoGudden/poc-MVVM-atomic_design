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
    <div className="flex flex-col justify-center items-center gap-4 xl:flex-grow">
      <IconComponent icon={icon} />
      <Text className="font-semibold xl:text-[20px] text-[14px]">{title}</Text>
      <Text className="font-normal xl:text-[14px] text-[12px]">{description}</Text>
    </div>
  );
};
