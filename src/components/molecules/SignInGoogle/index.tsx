'use client';
import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Text } from '@/components/atoms/text';
import { signIn } from 'next-auth/react';

export const SignInGoogle: FC = () => {
  return (
    <div
      className="flex justify-center  items-center group  w-full border-1  p-4 rounded-[4px] gap-2 hover:bg-blue-400 "
      onClick={() => signIn('google')}
    >
      <FcGoogle className="w-[24px] h-[24px]" />
      <Text className="font-normal text-[16px] text-black group-hover:text-white">Sign up with Google</Text>
    </div>
  );
};
