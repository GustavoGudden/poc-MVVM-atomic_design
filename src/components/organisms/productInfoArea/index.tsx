import { FC } from 'react';

// Components
import { ProductDescription } from '../productDescription';
import { Text } from '@/components/atoms/text';
import { Line } from '@/components/atoms/line';
import { ColorSelect } from '@/components/molecules/colorSelect';
import { SizePick } from '@/components/molecules/sizeArea';
import { AmountButton } from '@/components/atoms/amoutButton';
import { Button } from '@/components/atoms/button';

// Icons
import { CiHeart } from 'react-icons/ci';
import { DeliveryArea } from '../deliveryArea';
import { IProduct } from '@/models/ProductModel';

interface IProductInfoArea {
  product: IProduct;
}

export const ProductInfoArea: FC<IProductInfoArea> = ({ product }) => {
  return (
    <div className=" flex flex-col grow-[2] xl:pl-16 p-4">
      <Text className="text-[24px] font-semibold">{product.name}</Text>
      <ProductDescription description={product.description} price={product.price} />
      <Line className="border-t-2 mt-4" />
      <ColorSelect />
      <SizePick />
      <div className="flex gap-4 mt-4 h-[44px]">
        <AmountButton />
        <Button className="bg-red-500 w-[165px] flex justify-center h-full  items-center text-white text-[16px] font-medium rounded-[4px]">
          Buy Now
        </Button>
        <Button className="border-2  rounded-[4px] w-[44px] flex justify-center items-center hover:bg-red-500 hover:text-white hover:border-none">
          <CiHeart className="w-[30px] h-[30px]" />
        </Button>
      </div>
      <DeliveryArea />
    </div>
  );
};
