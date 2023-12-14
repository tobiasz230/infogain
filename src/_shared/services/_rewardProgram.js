import { REQUEST_HEADERS } from "../consts";
import { delay } from "msw";
import { errorHandler } from "../utils";

export const getRewardConfiguration = async () => {
  try {
    await delay(800);
    const response = await fetch("/api/rewardProgramConfig", {
      headers: REQUEST_HEADERS,
    });

    errorHandler(response);

    return response.json();
  } catch (error) {
    return error;
  }
};
