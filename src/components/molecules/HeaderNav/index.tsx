import { FC } from 'react';

import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';

export const HeaderNav: FC = () => {
  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="/">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/contact">
          Contact
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/about">
          About
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/login">
          Sign Up
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};
