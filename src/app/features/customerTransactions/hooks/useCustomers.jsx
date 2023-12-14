import { useEffect, useState } from "react";
import { getCustomers } from "../../../../_shared/services";

const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await getCustomers();
      if (response) {
        setLoading(false);
        setCustomers(response);
      }
    };

    setLoading(true);
    fetchCustomer();
  }, []);

  return { customers, isLoading };
};

export default useCustomers;
