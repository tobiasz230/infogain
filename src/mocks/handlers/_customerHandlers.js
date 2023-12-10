import {http, HttpResponse} from 'msw';
import {customers} from '../data';

const customerHandlers = [
    http.get('/api/customers', () => {
        return HttpResponse.json(customers)
    }),
    http.get('/api/customer/:customerId', ({customerId}) => {
        return HttpResponse.json(customers.find(c => c.id === customerId))
    }),
]

export default customerHandlers;