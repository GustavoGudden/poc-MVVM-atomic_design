import Image from 'next/image';
import { FC } from 'react';

export const StoryImageContainer: FC = () => {
  return (
    <div className="xl:flex-1 w-full p-0 xl:h-[600px] relative  mt-4  h-[300px]  rounded-[4px]">
      <Image src={'/images/aboutBanner.png'} alt="" fill={true} quality={100} />
    </div>
  );
};
