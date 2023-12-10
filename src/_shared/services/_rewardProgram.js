export const getRewardConfiguration = async () => {
  try {
    const response = await fetch('/api/rewardProgramConfig');
    return response.json()
  } 
  catch(error) {
    return error;
  }
}