import { REQUEST_HEADERS } from "../consts";
import { delay } from "msw";
import { errorHandler } from "../utils";

export const getCustomerTransactions = async (customerId) => {
  try {
    await delay(800);
    const response = await fetch(`/api/transactions/customer/${customerId}`, {
      headers: REQUEST_HEADERS,
    });

    errorHandler(response);

    return response.json();
  } catch (error) {
    return error;
  }
};
