'use client';

import { HomeTemplate } from '@/components/templates/homeTemplate';

// View Model
import { useLoginViewModel } from './view.model';
import { LoginTemplate } from '@/components/templates/loginTemplate';

export default function LoginView() {
  const { handleLogin, setName, setPassword, redirectToHome } = useLoginViewModel();

  return <LoginTemplate handleLogin={handleLogin} setName={setName} setPassword={setPassword} redirectToHome={redirectToHome} />;
}
