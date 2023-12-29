import { Text } from '@/components/atoms/text';
import Link from 'next/link';
import { FC } from 'react';

export const Nav: FC = () => {
  return (
    <nav className=" flex justify-center  pt-4 gap-[48px] ">
      <Link href="/">
        <Text className="text-[16px] font-normal cursor-pointer  hover:underline ">Home</Text>
      </Link>
      <Text className="text-[16px] font-normal cursor-pointer hover:underline">Contact</Text>
      <Text className="text-[16px] font-normal  cursor-pointer hover:underline">About</Text>
      <Text className="text-[16px] font-normal cursor-pointer hover:underline">Sign Up</Text>
    </nav>
  );
};
