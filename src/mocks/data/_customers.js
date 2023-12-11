import {faker} from '@faker-js/faker';
import { MOCK_CONFIG } from '../config';

function createFakeCustomer() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
        id: faker.string.uuid(),
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        avatar: faker.image.avatar(),
        company: faker.company.name()
    }
}

export const customers = Array
.from({length: MOCK_CONFIG.numberOfCustomers})
.map(() => createFakeCustomer())
