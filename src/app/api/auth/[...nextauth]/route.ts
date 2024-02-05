import NextAuth from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import { HmacUltils } from '@/utils/hmac.util';
import { api } from '@/externalApi/axios';

const { generateHmacSignature } = HmacUltils();

const handler = NextAuth({
  secret: 'dajdpqajd',
  providers: [
    GoogleProvider({
      clientId: process!.env!.CLIENTID!,
      clientSecret: process!.env!.CLIENTSECRET!,
    }),
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const hmac = generateHmacSignature(
          'POST',
          JSON.stringify({ email: credentials?.email, password: credentials?.password }),
          '/sing-in',
          'application/json'
        );

        try {
          const response = await api.post(
            '/auth/sing-in',
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                hmac,
              },
            }
          );
          if (response.data.tokens.access_token) {
            const userResponse = await fetchUserInfo(response.data.tokens.access_token, credentials!.email);
            return userResponse!.data!.user;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

async function fetchUserInfo(token: string, email: string) {
  console.log(token);
  return api.get(`/user/initial-details?email=${email}`, {
    headers: {
      token: token,
    },
  });
}

export { handler as GET, handler as POST };
