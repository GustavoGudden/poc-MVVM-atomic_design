import { SizeChip } from '@/components/atoms/sizeChip';
import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const SizePick: FC = () => {
  const sizes = [{ size: 'XS' }, { size: 'S' }, { size: 'M' }, { size: 'l' }, { size: 'XL' }];

  return (
    <div className="flex gap-4 mt-4">
      <Text className="text-[20px] font-normal">Size:</Text>
      {sizes.map(({ size }, index) => (
        <SizeChip size={size} key={index} />
      ))}
    </div>
  );
};
