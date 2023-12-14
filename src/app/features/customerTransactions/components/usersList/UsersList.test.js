import UsersList from "./UsersList";
import { render, screen } from "@testing-library/react";
import ListItemButton from "../../../../../_shared/components/list-item/list-item-button/ListItemButton";

const fakeData = [
  {
    id: "1",
    fullName: "John Doe",
    avatar: "foo-bar.png",
    company: "foo",
  },
];

describe("UsersList", () => {
  it("should display users list", () => {
    render(<UsersList users={fakeData} />);
    const el = screen.getAllByRole("button");
    expect(el.length).toBe(fakeData.length);
  });
});

it("should call onSelect callback", () => {
  const handleClick = jest.fn();
  render(<ListItemButton onSelect={handleClick()} />);
  const el = screen.getByRole("button");
  el.click();

  expect(handleClick).toHaveBeenCalled();
});
