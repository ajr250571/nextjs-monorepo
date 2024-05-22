import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email@dominio.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        const userFound = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!userFound) return null;

        const validPassword = await bcrypt.compare(
          password,
          userFound.password
        );
        if (!validPassword) return null;

        return {
          id: String(userFound.id),
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
