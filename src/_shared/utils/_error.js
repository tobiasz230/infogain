export const errorHandler = (response) => {
  if (!response.ok) throw new Error(`${response.code} ${response.message}`);
};
