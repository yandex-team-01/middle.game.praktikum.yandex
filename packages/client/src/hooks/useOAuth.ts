export const useOAuth = (queryString: string) => {
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  return code;
};
