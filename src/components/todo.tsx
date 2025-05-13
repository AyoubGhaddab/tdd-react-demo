import { useState } from "react";
import { v4 as uuid } from "uuid";

type TodoItem = {
  id: string;
  content: string;
  done?: boolean;
};

export function Todo({ items }: { items: TodoItem[] }) {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>(items);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      const newTodo: TodoItem = {
        id,
        content: todo,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };
  return (
    <div>
      <input data-testid="input" type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}
