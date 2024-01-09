import { Text } from '@/components/atoms/text';
import Link from 'next/link';
import { FC } from 'react';

interface INav {}

export const Nav: FC<INav> = ({}) => {
  return (
    <nav className=" flex justify-center  pt-4 gap-[48px] ">
      <Link href="/">
        <Text className="text-[16px] font-normal cursor-pointer  hover:underline ">Home</Text>
      </Link>
      <Text className="text-[16px] font-normal cursor-pointer hover:underline">
        <Link href="/contact">Contact</Link>
      </Text>
      <Text className="text-[16px] font-normal  cursor-pointer hover:underline">
        <Link href="/about">About</Link>
      </Text>
      <Text className="text-[16px] font-normal cursor-pointer hover:underline">Sign Up</Text>
    </nav>
  );
};
