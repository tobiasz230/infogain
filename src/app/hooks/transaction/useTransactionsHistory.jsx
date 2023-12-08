// import { useEffect, useState } from "react"
import * as React from 'react';
import { getTransactionsHistory } from "../../../_shared/services";

const useTransationsHistory = () => {
    const [transactionsHistory, setTransactions] = React.useState([]);

    const fetchTransactions = async () => {
        const response = await getTransactionsHistory();
        if (response) setTransactions(response);

    }

    React.useEffect(() => {
        fetchTransactions()
    }, [])
    
    return {transactionsHistory};
}

export default useTransationsHistory