import NextAuth, { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  secret: 'dajdpqajd',
  providers: [
    GoogleProvider({
      clientId: process!.env!.CLIENTID!,
      clientSecret: process!.env!.CLIENTSECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
