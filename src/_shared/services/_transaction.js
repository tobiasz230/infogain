
const delay = () => new Promise(res => setTimeout(() => res(), 2000))

export const getCustomerTransactions = async (customerId) => {
  try {
    await delay();
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