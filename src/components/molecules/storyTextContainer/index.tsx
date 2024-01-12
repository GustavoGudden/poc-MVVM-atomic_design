import { Text } from '@/components/atoms/text';
import { FC } from 'react';

export const StoryTextContainer: FC = () => {
  return (
    <div className=" flex flex-col flex-1 xl:gap-[40px] gap-4 justify-center">
      <Text className="xl:text-[54px] text-[24px] font-semibold">Our Story</Text>
      <div className="flex gap-[24px] flex-col">
        <Text className="font-normal xl:text-[16px] text-[12px]">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          <br /> makterplace with an active presense in Bangladesh. Supported
          <br /> by wide range of tailored marketing, data and service solutions,
          <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
          millioons customers across the region.
        </Text>
        <Text className="font-normal  xl:text-[16px] text-[12px]">
          Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories
          <br /> ranging from consumer.
        </Text>
      </div>
    </div>
  );
};
