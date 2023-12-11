import { useEffect, useState } from "react"
import { getTransactionsHistory } from "../../../_shared/services";

const useTransationsHistory = () => {
    const [transactionsHistory, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const response = await getTransactionsHistory();
        if (response) setTransactions(response);

    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    
    return {transactionsHistory};
}

export default useTransationsHistory