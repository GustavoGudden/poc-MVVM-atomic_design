import { Text } from '@/components/atoms/text';
import { ProductReviewArea } from '@/components/molecules/productReviewArea';
import { FC } from 'react';

interface IProductDescriptor {
  price: number;
  description: string;
}

export const ProductDescription: FC<IProductDescriptor> = ({ description, price }) => {
  return (
    <div className="flex flex-col w-full xl:w-[600px]">
      <ProductReviewArea />
      <Text className="text-[24px] font-normal">${price}</Text>
      <Text className="text-[14px] font-normal">{description}</Text>
    </div>
  );
};
