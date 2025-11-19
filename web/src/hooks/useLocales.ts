import { LocaleContext, type ILocaleContext } from '@/context/LocaleContext';
import { useContext } from 'react';

export function useLocales() {
  return useContext(LocaleContext) as ILocaleContext;
}
