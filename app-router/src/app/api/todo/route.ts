import { Todo } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse<Todo>) {
  const prisma = new PrismaClient();
  try {
    const todo = await prisma.todo.findFirst();
    console.log("get Todo!");
    return NextResponse.json({ ...todo }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
