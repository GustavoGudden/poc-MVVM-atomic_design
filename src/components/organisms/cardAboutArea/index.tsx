import { FC } from 'react';
import { CardAbout } from '../cardAbout';
import { BsShop } from 'react-icons/bs';

export const CardAboutArea: FC = () => {
  return (
    <div className="w-full flex gap-[100px] mt-16">
      <CardAbout icon={<BsShop className="w-[40px] h-[40px] text-white " />} title="10.5k" desc="Sallers active our site" />
      <CardAbout icon={<BsShop className="w-[40px] h-[40px] text-white " />} title="33k" desc="Mopnthly Produduct Sale" />
      <CardAbout icon={<BsShop className="w-[40px] h-[40px] text-white " />} title="45.5k" desc="Customer active in our site" />
      <CardAbout icon={<BsShop className="w-[40px] h-[40px] text-white " />} title="25k" desc="Anual gross sale in our site" />
    </div>
  );
};
