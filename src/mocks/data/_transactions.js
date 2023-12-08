import {faker} from '@faker-js/faker';
import { customers } from './_customers';
import { MOCK_CONFIG } from '../config';
import { getRewardPointsByTransaction } from '../../_shared/utils';
import { subtractMonths } from '../../_shared/utils';

const {transactionsFromRecentMonths, numberOfAllTransactions,  rewardPropgram, transactionAmount, currency} = MOCK_CONFIG;
const date = new Date();

const customersIds = customers.map(c => c.id)

function createFakeTransaction() {
    const price = faker.finance.amount(transactionAmount);
    const randomCustomerId = customersIds[Math.floor((Math.random() * customersIds.length))]

    return {
        customerId: randomCustomerId,
        transactionId: faker.string.alphanumeric({length: 10, casing: 'upper'}),
        createdDate: faker.date.betweens({from: subtractMonths(date, transactionsFromRecentMonths), to: date, count: 1})[0],
        currency,
        price,
        rewardPoints: getRewardPointsByTransaction(price, rewardPropgram.basePointValue, rewardPropgram.pointRanges)
    }
}

export const transactions = Array
.from({length: numberOfAllTransactions})
.map(() => createFakeTransaction())
.sort((a, b) => a.createdDate - b.createdDate)
