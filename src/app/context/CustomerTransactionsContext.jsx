import {
    createContext,
    useState,
  } from "react";
  
  const initialState = {
    transactions: null,
    setCustomerTransactions: () => {},
  };
  
  export const CustomerTransactionsContext = createContext(initialState);
  
  export const CustomerTransactionsProvider = ({ children }) => {
    const [customerTransactions, setTtransactions] = useState(initialState.theme);
  
    const setCustomerTransactions = (customerId, transactions) => {
        setTtransactions({...customerTransactions, [customerId]: transactions});
    };
  
    return (
      <CustomerTransactionsContext.Provider
        value={{
            customerTransactions,
            setCustomerTransactions,
        }}
      >
        {children}
      </CustomerTransactionsContext.Provider>
    );
  };
  