import { getEnvSsrAndProd } from 'src/utils/getEnvSsrAndProd';

export enum LocalStorageItems {
  Lang = 'i18nextLng',
  Theme = 'theme',
}

const LOCAL_STORAGE_DEFAULTS: Record<LocalStorageItems, string> = {
  [LocalStorageItems.Lang]: 'en',
  [LocalStorageItems.Theme]: 'light',
};

export function getLocalStorageItem(key: LocalStorageItems) {
  const env = getEnvSsrAndProd();

  if (!env.isSSR) {
    const res = localStorage.getItem(key);
    return res || LOCAL_STORAGE_DEFAULTS[key];
  }
  return LOCAL_STORAGE_DEFAULTS[key];
}

export function setLocalStorageItem(key: LocalStorageItems, value: string) {
  const env = getEnvSsrAndProd();

  if (!env.isSSR) {
    localStorage.setItem(key, value);
  }
}
