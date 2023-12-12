import {faker} from '@faker-js/faker';
import { MOCK_CONFIG } from '../config';
import { getRewardPointsByTransaction } from '../../_shared/utils';
import { subtractMonths } from '../../_shared/utils';

const {transactionsFromRecentMonths,  rewardPropgram, transactionAmount, currency} = MOCK_CONFIG;
const date = new Date();

export function createFakeTransaction() {
    const price = Number(faker.finance.amount({...transactionAmount,  dec: 0}));

    return {
        transactionId: faker.string.alphanumeric({length: 10, casing: 'upper'}),
        createdDate: faker.date.betweens({from: subtractMonths(date, transactionsFromRecentMonths - 1), to: date, count: 1})[0],
        currency,
        price,
        rewardPoints: getRewardPointsByTransaction(price, rewardPropgram.basePointValue, rewardPropgram.pointRanges)
    }
}
