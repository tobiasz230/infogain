import {http, HttpResponse} from 'msw';
import { MOCK_CONFIG } from '../config';
import { createFakeTransaction } from '../utils';

const transactionsHandlers = [
    http.get('/api/transactions/customer/:customerId', () => {
        const transactions = Array
            .from({length: MOCK_CONFIG.numberOfCustomerTransactions})
            .map(() => createFakeTransaction())
            .sort((a, b) => a.createdDate - b.createdDate)

        return HttpResponse.json(transactions)
    })
]

export default transactionsHandlers;