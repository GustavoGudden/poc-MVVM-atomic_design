import { Text } from '@/components/atoms/text';
import { IProduct } from '@/models/ProductModel';
import Link from 'next/link';
import { FC } from 'react';

interface IProductInfo {
  data: IProduct;
  onClickProductCard: (id: string) => void;
}

export const ProductInfo: FC<IProductInfo> = ({ onClickProductCard, data }) => {
  const handleClick = () => {
    onClickProductCard(data.id);
  };

  return (
    <div className="flex flex-col  justify-end  py-2  " onClick={handleClick}>
      <Text className="font-medium text-[16px] text-black">
        <Link href={`/product/${data.id}`}>{data.name}</Link>
      </Text>
      <div className="flex gap-1">
        <Text className="font-medium line-through text-[14px] text-red-500">$120</Text>
        <Text className="font-semibold ">{data.price}</Text>
      </div>
      <div>avaliation</div>
    </div>
  );
};
