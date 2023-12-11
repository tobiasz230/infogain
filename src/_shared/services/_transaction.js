export const getCustomerTransactionsHistory = async (customerId) => {
  try {
    const response = await fetch(`/api/transactions/user/${customerId}`);
    return response.json()
  } 
  catch(error) {
    return error;
  }
}