export default async function Todo() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const todo = await fetch("http://localhost:3001/api/todo", {
      next: { tags: ["todo"] },
    }).then((res) => res.json());
  return (
    <p style={{ fontWeight: "bold", margin: "8px 0" }}>{todo?.title}</p>
  );
};