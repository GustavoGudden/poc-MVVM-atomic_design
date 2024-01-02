import { IProduct } from '@/models/ProductModel';
import { FC } from 'react';

interface IProductInfo {
  data: IProduct;
  onClickProductCard: (id: string) => void;
}

export const ProductInfo: FC<IProductInfo> = ({ onClickProductCard, data }) => {
  const handleClick = () => {
    console.log('Product card clicked with id:', data.id);
    onClickProductCard(data.id);
  };

  return (
    <div className="flex flex-col  justify-end px-4 py-2 border-t-2 " onClick={handleClick}>
      <h1>HAVIT HV-G92 Gamepad</h1>
      <div className="flex gap-1">
        <h2 className="font-medium line-through text-[14px] text-red-500">$120</h2>
        <h2 className="font-semibold ">$110</h2>
      </div>
      <div>avaliation</div>
    </div>
  );
};
