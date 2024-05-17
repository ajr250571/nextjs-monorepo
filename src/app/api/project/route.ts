import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);
  const newProject = await prisma.project.create({
    data,
  });
  return NextResponse.json(newProject, { status: 201 });
}
