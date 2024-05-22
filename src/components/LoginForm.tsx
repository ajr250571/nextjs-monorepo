"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!res?.ok) {
      toast.warning("Login incorrecto, reintente.");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-auto">
        <label className="input input-sm input-bordered flex items-center gap-2 w-80">
          <EnvelopeClosedIcon />
          <input
            type="email"
            className="grow"
            placeholder="email@dominio.com"
            autoFocus
            {...register("email", {
              required: "Email obligatório",
            })}
          />
        </label>
        {errors.email && (
          <span className="text-error font-bold  text-xs">
            {errors.email?.message}
          </span>
        )}
        <label className="input input-sm input-bordered flex items-center gap-2">
          <LockClosedIcon />
          <input
            type="password"
            className="grow"
            placeholder="Contraseña"
            {...register("password", {
              required: "Contraseña obligatória",
              minLength: {
                message: "La contraseña debe ser al menos 6 caracteres.",
                value: 6,
              },
            })}
          />
        </label>
        {errors.password && (
          <span className="text-error font-bold text-xs">
            {errors.password?.message}
          </span>
        )}
        <div className="card-actions mt-2">
          <button type="submit" className="btn btn-sm btn-primary w-full">
            Conectarse
          </button>
        </div>
      </div>
    </form>
  );
}
