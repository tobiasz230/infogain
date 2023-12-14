import Box from "./Box";
import { render, screen } from "@testing-library/react";

describe(Box, () => {
  it("should display box", () => {
    const { container } = render(<Box />);
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
  });

  it("should display box with children", () => {
    render(
      <Box>
        <input />
      </Box>,
    );
    const el = screen.getByRole("textbox");
    expect(el).toBeInTheDocument();
  });
});
