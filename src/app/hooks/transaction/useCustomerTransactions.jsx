import { useEffect, useState, useContext, useCallback } from "react"
import { getCustomerTransactions } from "../../../_shared/services";
import { CustomerTransactionsContext } from "../../context/CustomerTransactionsContext";

const useCustomerTransations = (customerId) => {
    const { customerTransactions, setCustomerTransactions } = useContext(CustomerTransactionsContext);
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = useCallback(async (id) => {
        const response = await getCustomerTransactions(id);
        if (response) {
            setTransactions(response)
            setCustomerTransactions(id, response)
        }
    }, [setCustomerTransactions])
    
    useEffect(() => {
        !customerTransactions || !customerTransactions[customerId] ?
            fetchTransactions(customerId) :
            setTransactions(customerTransactions[customerId])
    }, [customerId, customerTransactions, fetchTransactions])
    
    return {transactions};
}

export default useCustomerTransations