import { Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { FC } from 'react';

export const HeaderResponsiveMenu: FC = () => {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/" size="lg">
          Home
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/contact" size="lg">
          Contact
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/about" size="lg">
          About
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/login" size="lg">
          Sing Up
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
};
