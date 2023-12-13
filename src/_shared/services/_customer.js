import { REQUEST_HEADERS } from "../consts";
import { delay } from "../helpers";
import { errorHandler } from "../utils";

export const getCustomers = async () => {
  try {
    await delay();
    const response = await fetch(`/api/customers`, {
      headers: REQUEST_HEADERS,
    });

    errorHandler(response);

    return response.json();
  } catch (error) {
    return error;
  }
};
