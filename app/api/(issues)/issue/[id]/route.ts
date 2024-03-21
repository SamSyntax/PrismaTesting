// pages/api/issues/[id]/answers.ts
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createAnswerSchema = z.object({
  content: z.string().min(1),
});

export async function POST(req: NextRequest, { ...props }) {
  const id = parseInt(props.params.id);
  const body = await req.json();
  const validation = createAnswerSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }
  const newIssue = await prisma.answer.create({
    data: { content: body.content, issueId: id },
  });
  return NextResponse.json(newIssue, { status: 201 });
}

export async function PATCH(req: NextRequest, { ...props }) {
  try {
    const id = parseInt(props.params.id);
    const body = await req.json();

    // Ensure that the status is one of the allowed values (OPEN, IN_PROGRESS, CLOSED)
    const { status } = body;
    if (!["OPEN", "IN_PROGRESS", "CLOSED"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const updatedIssue = await prisma.issue.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    console.error("Error updating issue status:", error);
    return NextResponse.error();
  }
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
