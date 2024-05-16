import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] w-auto items-center justify-center">
      <div className="card card-compact bg-base-300 text-base-content w-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Conectarse</h2>
          <LoginForm />
          <div className="flex flex-row justify-center gap-2">
            <p>No tienes una cuenta?</p>
            <Link className="link link-primary font-bold" href="/auth/register">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
