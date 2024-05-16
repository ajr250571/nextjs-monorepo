"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="input input-sm input-bordered flex items-center gap-2">
        <EnvelopeClosedIcon />
        <input
          type="email"
          className="grow"
          placeholder="email@dominio.com"
          autoFocus
        />
      </label>
      <label className="input input-sm input-bordered flex items-center gap-2">
        <LockClosedIcon />
        <input type="password" className="grow" placeholder="Contraseña" />
      </label>
      <div className="card-actions mt-2">
        <button className="btn btn-sm btn-primary w-full">Conectarse</button>
      </div>
    </div>
  );
}
