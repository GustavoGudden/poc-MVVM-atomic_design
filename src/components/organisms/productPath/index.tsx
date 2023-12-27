import { FC } from 'react';

interface IProductPath {
  category: string;
  name: string;
}

export const ProductPath: FC<IProductPath> = ({ category, name }) => {
  return (
    <div className="w-full flex mt-[4rem]">
      <h1 className="font-normal text-[14px] text-gray-400">Account /</h1>
      <h1 className="font-normal text-[14px]  text-gray-400">{category} /</h1>
      <h1 className="font-normal text-[14px] ">{name}</h1>
    </div>
  );
};
