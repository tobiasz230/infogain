import { useEffect, useState, useContext, useCallback } from "react";
import { getCustomerTransactions } from "../../../../_shared/services";
import { CustomerTransactionsContext } from "../context/CustomerTransactionsContext";

const useCustomerTransations = () => {
  const { customer, customerTransactions, setCustomerTransactions } =
    useContext(CustomerTransactionsContext);
  const [transactions, setTransactions] = useState(null);
  const [isLoading, setLoading] = useState(false);

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
    if (!customer) return;

    if (!customerTransactions || !customerTransactions[customer.id]) {
      setLoading(true);
      fetchTransactions(customer.id);
    } else {
      setTransactions(customerTransactions[customer.id]);
    }
  }, [customer, customerTransactions, fetchTransactions]);

  return { transactions, isLoading };
};

export default useCustomerTransations;
