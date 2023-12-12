import { useEffect, useState } from "react"
import { getCustomerTransactions } from "../../../_shared/services";

const useCustomerTransations= (customerId) => {
    const [transactions, setTransactions] = useState([]);
    console.log('new id', customerId)

    const fetchTransactions = async (id) => {
        console.log('jey', id)
        const response = await getCustomerTransactions(id);
        console.log('RESPONSE', response)
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