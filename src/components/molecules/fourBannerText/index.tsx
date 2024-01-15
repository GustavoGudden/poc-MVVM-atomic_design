import { FC } from 'react';
import { Text } from '@/components/atoms/text';
import Link from 'next/link';

interface IFourBannerText {
  title: string;
  text: string;
}

export const FourBannerText: FC<IFourBannerText> = ({ text, title }) => {
  return (
    <div className="absolute xl:bottom-10 left-5 bottom-5 text-white">
      <Text className="font-semibold text-[24px]">{title}</Text>
      <Text className="font-normal text-[14px]">{text}</Text>
      <Link href="/">
        <Text className="xl:text-[16px] font-medium underline underline-offset-[10px] text-[14px]">Shop Now</Text>
      </Link>
    </div>
  );
};
