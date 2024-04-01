import { Todo } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import { Form } from "../components/Form";

const prisma = new PrismaClient();

const getTodo = async () => {
  const todo = await prisma.todo.findFirst();
  return todo;
};

export default function Home({ todo }: { todo: Todo }) {
  const [title, setTitle] = useState<string>(todo?.title);
  return (
    <div style={{ padding: "8px" }}>
      <p style={{ fontWeight: "bold", margin: "8px 0" }}>{title}</p>
      <Form setTitle={setTitle}></Form>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getTodo();
  console.log("get Todo!");
  const todo = JSON.parse(JSON.stringify(data));
  return {
    props: {
      todo,
    },
  };
}
