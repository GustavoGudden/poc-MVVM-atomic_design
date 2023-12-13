import { FC } from 'react';
import { Text } from '../../atoms/text';

interface InavChips {
  chipText: string;
}

export const NavChip: FC<InavChips> = ({ chipText }) => {
  return (
    <div className="flex justify-center p-2 bg-gray-100 rounded-3xl">
      <Text className="text-gray-500 text-[16px]">{chipText}</Text>
    </div>
  );
};
