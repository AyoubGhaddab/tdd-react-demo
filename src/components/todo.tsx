import { useState } from "react";

import type { TodoItem } from "../types/todo";

import TodoInput from "./todo-input";

export function Todo({ items }: { items: TodoItem[] }) {
  const [todos, setTodos] = useState<TodoItem[]>(items);
  const onItemAdded = (item: TodoItem) => {
    setTodos(prev => [...prev, item]);
  };
  const markItemAsDone = (item: TodoItem) => {
    const filtred = todos.filter(todo => todo.id !== item.id);
    setTodos(filtred);
  };
  return (
    <div>
      <TodoInput onItemAdded={onItemAdded} />

      {todos.map((item: TodoItem) => (
        <span onClick={() => markItemAsDone(item)} key={item.id}>{item.content}</span>
      ))}

    </div>
  );
}
