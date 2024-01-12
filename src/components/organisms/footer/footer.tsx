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
    <footer className=" xl:mt-[36px] xl:px-20  xl:py-4  py-4   w-full bg-black">
      <div className="w-full grid xl:grid-cols-4  grid-cols-2 gap-4 text-white  py-4 px-8 ">
        <FooterPromotionArea />
        <FooterSupportArea />
        <FooterAccountArea />
      </div>
      <div className="mt-8 w-full flex justify-center items-center text-gray-100 gap-4">
        <FaRegCopyright />
        <Text className="font-normal text-[16px]">Copyright Rimel 2022. All right reserved</Text>
      </div>
    </footer>
  );
};
