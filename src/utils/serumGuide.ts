import { SerumInfo } from '../types/serum';
import { Language } from '../types/language';
import { serumsDe } from '../translations/serums/de';
import { serumsEn } from '../translations/serums/en';
import { serumsTh } from '../translations/serums/th';

const SERUM_TRANSLATIONS = {
  de: serumsDe,
  en: serumsEn,
  th: serumsTh
};

export const useSerumGuide = (language: Language): SerumInfo[] => {
  const translations = SERUM_TRANSLATIONS[language];
  return Object.entries(translations).map(([id, serum]) => ({
    id,
    ...serum
  }));
};