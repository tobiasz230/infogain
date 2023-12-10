import {faker} from '@faker-js/faker';
import { MOCK_CONFIG } from '../config';

function createFakeCustomer() {
    return {
        id: faker.string.alphanumeric({length: 10, casing: 'upper'}),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        avatar: faker.image.avatar(),
    }
}

export const customers = Array
.from({length: MOCK_CONFIG.numberOfCustomers})
.map(() => createFakeCustomer())
