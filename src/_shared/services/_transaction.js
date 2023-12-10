export const getTransactionsHistory = async () => {
  try {
    const response = await fetch('/api/transactionsHistory');
    return response.json()
  } 
  catch(error) {
    return error;
  }
}