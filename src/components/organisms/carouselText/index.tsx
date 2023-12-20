import { CategoryText } from '@/components/molecules/categoryText';
import { PromotionTime } from '@/components/molecules/promotionTimeText';
import { FC } from 'react';

interface ICarouselText {
  title: string;
  timeText: string;
}

export const CarouselText: FC<ICarouselText> = ({ title, timeText }) => {
  return (
    <div className="mt-8">
      <PromotionTime timeText={timeText} />
      <CategoryText>{title}</CategoryText>
    </div>
  );
};
