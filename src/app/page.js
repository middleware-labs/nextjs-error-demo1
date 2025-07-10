"use client";
import React, { useState } from "react";
import TodoInput from "../components/TodoInput.js";
import TodoList from "../components/TodoList.js";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text, completed: false },
    ]);
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
} 