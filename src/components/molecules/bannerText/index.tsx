import { Text } from '@/components/atoms/text';
import Link from 'next/link';
import { FC } from 'react';

interface IBannerText {
  title: string;
  text: string;
  link: string;
}

export const BannerText: FC<IBannerText> = ({ text, title, link }) => {
  return (
    <div className="w-[50%] absolute bottom-10 left-10 flex flex-col gap-1 ">
      <Text className="text-white font-semibold text-[24px]">{title}</Text>
      <Text className="text-[14px] font-normal text-white">{text}</Text>
      <Link href={''} className="text-white text-[16px] font-medium underline underline-offset-[10px]">
        {link}
      </Link>
    </div>
  );
};
