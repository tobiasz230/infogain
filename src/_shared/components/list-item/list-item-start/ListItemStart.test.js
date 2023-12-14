import ListItemStart from "./ListItemStart";
import { render, screen } from "@testing-library/react";

describe("ListItemStart", () => {
  it("should display component", () => {
    const { container } = render(<ListItemStart />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
  });

  it("should display with children", () => {
    render(
      <ListItemStart>
        <span>Item</span>
      </ListItemStart>,
    );
    const el = screen.getAllByText(/Item/);
    expect(el.length).toBe(1);
  });
});
