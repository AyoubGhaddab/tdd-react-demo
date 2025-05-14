import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Todo } from "../components/todo";

describe("buy some milk app", () => {
  it("should render a todo item", () => {
    const todos = [
      { id: "1", content: "Buy some milk" },
    ];
    render(<Todo items={todos} />);
    expect(screen.getByText("Buy some milk")).toBeInTheDocument();
  });

  it("should render multiple todo items", () => {
    const todos = [
      { id: "1", content: "Buy some milk" },
      { id: "2", content: "Buy some eggs" },
    ];
    render(<Todo items={todos} />);
    expect(screen.getByText("Buy some milk")).toBeInTheDocument();
    expect(screen.getByText("Buy some eggs")).toBeInTheDocument();
  });

  it("should add a todo item", () => {
    render(<Todo items={[]} />);
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "Buy some oranges" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", keyCode: 13 });

    expect(screen.getByText("Buy some oranges")).toBeInTheDocument();
  });

  it("should mark a todo item as done", () => {
    const todos = [
      { id: "1", content: "Buy some milk" },
    ];
    render(<Todo items={todos} />);
    const todoItem = screen.getByText("Buy some milk");
    fireEvent.click(todoItem);
    expect(screen.queryByText("Buy some milk")).not.toBeInTheDocument();
  });
});
