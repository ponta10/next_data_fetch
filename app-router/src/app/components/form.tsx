"use client";

import { FormEvent } from "react";
import updateTodo from "../actions/updateTodo";

export const Form = () => {
  const handleUpdateTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    updateTodo(data);
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
