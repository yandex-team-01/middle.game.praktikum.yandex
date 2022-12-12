export const getEnvSsrAndProd = () => {
  return {
    isSSR: import.meta.env.SSR,
    isPROD: import.meta.env.PROD,
  };
};
