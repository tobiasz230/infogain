import List from "./List";
import { render, screen } from "@testing-library/react";

describe("List", () => {
  it("should display list", () => {
    const { container } = render(<List />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("ul");
    expect(el).toBeInTheDocument();
  });

  it("should display list with items", () => {
    render(
      <List>
        <span>Item</span>
        <span>Item</span>
      </List>,
    );
    const el = screen.getAllByText(/Item/);
    expect(el.length).toBe(2);
  });
});
