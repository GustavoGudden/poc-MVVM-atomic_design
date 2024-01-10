import { FC } from 'react';
import { PhoneContainer } from '../PhoneContainer';
import { EmailContainer } from '../emailContainer';
import { Line } from '@/components/atoms/line';

export const ContactArea: FC = () => {
  return (
    <div className="border flex-1 p-6 shadow-2xl rounded-[4px]">
      <PhoneContainer />
      <Line className="border-t-1 w-full  " />
      <EmailContainer />
    </div>
  );
};
