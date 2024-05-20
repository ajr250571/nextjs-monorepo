import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { message: "Session Unauthorized." },
      { status: 401 }
    );
  }
  const newProject = await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      user: {
        connect: {
          id: Number(session.user.id),
        },
      },
    },
  });
  return NextResponse.json(newProject, { status: 201 });
}
