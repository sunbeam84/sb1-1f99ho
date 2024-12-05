import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LANGUAGES } from '../types/language';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
      <Globe className="w-5 h-5 text-blue-600" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as typeof language)}
        className="bg-transparent border-none text-gray-700 focus:ring-0 cursor-pointer"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};