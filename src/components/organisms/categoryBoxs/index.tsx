import { CategoryBox } from '@/components/molecules/categoryBox';
import { FC } from 'react';

// Icons
import { SlScreenSmartphone } from 'react-icons/sl';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BsSmartwatch } from 'react-icons/bs';
import { IoCameraOutline } from 'react-icons/io5';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { IoGameControllerOutline } from 'react-icons/io5';

export const CateroryBoxs: FC = () => {
  return (
    <div className="flex xl:gap-[30px] xl:flex-row sm:gap-[14px] w-full justify-center mt-4  flex-wrap gap-4 px-2">
      <CategoryBox categoryTitle="Phones" categoryIcon={<SlScreenSmartphone className="xl:w-[56px] xl:h-[56px] h-[40px] w-[40px]" />} />
      <CategoryBox categoryTitle="Computers" categoryIcon={<HiOutlineDesktopComputer className="xl:w-[56px] xl:h-[56px] h-[40px] w-[40px]" />} />
      <CategoryBox categoryTitle="SmartWatch" categoryIcon={<BsSmartwatch className="xl:w-[56px] xl:h-[56px] h-[40px] w-[40px]" />} />
      <CategoryBox categoryTitle="Camera" categoryIcon={<IoCameraOutline className="xl:w-[56px] xl:h-[56px] h-[40px] w-[40px]" />} />
      <CategoryBox categoryTitle="HeadPhones" categoryIcon={<FaHeadphonesSimple className="xl:w-[56px] xl:h-[56px] h-[40px] w-[40px]" />} />
      <CategoryBox categoryTitle="Gaming" categoryIcon={<IoGameControllerOutline className="xl:w-[56px] xl:h-[56px] h-[40px] w-[40px]" />} />
    </div>
  );
};
