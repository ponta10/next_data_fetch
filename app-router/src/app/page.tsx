import Link from "next/link";
import { Form } from "./components/form";
import { Suspense } from "react";
import Todo from "./components/todo";
import Loading from "./loading";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div
      style={{
        padding: "8px",
      }}
    >
      <Suspense fallback={<Loading color="green" size={40} />}>
        <Todo />
      </Suspense>
      <Form />
      <Link href="/news" style={{ color: "blue", textDecoration: "underline" }}>
        ニュースを見る
      </Link>
    </div>
  );
}
