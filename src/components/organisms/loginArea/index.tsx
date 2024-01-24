import { FC } from 'react';

// Molecules
import { LoginBannerImage } from '@/components/molecules/loginBannerImage';
import { LoginDataArea } from '@/components/molecules/loginDataArea';

interface ILoginArea {
  handleLogin: () => Promise<void>;
  setName: React.Dispatch<string>;
  setPassword: React.Dispatch<string>;
}

export const LoginArea: FC<ILoginArea> = ({ handleLogin, setName, setPassword }) => {
  return (
    <div className="flex mt-4  items-center gap-[128px] relative">
      <LoginBannerImage />
      <LoginDataArea handleLogin={handleLogin} setName={setName} setPassword={setPassword} />
    </div>
  );
};
