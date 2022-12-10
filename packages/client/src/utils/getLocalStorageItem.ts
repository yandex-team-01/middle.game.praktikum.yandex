import { getEnvSsr } from 'src/utils/getEnvSsr';

export enum LocalStorageItems {
  Lang = 'i18nextLng',
}

const LOCAL_STORAGE_DEFAULTS: Record<LocalStorageItems, string> = {
  [LocalStorageItems.Lang]: 'en',
};

export function getLocalStorageItem(key: LocalStorageItems) {
  const isSsr = getEnvSsr();

  if (!isSsr) {
    const res = localStorage.getItem(key);
    return res || LOCAL_STORAGE_DEFAULTS[key];
  }
  return LOCAL_STORAGE_DEFAULTS[key];
}
