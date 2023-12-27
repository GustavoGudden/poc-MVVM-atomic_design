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

export const ProductInfoArea: FC = () => {
  return (
    <div className=" flex flex-col grow-[2] pl-16">
      <Text className="text-[24px] font-semibold">Havic HV G-92 Gamepad</Text>
      <ProductDescription
        description={`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess  free removal Pressure sensitive.`}
        price={192.0}
      />
      <Line />
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
