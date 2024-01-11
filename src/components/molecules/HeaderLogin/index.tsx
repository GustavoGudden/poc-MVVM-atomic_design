import { FC } from 'react';
import { SearchInput } from '@/components/atoms/searchInput';
import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';

import { CiLogin } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

export const HeaderLogin: FC = () => {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <SearchInput />
        <Link href="/login">
          <CiLogin color="black" className="xl:w-[30px] xl:h-[30px] cursor-pointer h-[30px] w-[30px] " />
        </Link>
        <Link>
          <CiShoppingCart color="black" className="xl:w-[30px] xl:h-[30px] cursor-pointer text-black w-[30px] h-[30px]" />
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};
