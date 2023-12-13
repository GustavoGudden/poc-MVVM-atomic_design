import { FC } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { Text } from '../../atoms/text';

export const SignInArea: FC = () => {
  return (
    <>
      <div className="flex items-center">
        <FaRegUser color={'blue'} />
        <Text />
      </div>
      <div className="flex items-center">
        <MdOutlineLocalGroceryStore color={'blue'} />
        <Text />
      </div>
    </>
  );
};
