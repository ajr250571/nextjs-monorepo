"use client";

import { useRouter } from "next/navigation";
export default function HeaderDashboard() {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <div className="font-bold">Proyects</div>
      <button
        onClick={() => router.push("/dashboard/project/new")}
        className="btn btn-primary btn-xs"
      >
        Add Proyect
      </button>
    </div>
  );
}
