import Box from "./Box";
import { render, screen } from "@testing-library/react";

describe("Box", () => {
  it("should display box", () => {
    const { container } = render(<Box />);
    // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
  });

  it("should display box with children", () => {
    render(
      <Box>
        <span>Item</span>
      </Box>,
    );
    const el = screen.getByText(/Item/);
    expect(el).toBeInTheDocument();
  });
});
