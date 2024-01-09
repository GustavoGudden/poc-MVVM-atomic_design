import { Button } from '@/components/atoms/button';
import { Input, Textarea } from '@nextui-org/react';
import { FC } from 'react';

export const ContactForm: FC = () => {
  return (
    <div className=" flex flex-[2] flex-col border p-4 rounded-[4px] shadow-2xl">
      <div className="flex gap-4 ">
        <Input
          size="sm"
          label="Your Name"
          classNames={{
            inputWrapper: ['bg-gray-50'],
          }}
        />
        <Input
          size="sm"
          type="email"
          label="Your Email"
          classNames={{
            inputWrapper: ['bg-gray-50'],
          }}
        />
        <Input
          size="sm"
          label="Your Phone"
          classNames={{
            inputWrapper: ['bg-gray-50'],
          }}
        />
      </div>
      <Textarea
        placeholder="Your Massage"
        className="w-full h-full mt-4"
        minRows={10}
        fullWidth={true}
        classNames={{
          inputWrapper: ['bg-gray-50'],
        }}
      />

      <div className="w-full flex justify-end">
        <Button className=" px-4 py-2 h-full bg-red-500 text-white font-medium text-[16px] rounded-[4px]">Send Massage</Button>
      </div>
    </div>
  );
};
