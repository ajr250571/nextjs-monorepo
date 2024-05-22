import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <div>
      <header className="container  bg-base-300 p-4 rounded-md shadow-sm">
        <h1 className="text-2xl my-4 text-primary font-semibold">
          NextAuth Monorepo
        </h1>
        <p>
          Proyecto modelo full stack Monorepo con Autenticacion ( NextAuth +
          Prisma + DaisyUI )
        </p>
        <Link className="btn btn-primary mt-4" href="/auth/login">
          Conectarse
        </Link>
      </header>
    </div>
  );
}
