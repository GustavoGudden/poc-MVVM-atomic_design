import { FC } from 'react';

interface IProductPath {
  page: string;
  category?: string;
  name?: string;
}

export const ProductPath: FC<IProductPath> = ({ page, category, name }) => {
  return (
    <div className="w-full flex mt-[4rem]">
      <h1 className="font-normal text-[14px] text-gray-400 mr-2">{page}</h1>
      {category ? <h1 className={`font-normal text-[14px]    mr-2 ${name ? 'text-gray-400' : 'text-black'}`}> / {category} </h1> : null}
      {name ? <h1 className="font-normal text-[14px]  mr-2 ">/ {name}</h1> : null}
    </div>
  );
};
