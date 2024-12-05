import { Language } from '../types/language';
import { de } from './de';
import { en } from './en';
import { th } from './th';

const translations = {
  de,
  en,
  th
};

export const useTranslation = (language: Language) => {
  return translations[language];
};