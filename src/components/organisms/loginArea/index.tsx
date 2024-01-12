import { FC } from 'react';

// Molecules
import { LoginBannerImage } from '@/components/molecules/loginBannerImage';
import { LoginDataArea } from '@/components/molecules/loginDataArea';

export const LoginArea: FC = () => {
  return (
    <div className="flex mt-4  items-center gap-[128px] relative">
      <LoginBannerImage />
      <LoginDataArea />
    </div>
  );
};
