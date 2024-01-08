import { Text } from '@/components/atoms/text';
import { IconComponent } from '@/components/molecules/iconComponent';
import { FC, ReactNode } from 'react';

interface ICardAbout {
  icon: ReactNode;
  title: string;
  desc: string;
}

export const CardAbout: FC<ICardAbout> = ({ icon, desc, title }) => {
  return (
    <div className=" flex justify-center items-center gap-[10px] flex-col p-4 border rounded-[4px] flex-grow">
      <IconComponent icon={icon} />
      <Text className="font-bold text-[32px]">{title}</Text>
      <Text className="font-normal text-[16px]">{desc}</Text>
    </div>
  );
};
