import { useEffect, useState } from "react";
import { getCustomers } from "../../../_shared/services";

const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchCustomer = async () => {
    const response = await getCustomers();
    if (response) {
      setLoading(false);
      setCustomers(response)
    };
  };

  useEffect(() => {
    setLoading(true);
    fetchCustomer();
  }, []);

  return { customers, isLoading };
};

export default useCustomers;
