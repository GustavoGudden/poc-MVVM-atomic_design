import { FC } from 'react';
import { NavChip } from '../../molecules/navChip';

export const Nav: FC = () => {
  return (
    <nav className="w-full h-[50px] pt-4 ">
      <div className="flex h-full items-center gap-4 justify-center">
        <NavChip chipText="Home" />
        <NavChip chipText="Storage" />
        <NavChip chipText="About" />
        <NavChip chipText="Contact" />
      </div>
    </nav>
  );
};
