"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
};
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await axios.post("/api/auth/register", data);
    console.log(res);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-auto">
        <label className="input input-sm input-bordered flex items-center gap-2 w-80">
          <PersonIcon />
          <input
            type="text"
            className="grow"
            placeholder="Nombre Usuario"
            autoFocus
            {...register("name", {
              required: "Nombre usuario obligatório",
            })}
          />
        </label>
        {errors.name && (
          <span className="text-error font-bold  text-xs">
            {errors.name?.message}
          </span>
        )}
        <label className="input input-sm input-bordered flex items-center gap-2">
          <EnvelopeClosedIcon />
          <input
            type="email"
            className="grow"
            placeholder="email@dominio.com"
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
                message: "Contraseña debe tener al menos 6 caracteres.",
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
            Registrarse
          </button>
        </div>
      </div>
    </form>
  );
}
