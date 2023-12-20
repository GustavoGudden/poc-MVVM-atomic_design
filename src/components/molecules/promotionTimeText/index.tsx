import { Text } from '@/components/atoms/text';
import { FC } from 'react';

interface IPromotionTime {
  timeText: string;
}

export const PromotionTime: FC<IPromotionTime> = ({ timeText }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[20px] bg-red-600 h-[40px] rounded-[4px]" />
      <Text className="font-semibold text-[16px] text-red-600">{timeText}</Text>
    </div>
  );
};
