export const getCustomers = async () => {
    try {
      const response = await fetch(`/api/customers`);
      return response.json()
    } 
    catch(error) {
      return error;
    }
  }

export const getCustomer = async (customerId) => {
    try {
      const response = await fetch(`/api/customer/${customerId}`);
      return response.json()
    } 
    catch(error) {
      return error;
    }
  }