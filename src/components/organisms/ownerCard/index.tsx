import { Text } from '@/components/atoms/text';
import { IOwners } from '@/models/owners.model';
import Image from 'next/image';
import { FC } from 'react';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa6';

interface IOwner {
  owner: IOwners;
}

export const OwnerCard: FC<IOwner> = ({ owner }) => {
  return (
    <div className="flex flex-col w-[400px] gap-2 mb-16 ">
      <div className="relative w-full h-[400px] rounded-[4px] bg-gray-100">
        <Image src={owner.image} alt="pessoa foto" fill objectFit="scale-down" />
      </div>
      <Text className="font-medium text-[32px]">{owner.name}</Text>
      <Text className="font-normal text-[16px]">{owner.function}</Text>
      <div className="flex gap-4">
        <CiTwitter />
        <FaInstagram />
        <CiLinkedin />
      </div>
    </div>
  );
};
