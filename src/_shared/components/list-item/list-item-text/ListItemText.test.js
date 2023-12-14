import ListItemText from "./ListItemText";
import { render, screen } from "@testing-library/react";

describe("ListItemStart", () => {
  it("should display component", () => {
    const { container } = render(<ListItemText />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
  });

  it("should display with primary text", () => {
    render(<ListItemText text="Title" />);
    const el = screen.getAllByText(/Title/);
    expect(el.length).toBe(1);
  });

  it("should display with children", () => {
    render(
      <ListItemText>
        <span>Item</span>
      </ListItemText>,
    );
    const el = screen.getAllByText(/Item/);
    expect(el.length).toBe(1);
  });
});
