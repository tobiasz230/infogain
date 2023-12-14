import { getRandomInt } from "../_numbers";

describe("getRandomInt", () => {
  it("should return lower value than max argument", () => {
    const max = 10;
    const value = getRandomInt(max);
    expect(value).toBeLessThan(max);
  });
});
