import { useEffect, useState } from "react"
import { getCustomers } from "../../../_shared/services";

const useCustomers = () => {
    const [customers, setCustomers] = useState([]);

    const fetchCustomer = async () => {
        const response = await getCustomers();
        if (response) setCustomers(response);
    }

    useEffect(() => {
        fetchCustomer()
    }, [])
    
    return {customers};
}

export default useCustomers