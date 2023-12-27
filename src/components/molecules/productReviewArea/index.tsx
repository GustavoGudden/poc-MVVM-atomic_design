import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const ProductReviewArea: FC = () => {
  return (
    <div className="flex gap-4">
      <Text className="text-[14px] font-normal">(150 Reviews)</Text>
      <Text>|</Text>
      <Text className="text-[14px] font-normal text-green-500">In Stock</Text>
    </div>
  );
};
