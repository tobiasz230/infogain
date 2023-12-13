export const MOCK_CONFIG = Object.freeze({
  numberOfCustomers: 10,
  numberOfCustomerTransactions: 20,
  transactionsFromRecentMonths: 3,
  transactionAmount: {
    min: 5,
    max: 300,
  },
  currency: { code: "USD", name: "US Dollar", symbol: "$" },
  rewardPropgram: {
    basePointValue: 1,
    pointRanges: [
      { from: 50, to: 100, multiple: 1 },
      { from: 100, to: null, multiple: 2 },
    ],
  },
});
