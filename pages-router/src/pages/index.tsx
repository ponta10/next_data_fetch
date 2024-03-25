import { Todo } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { FormEvent, useState } from "react";

const prisma = new PrismaClient();

const getTodo = async () => {
  const todo = await prisma.todo.findFirst();
  return todo;
};

export default function Home({ todo }: { todo: Todo }) {
  const [title, setTitle] = useState<string>(todo?.title);
  const handleUpdateTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const res = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({
        title: data.get("title"),
      }),
    });

    if (!res.ok) return;

    const updatedTodo = await res.json();

    setTitle(updatedTodo.title);
  };
  return (
    <div style={{ padding: "8px" }}>
      <p style={{ fontWeight: "bold", margin: "8px 0" }}>{title}</p>
      <form onSubmit={handleUpdateTodo}>
        <label htmlFor="title">タイトルを入力してください</label>
        <br />
        <input
          type="text"
          name="title"
          style={{
            padding: "8px",
            margin: "2px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            margin: "2px",
            backgroundColor: "blue",
            borderRadius: "8px",
            color: "white",
          }}
        >
          更新
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getTodo();
  const todo = JSON.parse(JSON.stringify(data));
  return {
    props: {
      todo,
    },
  };
}
