import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
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
        if (!userFound) throw new Error("Credencial invalida.");

        const validPassword = bcrypt.compare(password, userFound.password);
        if (!validPassword) throw new Error("Credencial invalida.");

        return {
          id: String(userFound.id),
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
