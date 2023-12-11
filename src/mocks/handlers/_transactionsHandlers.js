import {http, HttpResponse} from 'msw';
import {transactions} from '../data'

const transactionsHandlers = [
    http.get('/api/transactions/customer/:customerId', ({customerId}) => {
        const userTransactions = transactions.filter((t) => t.customerId === customerId);
        return HttpResponse.json(userTransactions)
    })
]

export default transactionsHandlers;