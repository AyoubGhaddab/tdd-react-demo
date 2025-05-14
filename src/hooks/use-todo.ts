import { useState } from "react";

import type { TodoItem } from "../types/todo";

export function useTodo(items: TodoItem[]) {
  const [todos, setTodos] = useState<TodoItem[]>(items);
  const addTodoItem = (item: TodoItem) => {
    setTodos(prev => [...prev, item]);
  };
  const markItemAsDone = (item: TodoItem) => {
    const filtred = todos.filter(todo => todo.id !== item.id);
    setTodos(filtred);
  };
  return {
    todos,
    addTodoItem,
    markItemAsDone,
  };
}
