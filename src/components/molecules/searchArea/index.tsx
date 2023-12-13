import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Button } from '../../atoms/button';
import { Input } from '../../atoms/input';

export const SearchArea: FC = () => {
  return (
    <div className="flex items-center bg-gray-100 gap-4 p-1 rounded-xl">
      <Button />
      <Input />
    </div>
  );
};
