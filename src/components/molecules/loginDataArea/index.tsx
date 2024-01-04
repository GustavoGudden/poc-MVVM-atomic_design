import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { Input, extendVariants } from '@nextui-org/react';
import { FC } from 'react';

export const LoginDataArea: FC = () => {
  return (
    <div className="flex flex-col  gap-[40px] w-[400px] ">
      <div className=" flex flex-col gap-[24px]">
        <Text className="text-[36px] font-medium">Log in to Exclusive</Text>
        <Text className="text-[16px] font-normal">Enter your details below</Text>
      </div>
      <div className="flex flex-col gap-[40px]">
        <MyInput type="email" variant="underlined" placeholder="Email or Phone Number" />
        <Input type="password" variant="underlined" placeholder="Password" className="" />
      </div>
      <div className="w-full flex gap-4 items-center justify-between">
        <Button className="text-white w-[150px] p-3 bg-red-500 rounded-[4px] text-[16px] font-medium">Login In</Button>
        <Text>Forget Password?</Text>
      </div>
    </div>
  );
};

const MyInput = extendVariants(Input, {});
