import type { TodoItem } from "../types/todo";

import { useTodo } from "../hooks/use-todo";
import TodoInput from "./todo-input";
import { TodoList } from "./todo-list";

export function Todo({ items }: { items: TodoItem[] }) {
  const { todos, addTodoItem, markItemAsDone } = useTodo(items);
  return (
    <div>
      <TodoInput onItemAdded={addTodoItem} />
      <TodoList todos={todos} markItemAsDone={markItemAsDone} />
    </div>
  );
}
