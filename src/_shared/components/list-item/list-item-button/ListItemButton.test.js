import ListItemButton from "./ListItemButton";
import { render, screen } from "@testing-library/react";

describe("ListItemButton", () => {
  it("should display component", () => {
    const { container } = render(<ListItemButton />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
  });

  it("should display with children", () => {
    render(
      <ListItemButton>
        <span>Item</span>
      </ListItemButton>,
    );
    const el = screen.getAllByText(/Item/);
    expect(el.length).toBe(1);
  });
});
