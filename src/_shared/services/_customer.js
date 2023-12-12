export const getCustomers = async () => {
    try {
      const response = await fetch(`/api/customers`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      });
      return response.json()
    } 
    catch(error) {
      return error;
    }
  }

export const getCustomer = async (customerId) => {
    try {
      const response = await fetch(`/api/customer/${customerId}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      });
      return response.json()
    } 
    catch(error) {
      return error;
    }
  }