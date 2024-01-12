import { FC } from 'react';
import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { Input } from '@nextui-org/react';

export const LoginDataArea: FC = () => {
  return (
    <div className="flex flex-col  xl:gap-[40px] xl:w-[400px] xl:h-full w-full h-[70vh] px-4  gap-4 ">
      <div className=" flex flex-col gap-[24px]">
        <Text className="text-[36px] font-medium">Log in to Exclusive</Text>
        <Text className="text-[16px] font-normal">Enter your details below</Text>
      </div>
      <div className="flex flex-col gap-[40px]">
        <Input type="email" variant="underlined" placeholder="Email or Phone Number" classNames={{ inputWrapper: ['border-b-1'] }} isRequired />
        <Input type="password" variant="underlined" placeholder="Password" classNames={{ inputWrapper: ['border-b-1'] }} isRequired />
      </div>
      <div className="w-full flex gap-4 items-center justify-between">
        <Button className="text-white w-[150px] p-3 bg-red-500 rounded-[4px] text-[16px] font-medium  hover:scale-105">Login In</Button>
        <Text className="font-normal text-[16px] text-red-500 cursor-pointer">Forget Password?</Text>
      </div>
    </div>
  );
};
