import { Text } from '@/components/atoms/text';
import { FC } from 'react';
import { FiPhone } from 'react-icons/fi';

export const PhoneContainer: FC = () => {
  return (
    <div className="flex flex-col gap-[24px] mb-4">
      <div className="flex gap-4 items-center">
        <div className="p-2 bg-red-500 rounded-[50%]">
          <FiPhone className="text-white w-[25px] h-[25px]" />
        </div>
        <Text className="text-[16xp] font-medium ">Call To Us</Text>
      </div>
      <div className="flex flex-col gap-4">
        <Text className="text-[14px] font-normal">We are available 24/7, 7 days a week.</Text>
        <Text className="text-[14px] font-normal">Phone: +8801611112222</Text>
      </div>
    </div>
  );
};
