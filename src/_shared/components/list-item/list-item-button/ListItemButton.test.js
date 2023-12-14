import ListItemButton from "./ListItemButton";
import { render, screen } from "@testing-library/react";

describe("ListItemButton", () => {
  it("should display component", () => {
    render(<ListItemButton />);
    const el = screen.getByRole("button");
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

  it("should call onClick callback", () => {
    const handleClick = jest.fn();
    render(<ListItemButton onClick={handleClick()} />);
    const el = screen.getByRole("button");
    el.click();

    expect(handleClick).toHaveBeenCalled();
  });
});
