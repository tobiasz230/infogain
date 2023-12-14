import { subtractMonths } from "../_date";

describe("subtractMonths", () => {
  it("should return subtract month", () => {
    const date = "2023-12-14T13:53:16.432Z";
    const month = subtractMonths(new Date(date), 2).getMonth();
    expect(month).toBe(9);
  });
});
