'use client';

import { FC } from 'react';

type color = {
  color: string;
};

export const ColorPick: FC<color> = ({ color }) => {
  
  return (
    <button className="w-[25px] h-[25px] rounded-[100%] border p-1 ">
      <div className="w-full h-full rounded-[100%]" style={{ backgroundColor: color }} />
    </button>
  );
};
