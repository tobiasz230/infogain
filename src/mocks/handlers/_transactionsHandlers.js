import {http, HttpResponse} from 'msw';
import {faker} from '@faker-js/faker';
import {getRewardPointsByTransaction, subtractMonths } from '../../_shared/utils';
import { MOCK_CONFIG } from '../config';

const {transactionsFromRecentMonths, numberOfAllTransactions,  rewardPropgram, transactionAmount, currency} = MOCK_CONFIG;
const date = new Date();

function createFakeTransaction() {
    const price = faker.finance.amount(transactionAmount);

    return {
        transactionId: faker.string.hexadecimal({ length: 10, casing: 'upper', prefix: ''}),
        createdDate: faker.date.betweens({from: subtractMonths(date, transactionsFromRecentMonths), to: date, count: 1})[0],
        currency,
        price,
        rewardPoints: getRewardPointsByTransaction(price, rewardPropgram.basePointValue, rewardPropgram.pointRanges)
    }
}

const allTransactions = Array
.from({length: numberOfAllTransactions}).map(() => createFakeTransaction())

const transactionsHandlers = [
    http.get('/api/transactionsHistory', () => {
        return HttpResponse.json(allTransactions.sort((a, b) => a.createdDate - b.createdDate))
    })
]

export default transactionsHandlers;