import { Form } from "./form";

export default async function Home() {
  const todo = await fetch("http://localhost:3001/api/todo", {
    next: { tags: ["todo"] },
  }).then((res) => res.json());
  return (
    <div style={{ padding: "8px" }}>
      <p style={{ fontWeight: "bold", margin: "8px 0" }}>{todo?.title}</p>
      <Form />
    </div>
  );
}
