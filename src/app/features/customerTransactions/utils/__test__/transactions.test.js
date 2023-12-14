import { getTransactionsMonthly } from "../_transactions";

describe("getRewardPointsByTransaction", () => {
  it("should return transactions by month", () => {
    const fakeTransactions = [
      {
        transactionId: "RPUI3C3D3O",
        createdDate: "2023-12-03T11:39:22.417Z",
        currency: {
          code: "USD",
          name: "US Dollar",
          symbol: "$",
        },
        price: 203,
        rewardPoints: 256,
      },
    ];
    const monthly = getTransactionsMonthly(fakeTransactions);

    expect(monthly).toStrictEqual({
      "December 2023": {
        transactions: [
          {
            transactionId: "RPUI3C3D3O",
            createdDate: "12/3/2023, 12:39:22 PM",
            currency: {
              code: "USD",
              name: "US Dollar",
              symbol: "$",
            },
            price: 203,
            rewardPoints: 256,
          },
        ],
        totalSum: 203,
        currency: {
          code: "USD",
          name: "US Dollar",
          symbol: "$",
        },
        totalPoints: 256,
      },
    });
  });
});
