import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <div className="card card-compact bg-base-300 text-base-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Registrarse</h2>
          <RegisterForm />
          <div className="flex items-center gap-4 justify-between">
            <p>Ya tienes una cuenta?</p>
            <Link className="link link-primary" href="/auth/login">
              Conectarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
