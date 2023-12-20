import { Text } from '@/components/atoms/text';
import { FC } from 'react';

interface IPromotionText {
  children: string;
}

export const CategoryText: FC<IPromotionText> = ({ children }) => {
  return (
    <div className="mt-4">
      <div />
      <Text className="font-semibold text-[36px]">{children}</Text>
    </div>
  );
};
