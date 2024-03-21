import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.issue.findMany();
  return NextResponse.json(result, { status: 200 });
}
