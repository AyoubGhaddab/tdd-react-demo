type TodoItem = {
  id: number;
  content: string;
  done?: boolean;
};

export function Todo({ items }: { items: TodoItem[] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.content}</li>
      ))}
    </ul>
  );
}
