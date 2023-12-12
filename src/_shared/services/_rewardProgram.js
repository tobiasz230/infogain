export const getRewardConfiguration = async () => {
  try {
    const response = await fetch('/api/rewardProgramConfig', {
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