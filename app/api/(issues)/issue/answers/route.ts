import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createAnswerSchema = z.object({
  content: z.string().min(5),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = createAnswerSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }
  const newIssue = await prisma.answer.create({
    data: { content: body.content, issueId: body.issueId },
  });
  return NextResponse.json(newIssue, { status: 201 });
}

export async function DELETE(req: NextRequest, { ...props }) {
  try {
    const id = parseInt(props.params.id);
    const deletedIssue = await prisma.answer.delete({
      where: { id },
    });
    return NextResponse.json(deletedIssue, { status: 200 });
  } catch (error) {
    return NextResponse.json("Server error", { status: 500 });
  }
}
