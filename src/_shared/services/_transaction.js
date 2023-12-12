export const getCustomerTransactions = async (customerId) => {
  try {
    const response = await fetch(`/api/transactions/customer/${customerId}`, {
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