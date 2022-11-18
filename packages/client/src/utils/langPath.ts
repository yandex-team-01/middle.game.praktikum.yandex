import { LocalStorageItems } from 'src/utils/getLocalStorageItem';
import { getLocalStorageItem } from 'src/utils/getLocalStorageItem';

export const langPath = (path: string) => {
  const lang = getLocalStorageItem(LocalStorageItems.Lang);
  return `/${lang}${path}`;
};
