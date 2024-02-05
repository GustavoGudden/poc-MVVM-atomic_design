import { FC } from 'react';
import { Button } from '@/components/atoms/button';
import { Text } from '@/components/atoms/text';
import { Input } from '@nextui-org/react';
import { SignInGoogle } from '../SignInGoogle';

interface ILoginData {
  handleLogin: () => Promise<void>;
  setEmail: React.Dispatch<string>;
  setPassword: React.Dispatch<string>;
  handleFormLogin: (e: React.FormEvent) => void;
}

export const LoginDataArea: FC<ILoginData> = ({ handleLogin, setEmail, setPassword, handleFormLogin }) => {
  return (
    <div className="flex flex-col  xl:gap-[40px] xl:w-[400px] xl:h-full w-full h-[70vh] px-4  gap-4 ">
      <div className=" flex flex-col gap-[24px]">
        <Text className="text-[36px] font-medium">Log in to Exclusive</Text>
        <Text className="text-[16px] font-normal">Enter your details below</Text>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleFormLogin}>
        <div className="flex flex-col gap-[20px]">
          <Input
            type="text"
            variant="underlined"
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Name or email"
            classNames={{ inputWrapper: ['border-b-1'] }}
            isRequired
          />
          <Input
            type="password"
            variant="underlined"
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            classNames={{ inputWrapper: ['border-b-1'] }}
            isRequired
          />
        </div>
        <div className="w-full flex gap-4 items-center justify-between">
          <Button className="text-white w-[150px] p-3 bg-red-500 rounded-[4px] text-[16px] font-medium  hover:scale-105" type="submit">
            Login In
          </Button>
          <Text className="font-normal text-[16px] text-red-500 cursor-pointer">Forget Password?</Text>
        </div>
      </form>
      <SignInGoogle />
    </div>
  );
};
