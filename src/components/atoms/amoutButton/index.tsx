`use client`;
import { FC, useState } from 'react';
import { Text } from '@/components/atoms/text';

export const AmountButton: FC = () => {
  const [count, setCount] = useState(1);

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className=" flex  gap-4 justify-between items-center border-2 w-[200px] rounded-[4px] h-[44px] ">
      <button onClick={handleSubtract} className="border-r-2 px-4 h-full">
        -
      </button>
      <Text className="text-[20px] font-medium">{count}</Text>
      <button onClick={() => setCount(count + 1)} className="border-l-2 px-4 h-full bg-red-500 text-white rounded-[4px]">
        +
      </button>
    </div>
  );
};
