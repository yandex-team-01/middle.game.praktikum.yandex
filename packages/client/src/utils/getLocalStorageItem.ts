export enum LocalStorageItems {
  Lang = 'i18nextLng',
}

const LOCAL_STORAGE_DEFAULTS: Record<LocalStorageItems, string> = {
  [LocalStorageItems.Lang]: 'en',
};

export function getLocalStorageItem(key: LocalStorageItems) {
  if (typeof localStorage !== 'undefined') {
    const res = localStorage.getItem(key);
    return res || LOCAL_STORAGE_DEFAULTS[key];
  }
  return LOCAL_STORAGE_DEFAULTS[key];
}
