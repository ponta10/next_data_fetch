"use server";

import { PrismaClient } from "@prisma/client";
import { revalidateTag } from "next/cache";

export default async function updateTodo(data: FormData) {
  const prisma = new PrismaClient();
  const firstTodo = await prisma.todo.findFirst();

  if (!firstTodo) return;

  const newTitle = data.get("title") ? data.get("title")?.toString() : "";

  await prisma.todo.update({
    where: { id: firstTodo?.id },
    data: { title: newTitle },
  });

  revalidateTag("todo");
}