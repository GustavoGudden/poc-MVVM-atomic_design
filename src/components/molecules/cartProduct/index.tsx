import { Text } from '@/components/atoms/text';
import { IProduct } from '@/models/ProductModel';
import { Input } from '@nextui-org/react';
import Image from 'next/image';
import { FC } from 'react';

interface ICartProduct {
  product: IProduct;
}

export const CartProduct: FC<ICartProduct> = ({ product }) => {
  return (
    <div className="grid grid-cols-4 shadow-lg mt-8 border rounded-[4px]">
      <div className="flex justify-start items-center p-4 gap-4 ">
        <Image src={product.imageBannerIcon} alt="monitor" width={50} height={39} />
        <Text className="text-[16px] font-normal">{product.name}</Text>
      </div>
      <div className="flex justify-center items-center  p-4">${product.price}</div>
      <div className="flex justify-center  p-4">
        <Input type="number" defaultValue="1" placeholder="1" labelPlacement="outside" className="w-[80px] rounded-[4px]" />
      </div>
      <div className="flex justify-end  items-center mr-8 p-4">$650</div>
    </div>
  );
};
