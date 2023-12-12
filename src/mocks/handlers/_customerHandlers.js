import {http, HttpResponse} from 'msw';
import {createFakeCustomer} from '../utils';
import { MOCK_CONFIG } from '../config';



const customers = Array
.from({length: MOCK_CONFIG.numberOfCustomers})
.map(() => createFakeCustomer())


const customerHandlers = [
    http.get('/api/customers', () => {
        return HttpResponse.json(customers)
    }),
]

export default customerHandlers;