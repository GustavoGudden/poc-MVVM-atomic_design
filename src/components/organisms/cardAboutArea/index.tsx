import { FC } from 'react';
import { CardAbout } from '../cardAbout';

// Icons
import { BsShop } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { TbMoneybag } from 'react-icons/tb';

export const CardAboutArea: FC = () => {
  return (
    <div className="w-full flex gap-[100px] mt-16">
      <CardAbout icon={<BsShop className="w-[40px] h-[40px] text-white  group-hover:text-black" />} title="10.5k" desc="Sallers active our site" />
      <CardAbout
        icon={<RiMoneyDollarCircleLine className="w-[40px] h-[40px] text-white  group-hover:text-black" />}
        title="33k"
        desc="Mopnthly Produduct Sale"
      />
      <CardAbout
        icon={<LiaShoppingBagSolid className="w-[40px] h-[40px] text-white  group-hover:text-black" />}
        title="45.5k"
        desc="Customer active in our site"
      />
      <CardAbout
        icon={<TbMoneybag className="w-[40px] h-[40px] text-white group-hover:text-black " />}
        title="25k"
        desc="Anual gross sale in our site"
      />
    </div>
  );
};
