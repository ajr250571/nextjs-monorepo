"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="container">
      <div className="flex justify-between">
        <div className="font-bold">Proyect</div>
        <button
          onClick={() => router.push("/dashboard/project/new")}
          className="btn btn-primary btn-xs"
        >
          Add Proyect
        </button>
      </div>
    </div>
  );
}
