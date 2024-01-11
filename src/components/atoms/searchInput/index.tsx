import { FC } from 'react';
import { Input } from '@nextui-org/react';

import { CiSearch } from 'react-icons/ci';

export const SearchInput: FC = () => {
  return (
    <Input
      type="email"
      className="hidden sm:flex"
      radius="sm"
      placeholder="What are you looking for?"
      labelPlacement="outside"
      endContent={<CiSearch color="black" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
    />
  );
};
