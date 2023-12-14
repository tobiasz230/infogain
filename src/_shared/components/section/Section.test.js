import Section from "./Section";
import { render, screen } from "@testing-library/react";

describe("ListItemStart", () => {
  it("should display component", () => {
    const { container } = render(<Section />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("div");
    expect(el).toBeInTheDocument();
  });

  it("should display with children", () => {
    render(
      <Section>
        <span>Item</span>
      </Section>,
    );
    const el = screen.getAllByText(/Item/);
    expect(el.length).toBe(1);
  });
});
