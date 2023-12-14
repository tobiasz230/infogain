import Container from "./Container";
import { render, screen } from "@testing-library/react";

describe("Container", () => {
  it("should display container", () => {
    const { container } = render(<Container />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
  });

  it("should display container with children", () => {
    render(
      <Container>
        <span>Item</span>
      </Container>,
    );
    const el = screen.getByText(/Item/);
    expect(el).toBeInTheDocument();
  });
});
