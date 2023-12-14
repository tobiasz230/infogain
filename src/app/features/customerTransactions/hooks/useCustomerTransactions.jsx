import { useEffect, useState, useContext, useCallback } from "react";
import { getCustomerTransactions } from "../../../../_shared/services";
import { CustomerTransactionsContext } from "../context/CustomerTransactionsContext";

const useCustomerTransations = (customerId) => {
  const { customerTransactions, setCustomerTransactions } = useContext(
    CustomerTransactionsContext,
  );
  const [transactions, setTransactions] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchTransactions = useCallback(
    async (id) => {
      const response = await getCustomerTransactions(id);
      if (response) {
        setLoading(false);
        setTransactions(response);
        setCustomerTransactions(id, response);
      }
    },
    [setCustomerTransactions],
  );

  useEffect(() => {
    if (!customerTransactions || !customerTransactions[customerId]) {
      setLoading(true);
      fetchTransactions(customerId);
    } else {
      setTransactions(customerTransactions[customerId]);
    }
  }, [customerId, customerTransactions, fetchTransactions]);

  return { transactions, isLoading };
};

export default useCustomerTransations;
