import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';

import { Input } from '@nextui-org/react';

export const SearchArea: FC = () => {
  return (
    <Input
      type="email"
      radius="sm"
      placeholder="What are you looking for?"
      labelPlacement="outside"
      endContent={<CiSearch color="black" className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
    />
  );
};
