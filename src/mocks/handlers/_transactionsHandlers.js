import {http, HttpResponse} from 'msw';
import {transactions} from '../data'


const transactionsHandlers = [
    http.get('/api/transactionsHistory', () => {
        return HttpResponse.json(transactions)
    })
]

export default transactionsHandlers;