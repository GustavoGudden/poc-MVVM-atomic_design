import { IProduct } from '@/models/ProductModel';
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
    <div className="flex flex-col  justify-end px-4 py-2 border-t-2 " onClick={handleClick}>
      <h1 className="font-medium text-[16px] text-black">{data.name}</h1>
      <div className="flex gap-1">
        <h2 className="font-medium line-through text-[14px] text-red-500">$120</h2>
        <h2 className="font-semibold ">{data.price}</h2>
      </div>
      <div>avaliation</div>
    </div>
  );
};
