import { FC } from 'react';
import { SearchArea } from '../../molecules/searchArea';
import { SignInArea } from '../../molecules/signIn-singUpArea';
import { Text } from '../../atoms/text';
import { Nav } from '../nav';

interface IHeader {
  redirectToCart: () => void;
}

export const Header: FC<IHeader> = ({ redirectToCart }) => {
  return (
    <header className="w-full items-baseline border-b justify-between py-4 flex px-20">
      <div>
        <Text className="font-bold text-[24px] text-black h-full">Exclusive</Text>
      </div>
      <Nav />
      <div className=" flex gap-4">
        <SearchArea />
        <SignInArea redirectToCart={redirectToCart} />
      </div>
    </header>
  );
};
