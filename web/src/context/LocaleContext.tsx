import { fetchNui } from '@/lib/fetchNui';
import { createContext, useEffect, useState, type ReactNode } from 'react';

export type RawLocales = typeof import('../../../locales/en.json');

export interface ILocaleContext {
  locale: (key: keyof RawLocales) => string;
}

export const LocaleContext = createContext({});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locales, setLocales] = useState<RawLocales>({} as RawLocales); // Workaround for initial empty state

  function locale(key: keyof RawLocales) {
    return locales[key as keyof RawLocales] || key;
  }

  useEffect(() => {
    fetchNui<{ locale: any }>('fetchLocales').then((response) => {
      setLocales(response.locale);
    });
  }, []);

  return <LocaleContext value={{ locale }}>{children}</LocaleContext>;
}
