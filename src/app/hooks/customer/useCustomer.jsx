import { useEffect, useState } from "react";
import { getCustomer } from "../../../_shared/services";

const useCustomer = (customerId) => {
  const [customer, setCustomer] = useState(null);

  const fetchCustomer = async (id) => {
    const response = await getCustomer(id);
    if (response) setCustomer(response);
  };

  useEffect(() => {
    fetchCustomer(customerId);
  }, [customerId]);

  return { customer };
};

export default useCustomer;
