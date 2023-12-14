import Avatar from "./Avatar";
import { render, screen } from "@testing-library/react";

describe("w", () => {
  it("should display avatar image", () => {
    render(<Avatar imageUrl={"http://example-image.com"} />);
    const el = screen.getByAltText("avatar");
    expect(el).toBeInTheDocument();
  });

  it("should have custom alt", () => {
    render(<Avatar imageUrl="http://example-image.com" alt="example" />);
    const el = screen.getByAltText("example");
    expect(el).toBeInTheDocument();
  });

  it("should display with default size", () => {
    render(<Avatar imageUrl="http://example-image.com" />);
    const el = screen.getByRole("presentation");
    expect(el.style.width).toBe("56px");
    expect(el.style.height).toBe("56px");
  });

  it("should display with custom size", () => {
    render(<Avatar imageUrl="http://example-image.com" size={120} />);
    const el = screen.getByRole("presentation");
    expect(el.style.width).toBe("120px");
    expect(el.style.height).toBe("120px");
  });
});
