import type { TodoItem } from "../types/todo";

export function TodoList({ todos, markItemAsDone }: { todos: TodoItem[]; markItemAsDone: (item: TodoItem) => void }) {
  return (

    <ol>
      {todos.map((item: TodoItem) => (
        <li onClick={() => markItemAsDone(item)} key={item.id}>{item.content}</li>
      ))}
    </ol>
  );
}
