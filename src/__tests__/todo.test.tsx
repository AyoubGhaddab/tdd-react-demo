import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Todo } from "../components/todo";

describe("buy some milk app", () => {
  // 1. render a item
  // 2. render multiple items
  // 3. add item to a list
  // 5. mark item as done
  it("should render a todo item", () => {
    const todos = [
      { id: 1, content: "Buy some milk" },
    ];
    render(<Todo items={todos} />);
    expect(screen.getByText("Buy some milk")).toBeInTheDocument();
  });
  it("should render multiple todo items", () => {
    const todos = [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Buy some eggs" },
    ];
    render(<Todo items={todos} />);
    expect(screen.getByText("Buy some milk")).toBeInTheDocument();
    expect(screen.getByText("Buy some eggs")).toBeInTheDocument();
  });
});
