import { useEffect, useState } from "react"
import { getCustomerTransactions } from "../../../_shared/services";

const useCustomerTransations= (customerId) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async (id) => {
        const response = await getCustomerTransactions(id);
        if (response) setTransactions(response);
    }

    useEffect(() => {
        if (customerId) {
            fetchTransactions(customerId)
        }
    }, [customerId])
    
    return {transactions};
}

export default useCustomerTransations