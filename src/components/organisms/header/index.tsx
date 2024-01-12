'use client';

import { FC, useState } from 'react';

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import { Text } from '@/components/atoms/text';
import { MenuHeader } from '@/components/molecules/menuHeader';
import { HeaderNav } from '@/components/molecules/HeaderNav';
import { HeaderLogin } from '@/components/molecules/HeaderLogin';
import { HeaderResponsiveMenu } from '@/components/molecules/headerResponsiveNav';

interface IHeader {}

export const Header: FC<IHeader> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b-1 py-2 px-4 xl:px-20 ">
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="m-0 items-baseline "
        maxWidth="full"
        classNames={{
          wrapper: ['p-0 flex'],
          item: ['flex gap-4'],
        }}
      >
        <MenuHeader isMenuOpen={isMenuOpen} />
        <HeaderNav />
        <HeaderLogin />
        {/* menu responsivel */}
        <HeaderResponsiveMenu />
      </Navbar>
    </header>
  );
};
