import { FC } from 'react';
import AccordionComponent from '../../atoms/accordion';

export const ProductNav: FC = () => {
  const smartphoneList = ['Samsung', 'LG', 'Xiaomi', 'Apple'];
  const eletrodomisticos = ['Geladeiras', 'Fogoes', 'Micro ondas'];
  return (
    <div className=" w-[30%] h-[100%]  border-r-1">
      <div className="m-4">
        <AccordionComponent title="Smartphones" items={smartphoneList} />
        <AccordionComponent title="Eletrodomésticos" items={eletrodomisticos} />
        <h1 className="ml-[8px] text-[16px] font-normal py-2">Tablets</h1>
        <h1 className="ml-[8px] text-[16px] font-normal py-2">Computadores</h1>
      </div>
    </div>
  );
};
