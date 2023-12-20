import { FC } from 'react';

// Components
import { Text } from '@/components/atoms/text';
import { FooterAccountArea } from '@/components/molecules/footerAccountArea';
import { FooterPromotionArea } from '@/components/molecules/footerPromotionArea';
import { FooterQuickLink } from '@/components/molecules/footerQuickLink';
import { FooterSupportArea } from '@/components/molecules/footerSupportArea';

// Icons
import { FaRegCopyright } from 'react-icons/fa6';

export const Footer: FC = () => {
  return (
    <footer className="mt-[36px] px-20 py-8 w-full bg-black">
      <div className="w-full grid grid-cols-4 text-white ">
        <FooterPromotionArea />
        <FooterSupportArea />
        <FooterAccountArea />
        <FooterQuickLink />
      </div>
      <div className="mt-8 w-full flex justify-center items-center text-gray-100 gap-4">
        <FaRegCopyright />
        <Text className="font-normal text-[16px]">Copyright Rimel 2022. All right reserved</Text>
      </div>
    </footer>
  );
};
