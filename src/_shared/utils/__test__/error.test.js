import { errorHandler } from "../_error";

describe("errorHandler", () => {
  it("should throw an error", () => {
    const fakeResponse = {
      ok: false,
      statusText: "er ror",
      status: 404,
    };

    expect(() => errorHandler(fakeResponse)).toThrowError();
  });
});
