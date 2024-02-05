import { LoginViewModel } from './model';
import { api } from '@/externalApi/axios';
import { useAuth } from '@/context/auth.context';
import { HmacUltils } from '@/utils/hmac.util';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const useLoginViewModel = (): LoginViewModel => {
  const { generateHmacSignature } = HmacUltils();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const { setUserToken } = useAuth();

  const handleLogin = async () => {
    const hmac = generateHmacSignature('POST', JSON.stringify({ name, password }), '/sing-in', 'application/json');
    try {
      const response = await api.post(
        '/auth/sing-in',
        {
          name,
          password,
        },
        {
          headers: {
            hmac,
          },
        }
      );
      setUserToken(response.data.tokens.access_token);
    } catch (erro) {}
  };

  const handleFormLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      console.log('[LOGIN_RESPONSE]: ', response);

      if (!response?.error) {
        router.refresh();
        router.push('/private');
      }
    } catch (error) {
      console.log('[LOGIN_ERROR]: ', error);
    }
  };

  const redirectToHome = () => {
    router.push('/');
  };

  return { handleLogin, setEmail, setPassword, redirectToHome, handleFormLogin };
};
