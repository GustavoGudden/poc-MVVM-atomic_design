import { FC } from 'react';

// Molecules
import { LoginBannerImage } from '@/components/molecules/loginBannerImage';
import { LoginDataArea } from '@/components/molecules/loginDataArea';

interface ILoginArea {
  handleLogin: () => Promise<void>;
  setEmail: React.Dispatch<string>;
  setPassword: React.Dispatch<string>;
  handleFormLogin: (e: React.FormEvent) => void;
}

export const LoginArea: FC<ILoginArea> = ({ handleLogin, setEmail, setPassword, handleFormLogin }) => {
  return (
    <div className="flex mt-4  items-center gap-[128px] relative">
      <LoginBannerImage />
      <LoginDataArea handleLogin={handleLogin} setEmail={setEmail} setPassword={setPassword} handleFormLogin={handleFormLogin} />
    </div>
  );
};
