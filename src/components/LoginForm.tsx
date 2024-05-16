"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
