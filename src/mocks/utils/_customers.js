import { faker } from "@faker-js/faker";

export function createFakeCustomer() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    avatar: faker.image.avatar(),
    company: faker.company.name(),
  };
}
