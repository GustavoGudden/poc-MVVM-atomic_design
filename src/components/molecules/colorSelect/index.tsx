import { ColorPick } from '@/components/atoms/colorPick';
import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const ColorSelect: FC = () => {
  const color1 = '#A0BCE0';
  const color2 = '#E07575';

  return (
    <div className="flex gap-3 mt-4">
      <Text className="text-[20px] font-normal">Colours:</Text>
      <ColorPick color={color1} />
      <ColorPick color={color2} />
    </div>
  );
};
