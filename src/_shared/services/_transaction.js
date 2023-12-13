import { REQUEST_HEADERS } from "../consts";
import { delay } from "../helpers";
import { errorHandler } from "../utils";

export const getCustomerTransactions = async (customerId) => {
  try {
    await delay();
    const response = await fetch(`/api/transactions/customer/${customerId}`, {
      headers: REQUEST_HEADERS,
    });

    errorHandler(response);

    return response.json();
  } catch (error) {
    return error;
  }
};