import { Text } from '@/components/atoms/text';
import { IProduct } from '@/models/ProductModel';
import { Input } from '@nextui-org/react';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

interface ICartProduct {
  product: IProduct & { amount: number };
  setAmount: Dispatch<SetStateAction<{ amount: number; id: String }>>;
  handleChangeAmount: (amount: number, id: string) => void;
}

export const CartProduct: FC<ICartProduct> = ({ product, setAmount, handleChangeAmount }) => {
  return (
    <div className="grid grid-cols-4  shadow-lg mt-8 border rounded-[4px]">
      <div className="flex justify-center  items-center p-4 gap-4 border-r ">
        <Image src={product.imageBannerIcon} alt="monitor" width={50} height={39} />
        <Text className="xl:text-[16px] xl:block text-[12px] hidden  font-normal">{product.name}</Text>
      </div>
      <div className="flex justify-center items-center p-4 border-r  ">${product.price}</div>
      <div className="flex justify-center items-center border-r ">
        <Input
          type="number"
          defaultValue={product.amount.toString()}
          onChange={(e) => handleChangeAmount(parseInt(e.target.value), product.id)}
          placeholder="1"
          min={0}
          className="xl:w-[80px] w-[50px] rounded-[4px]"
        />
      </div>
      <div className="flex justify-center items-center  p-4">$650</div>
    </div>
  );
};
