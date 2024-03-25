import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo | string>
) {
  const prisma = new PrismaClient();
  const newTitle: string = JSON.parse(req.body).title;

  const firstTodo = await prisma.todo.findFirst();

  if (!firstTodo) {
    return res.status(404).json("Todo not found");
  }

  const updatedTodo = await prisma.todo.update({
    where: { id: firstTodo.id },
    data: { title: newTitle },
  });

  return res.status(200).json(updatedTodo);
}
