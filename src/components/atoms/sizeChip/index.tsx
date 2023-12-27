import { FC } from 'react';
import { Text } from '@/components/atoms/text';

interface ISize {
  size: string;
}

export const SizeChip: FC<ISize> = ({ size }) => {
  return (
    <div className="w-[32px] h-[32px] border flex justify-center items-center rounded-[4px] hover:bg-red-500 hover:text-white ">
      <Text className="text-[14px] font-medium">{size}</Text>
    </div>
  );
};
