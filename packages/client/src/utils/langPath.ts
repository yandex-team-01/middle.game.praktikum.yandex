import { LocalStorageItems } from 'src/utils/getOrSetLocalStorageItem';
import { getLocalStorageItem } from 'src/utils/getOrSetLocalStorageItem';

export const langPath = (path: string) => {
  const lang = getLocalStorageItem(LocalStorageItems.Lang);
  return `/${lang}${path}`;
};
