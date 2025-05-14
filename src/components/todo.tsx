import { useState } from "react";

import type { TodoItem } from "../types/todo";

import TodoInput from "./todo-input";

export function Todo({ items }: { items: TodoItem[] }) {
  const [todos, setTodos] = useState<TodoItem[]>(items);
  const onItemAdded = (item: TodoItem) => {
    setTodos(prev => [...prev, item]);
  };
  return (
    <div>
      <TodoInput onItemAdded={onItemAdded} />
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}
