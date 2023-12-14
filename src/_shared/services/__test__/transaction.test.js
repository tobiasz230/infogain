import { getCustomerTransactions } from "../_transaction";
import { faker } from "@faker-js/faker";
import { subtractMonths } from "../../utils";
import { getRewardPointsByTransaction } from "../../../app/features/customerTransactions/utils";

const mockResponse = [
  {
    transactionId: "abc-def",
    createdDate: "03-03-2023",
    currency: {
      code: "USD",
      symbol: "$",
    },
    price: 120,
    rewardPoints: 90,
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

    const data = await getCustomerTransactions();

    expect(data).toBe(mockResponse);
  });
});
