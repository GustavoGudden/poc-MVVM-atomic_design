import { FC } from 'react';
import { SearchArea } from '../../molecules/searchArea';
import { SignInArea } from '../../molecules/signIn-singUpArea';
import { Text } from '../../atoms/text';

export const Header: FC = () => {
  return (
    <header className="w-full items-baseline border-b justify-between py-4 flex px-8">
      <Text className="font-[700] text-[24px] text-blue-600 h-full">Top pods</Text>
      <div className=" flex gap-4">
        <SearchArea />
        <SignInArea />
      </div>
    </header>
  );
};
