import {getRequestConfig} from 'next-intl/server';
import {LOCALES} from '@/locales';
import {supportedLocales} from './locales.mjs';

export default getRequestConfig(async ({locale}) => {
  let resolvedLocale = locale;

  // Validate that the incoming `locale` parameter is valid
  if (!resolvedLocale || !supportedLocales.includes(resolvedLocale)) {
    resolvedLocale = 'en';
  }

  return {
    locale: resolvedLocale,
    messages: LOCALES[resolvedLocale] ?? LOCALES['en']
  };
});
