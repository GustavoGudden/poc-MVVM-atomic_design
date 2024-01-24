import { LoginViewModel } from './model';
import { api } from '@/externalApi/axios';
import { useAuth } from '@/context/auth.context';
import { HmacUltils } from '@/utils/hmac.util';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useLoginViewModel = (): LoginViewModel => {
  const { generateHmacSignature } = HmacUltils();
  const [name, setName] = useState('');
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

  const redirectToHome = () => {
    router.push('/');
  };

  return { handleLogin, setName, setPassword, redirectToHome };
};
