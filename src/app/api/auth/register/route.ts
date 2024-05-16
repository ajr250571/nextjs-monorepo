import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  const newUser = await prisma.user.create({
    data,
  });
  console.log(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
