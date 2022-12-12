export const getEnvSsrAndProd = () => {
  return { SSR: import.meta.env.SSR, PROD: import.meta.env.PROD };
};
