'use client';

import { HomeTemplate } from '@/components/templates/homeTemplate';

// View Model
import { useLoginViewModel } from './view.model';
import { LoginTemplate } from '@/components/templates/loginTemplate';

export default function LoginView() {
  const { redirectToCart } = useLoginViewModel();

  return <LoginTemplate redirectToCart={redirectToCart} />;
}
