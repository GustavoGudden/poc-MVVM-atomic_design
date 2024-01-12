import { Text } from '@/components/atoms/text';
import { FC } from 'react';

interface IProductPath {
  page: string;
  category?: string;
  name?: string;
}

export const ProductPath: FC<IProductPath> = ({ page, category, name }) => {
  return (
    <div className="w-full flex xl:mt-16 my-8">
      <Text className="font-normal text-[16px] text-gray-400 mr-2">{page}</Text>
      {category ? <Text className={`font-normal text-[16px]    mr-2 ${name ? 'text-gray-400' : 'text-black'}`}> / {category} </Text> : null}
      {name ? <Text className="font-normal text-[14px]  mr-2 ">/ {name}</Text> : null}
    </div>
  );
};
