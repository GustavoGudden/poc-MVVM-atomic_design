import { ColorPick } from '@/components/atoms/colorPick';
import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const ColorSelect: FC = () => {
  const colors = ['#EDFA00', '#E07575'];

  return (
    <div className="flex gap-3 mt-4">
      <Text className="text-[20px] font-normal">Colours:</Text>
      {colors.map((color, index) => (
        <ColorPick key={index} color={color} />
      ))}
    </div>
  );
};
