import { FC } from 'react';
import AccordionComponent from '../../molecules/accordion';

export const ProductNav: FC = () => {
  const smartphoneList = ['Samsung', 'LG', 'Xiaomi', 'Apple'];
  const eletrodomisticos = ['Geladeiras', 'Fogoes', 'Micro ondas'];
  return (
    <div className=" xl:w-[30%] xl:h-[100%]  xl:border-r-1 sm:w-full xl:block sm:border-r-none hidden">
      <div className="mt-4">
        <AccordionComponent title="Smartphones" items={smartphoneList} />
        <AccordionComponent title="Eletrodomésticos" items={eletrodomisticos} />
        <h1 className="text-foreground text-large px-2 py-2">Tablets</h1>
        <h1 className="text-foreground text-large px-2">Computadores</h1>
      </div>
    </div>
  );
};
