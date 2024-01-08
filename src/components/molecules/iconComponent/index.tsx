import { FC, ReactNode } from 'react';

interface IIconComponent {
  icon: ReactNode;
}

export const IconComponent: FC<IIconComponent> = ({ icon }) => {
  return (
    <div className=" p-2 bg-gray-300 rounded-[50%]">
      <div className=" p-3 bg-black rounded-[50%]">{icon}</div>
    </div>
  );
};
