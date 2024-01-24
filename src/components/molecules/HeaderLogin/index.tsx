import { FC } from 'react';
import { SearchInput } from '@/components/atoms/searchInput';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, NavbarContent, NavbarItem } from '@nextui-org/react';

import { CiLogin } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

import { useSession, signOut } from 'next-auth/react';

export const HeaderLogin: FC = () => {
  const { data: session } = useSession();

  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <SearchInput />
        {session ? (
          <Dropdown>
            <DropdownTrigger>
              <Avatar src={session!.user!.image!} className="w-[60px] hover:scale-90" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="delete" color="secondary">
                Profile
              </DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger" onClick={() => signOut()}>
                SignOut
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Link href="/login">
            <CiLogin color="black" className="xl:w-[30px] xl:h-[30px] cursor-pointer h-[30px] w-[30px] " />
          </Link>
        )}
        <Link href="/cart">
          <CiShoppingCart color="black" className="xl:w-[30px] xl:h-[30px] cursor-pointer text-black w-[30px] h-[30px]" />
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};
