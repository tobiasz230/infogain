export const MOCK_CONFIG = Object.freeze({
    numberOfCustomers: 20,
    numberOfCustomerTransactions: 100,
    transactionsFromRecentMonths: 3,
    transactionAmount: {
        min: 5,
        max: 300,
        dec: 2
    },
    currency: { code: 'USD', name: 'US Dollar', symbol: '$' },
    rewardPropgram: {
        basePointValue: 1,
        pointRanges: [
            {from: 50, to: 100, multiple: 1},
            {from: 100, to: null, multiple: 2}
        ]
    }
})