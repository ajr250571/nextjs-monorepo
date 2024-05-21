import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProjectCard from "@/components/projects/ProjectCard";

async function loadProjects() {
  const session = await getServerSession(authOptions);
  const projects = await prisma.project.findMany({
    where: {
      userId: Number(session?.user.id),
    },
  });
  return projects;
}

export default async function DashboardPage() {
  const projects = await loadProjects();
  return (
    <div className="container">
      <HeaderDashboard />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
