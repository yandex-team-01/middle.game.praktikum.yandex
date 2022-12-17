export const hostResources = (path: string) => {
  return `${import.meta.env.VITE_HOST_RESOURCES}${path}`;
};
