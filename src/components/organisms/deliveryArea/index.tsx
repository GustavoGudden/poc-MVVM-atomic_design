import { FC } from 'react';

import { DeliveryBox } from '@/components/molecules/deliveryBox';

//Icons
import { TbTruckDelivery } from 'react-icons/tb';
import { TiArrowSync } from 'react-icons/ti';
import { Line } from '@/components/atoms/line';

export const DeliveryArea: FC = () => {
  return (
    <div className="flex flex-col mt-4   border-2 rounded-[4px] ">
      <DeliveryBox
        icon={<TbTruckDelivery className="w-[40px] h-[40px]" />}
        title="Free Delivery"
        description="Enter your postal code for Delivery Availability"
      />
      <Line className='border-t-2 w-full"' />
      <DeliveryBox
        icon={<TiArrowSync className="w-[40px] h-[40px]" />}
        title="Return Delivery"
        description="Free 30 Days Delivery Returns. Details"
      />
    </div>
  );
};
