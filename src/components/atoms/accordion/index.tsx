'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import { Text } from '@/components/atoms/text';

interface IProps {
  title: string;
  items: string[];
}

export default function AccordionComponent(data: IProps) {
  return (
    <Accordion isCompact>
      <AccordionItem title={data.title}>
        {data.items?.map((item, index) => (
          <Text key={index} className="cursor-pointer hover:text-gray-300">
            {item}
          </Text>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
