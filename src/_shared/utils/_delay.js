export const delay = (delay = 800) =>
  new Promise((res) => setTimeout(() => res(), delay));
