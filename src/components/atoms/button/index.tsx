import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';

export const Button: FC = () => {
  return (
    <button className="flex justify-center ml-3">
      <CiSearch color={'blue'} />
    </button>
  );
};
