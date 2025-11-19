import type { RawLocales } from '@shared/locale';
import { LoadJsonFile } from '@shared/utils';

const locale = GetConvar('ox:locale', 'en');

export function emitNui(eventName: string, data: Object) {
  SendNuiMessage(JSON.stringify({ action: eventName, data }));
}

export function onNui<T = any>(eventName: string, callback: (data: T, cb: Function) => void) {
  RegisterNuiCallbackType(eventName);
  on(`__cfx_nui:${eventName}`, callback);
}

onNui('fetchLocales', (cb) => {
  const localeData = LoadJsonFile<RawLocales>(`locales/${locale}.json`);
  cb({ locale: localeData });
});
