import { useState } from "react";
import { v4 as uuid } from "uuid";

import type { TodoItem } from "../types/todo";

export default function TodoInput({ onItemAdded }: { onItemAdded: (item: TodoItem) => void }) {
  const [todo, setTodo] = useState<string>("");

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
      onItemAdded(newTodo);
    }
  };
  return (<input data-testid="input" type="text" onChange={handleChange} onKeyDown={handleKeyDown} />);
}
