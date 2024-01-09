import { FC } from 'react';

import { AdvantageItem } from '@/components/molecules/advantageItem';

// Icons
import { TbTruckDelivery } from 'react-icons/tb';
import { PiHeadsetLight } from 'react-icons/pi';
import { SiAdguard } from 'react-icons/si';

export const AdvantagesContainer: FC = () => {
  return (
    <div className="flex gap-4 mt-16 mb-16 ">
      <AdvantageItem
        icon={<TbTruckDelivery className="w-[40px] h-[40px] text-white" />}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <AdvantageItem
        icon={<PiHeadsetLight className="w-[40px] h-[40px] text-white" />}
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
      />
      <AdvantageItem
        icon={<SiAdguard className="w-[40px] h-[40px] text-white" />}
        title="MONEY BACK GUARANTEE"
        description="We reurn money within 30 days"
      />
    </div>
  );
};
