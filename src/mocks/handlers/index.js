import transactionsHandlers from "./_transactionsHandlers";
import customerHandlers from "./_customerHandlers";

export const handlers = [
  ...transactionsHandlers,
  ...customerHandlers,
];
