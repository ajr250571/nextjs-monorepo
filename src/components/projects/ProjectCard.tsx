"use client";

import { Project } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/dashboard/project/${project.id}`);
      }}
      className="card card-compact w-full bg-base-300 shadow-xl hover:opacity-70 hover:cursor-pointer"
    >
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-primary font-bold">{project.description}</p>
      </div>
    </div>
  );
}
