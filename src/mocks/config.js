export const MOCK_CONFIG = Object.freeze({
    numberOfAllTransactions: 300,
    transactionsFromRecentMonths: 3,
    transactionAmount: {
        min: 5,
        max: 300
    },
    rewardPropgram: {
        basePointValue: 1,
        pointRanges: [
            {from: 50, to: 100, multiple: 1},
            {from: 100, to: null, multiple: 2}
        ]
    }
})