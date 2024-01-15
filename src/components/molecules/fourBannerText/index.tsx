import { FC } from 'react';
import { Text } from '@/components/atoms/text';
import Link from 'next/link';

interface IFourBannerText {
  title: string;
  text: string;
}

export const FourBannerText: FC<IFourBannerText> = ({ text, title }) => {
  return (
    <div className="absolute xl:bottom-10 left-5 bottom-8 text-white">
      <Text className="font-semibold xl:text-[24px] text-[16px]">{title}</Text>
      <Text className="font-normal   xl:text-[14px] text-[12px]">{text}</Text>
      <Link href="/">
        <Text className="xl:text-[16px] font-medium underline underline-offset-[10px] text-[14px]">Shop Now</Text>
      </Link>
    </div>
  );
};
