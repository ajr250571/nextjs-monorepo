import { NextRequest, NextResponse } from "next/server";

function PUT(request: NextRequest) {
  return NextResponse.json({ message: "Put Project" });
}
