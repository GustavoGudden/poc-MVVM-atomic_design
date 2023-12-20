import { FC } from 'react';

import { Text } from '../../atoms/text';

// Icons
import { CiLogin } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

export const SignInArea: FC = () => {
  return (
    <>
      <div className="flex items-center">
        <CiLogin color="black" className="w-[25px] h-[25px]" />
        <Text />
      </div>
      <div className="flex items-center">
        <CiShoppingCart className="w-[25px] h-[25px]" />
        <Text />
      </div>
    </>
  );
};
