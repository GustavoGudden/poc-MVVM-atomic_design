import Image from 'next/image';
import { FC } from 'react';

export const LoginBannerImage: FC = () => {
  return (
    <div className=" relative w-[50%] h-[80vh] hidden xl:block ">
      <Image alt="carrinho e celular" src="/images/login.png" quality={100} fill={true} />
    </div>
  );
};
