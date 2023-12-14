import { http, HttpResponse } from "msw";
import { MOCK_CONFIG } from "../config";
import { createFakeTransaction } from "../utils";
import { getRandomInt } from "../../_shared/utils";

const transactionsHandlers = [
  http.get("/api/transactions/customer/:customerId", () => {
    const transactions = Array.from({
      length: getRandomInt(MOCK_CONFIG.numberOfCustomerTransactions),
    })
      .map(() => createFakeTransaction())
      .sort((a, b) => b.createdDate - a.createdDate);

    return HttpResponse.json(transactions);
  }),
];

export default transactionsHandlers;
