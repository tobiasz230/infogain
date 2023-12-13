import { useEffect, useState, useContext } from "react"
import { getCustomerTransactions } from "../../../_shared/services";
import { CustomerTransactionsContext } from "../../context/CustomerTransactionsContext";

const useCustomerTransations = (customerId) => {
    const { customerTransactions, setCustomerTransactions } = useContext(CustomerTransactionsContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async (id) => {
            const response = await getCustomerTransactions(id);
            if (response) {
                setTransactions(response)
                setCustomerTransactions(id, response)
            }
        }

        (!customerTransactions || !customerTransactions[customerId]) ?
            fetchTransactions(customerId) :
            setTransactions(customerTransactions[customerId])
    }, [customerId, customerTransactions, setCustomerTransactions])
    
    return {transactions};
}

export default useCustomerTransations