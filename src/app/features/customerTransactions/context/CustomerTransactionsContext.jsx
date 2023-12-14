import { createContext, useState } from "react";

const initialState = {
  customer: null,
  transactions: null,
  setCustomerTransactions: () => {},
};

export const CustomerTransactionsContext = createContext(initialState);

export const CustomerTransactionsProvider = ({ children }) => {
  const [customerTransactions, setTransactions] = useState(
    initialState.transactions,
  );
  const [customerDetails, setCustomerDetails] = useState(initialState.customer);

  const setCustomerTransactions = (customerId, transactions) => {
    setTransactions({ ...customerTransactions, [customerId]: transactions });
  };

  const setCustomer = (customer) => {
    setCustomerDetails(customer);
  };

  return (
    <CustomerTransactionsContext.Provider
      value={{
        customer: customerDetails,
        customerTransactions,
        setCustomerTransactions,
        setCustomer,
      }}
    >
      {children}
    </CustomerTransactionsContext.Provider>
  );
};
