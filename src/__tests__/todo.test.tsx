import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

function Todo({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
describe("buy some milk app", () => {
  // 1. render a item
  // 2. render multiple items
  // 3. add item to a list
  // 5. mark item as done
  it("should render a todo item", () => {
    // prepare or mock some data
    // render the component
    // check if the component is rendered
    const todos = ["Buy some milk"];
    render(<Todo items={todos} />);
    expect(screen.getByText("Buy some milk")).toBeInTheDocument();
  });
});
