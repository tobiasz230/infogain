import { getCustomers } from "../_customer";

const mockResponse = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    avatar: "#",
    company: "buz",
  },
];
describe("getCustomer", () => {
  it("should return customer details", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => mockResponse,
      }),
    );

    const data = await getCustomers();

    expect(data).toBe(mockResponse);
  });
});
