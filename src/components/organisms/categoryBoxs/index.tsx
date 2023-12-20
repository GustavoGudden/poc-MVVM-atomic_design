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
  const style = { width: '56px', height: '56px' };
  return (
    <div className="flex gap-[30px] w-full justify-center mt-4">
      <CategoryBox categoryTitle="Phones" categoryIcon={<SlScreenSmartphone style={style} />} />
      <CategoryBox categoryTitle="Computers" categoryIcon={<HiOutlineDesktopComputer style={style} />} />
      <CategoryBox categoryTitle="SmartWatch" categoryIcon={<BsSmartwatch style={style} />} />
      <CategoryBox categoryTitle="Camera" categoryIcon={<IoCameraOutline style={style} />} />
      <CategoryBox categoryTitle="HeadPhones" categoryIcon={<FaHeadphonesSimple style={style} />} />
      <CategoryBox categoryTitle="Gaming" categoryIcon={<IoGameControllerOutline style={style} />} />
    </div>
  );
};
