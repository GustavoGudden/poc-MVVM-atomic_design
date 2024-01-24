import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const authOption = {
  secret: 'gudden',
  providers: [
    GoogleProvider({
      clientId: process!.env!.CLIENTID!,
      clientSecret: process!.env!.CLIENTSECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
