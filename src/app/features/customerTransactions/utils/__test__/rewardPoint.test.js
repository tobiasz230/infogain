import { getRewardPointsByTransaction } from "../_rewardPoint";

describe("getRewardPointsByTransaction", () => {
  it("should return correct points value", () => {
    const fakePointRanges = [
      { from: 50, to: 100, multiple: 1 },
      { from: 100, to: null, multiple: 2 },
    ];
    const points = getRewardPointsByTransaction(120, 1, fakePointRanges);

    expect(points).toBe(90);
  });
});
