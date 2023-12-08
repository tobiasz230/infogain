import {http, HttpResponse} from 'msw';
import {faker} from '@faker-js/faker';
import {subtractMonths } from '../../_shared/utils';

const date = new Date();

function createFakeTransaction() {
    return {
        transactionId: faker.string.uuid(),
        createdDate: faker.date.betweens({from: subtractMonths(date, 3), to: date}),
        price: faker.finance.amount({ min: 5, max: 300, dec: 0 }),
        currency: { code: 'USD', name: 'US Dollar', symbol: '$' },
    }
}

const response = Array.from({length: 30}).map(() => createFakeTransaction())

const transactionsHandlers = [
    http.get('/api/transactionsHistory', () => {
        return HttpResponse.json(response)
    })
]

export default transactionsHandlers;