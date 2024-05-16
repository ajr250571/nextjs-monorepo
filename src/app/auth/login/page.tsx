import LoginForm from "@/components/LoginForm";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <div className="card card-compact bg-base-300 text-base-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Conectarse</h2>
          <LoginForm />
          <div className="flex justify-between items-center gap-4">
            <p>No tienes una cuenta?</p>
            <Link className="link link-primary" href="/auth/register">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
