import React, { Dispatch, FormEvent } from "react";

export const Form = ({
  setTitle,
}: {
  setTitle: Dispatch<React.SetStateAction<string>>;
}) => {
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
  );
};
