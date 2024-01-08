import Image from 'next/image';
import { FC } from 'react';

export const StoryImageContainer: FC = () => {
  return (
    <div className="flex-1 w-full p-0 h-[600px] relative">
      <Image src={'/images/aboutBanner.png'} alt="" fill={true} quality={100} />
    </div>
  );
};
