export type Language = 'de' | 'en' | 'th';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LANGUAGES = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'th', label: 'ไทย' }
] as const;