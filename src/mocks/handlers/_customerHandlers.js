import {http, HttpResponse} from 'msw';
import {customers} from '../data';

const rewardProgramHandlers = [
    http.get('/api/customers', () => {
        return HttpResponse.json(customers)
    })
]

export default rewardProgramHandlers;