import { Text } from '@/components/atoms/text';
import { NavbarBrand, NavbarContent, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link';
import { FC } from 'react';

interface IMenuHeader {
  isMenuOpen: boolean;
}

export const MenuHeader: FC<IMenuHeader> = ({ isMenuOpen }) => {
  return (
    <NavbarContent>
      <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      <NavbarBrand>
        <Link href="/">
          <Text className="font-bold text-[24px] text-black h-full">Exclusive</Text>
        </Link>
      </NavbarBrand>
    </NavbarContent>
  );
};
