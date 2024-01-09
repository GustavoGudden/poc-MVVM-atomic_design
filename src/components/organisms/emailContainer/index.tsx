import { FC } from 'react';

import { Text } from '@/components/atoms/text';

// Icons
import { CiMail } from 'react-icons/ci';

export const EmailContainer: FC = () => {
  return (
    <div className="flex flex-col gap-[24px] mb-4 mt-4">
      <div className="flex gap-4 items-center">
        <div className="p-2 bg-red-500 rounded-[50%]">
          <CiMail className="text-white w-[25px] h-[25px]" />
        </div>
        <Text className="text-[16px] font-medium">Write To US</Text>
      </div>
      <div className='flex flex-col gap-4'>
        <Text className="text-[14px] font-normal">Fill out our form and we will contact you within 24 hours.</Text>
        <Text className="text-[14px] font-normal">Emails: customer@exclusive.com</Text>
        <Text className="text-[14px] font-normal">Emails: support@exclusive.com</Text>
      </div>
    </div>
  );
};
