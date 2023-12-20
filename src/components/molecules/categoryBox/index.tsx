import { Text } from '@/components/atoms/text';
import { FC, ReactNode } from 'react';

interface ICartegoryBox {
  categoryTitle: string;
  categoryIcon: ReactNode;
}

export const CategoryBox: FC<ICartegoryBox> = ({ categoryIcon, categoryTitle }) => {
  return (
    <div className="flex flex-col flex-auto justify-center items-center w-[170px] h-[145px] gap-1 border border-gray-300 rounded-[4px] hover:bg-red-500 hover:text-white">
      {categoryIcon}
      <Text className="font-normal text-[16px]">{categoryTitle}</Text>
    </div>
  );
};
