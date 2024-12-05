import React from 'react';
import { Beaker, Check, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import { useSerumGuide } from '../utils/serumGuide';

export const SerumGuide: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const serumGuide = useSerumGuide(language);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Beaker className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">{t.serumGuide.title}</h2>
      </div>

      <div className="grid gap-6">
        {serumGuide.map((serum) => (
          <div key={serum.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{serum.name}</h3>
            
            <div className="grid gap-4">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Beaker className="w-4 h-4" />
                  <h4 className="font-medium">{t.serumGuide.ingredients}:</h4>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {serum.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <Check className="w-4 h-4" />
                  <h4 className="font-medium">{t.serumGuide.effects}:</h4>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {serum.effects.map((effect, idx) => (
                    <li key={idx}>{effect}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <Info className="w-4 h-4" />
                    <h4 className="font-medium">{t.serumGuide.usage}:</h4>
                  </div>
                  <p className="text-gray-600">{serum.usage}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-orange-600 mb-2">
                    <Info className="w-4 h-4" />
                    <h4 className="font-medium">{t.serumGuide.suitableFor}:</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {serum.suitableFor.map((suitable, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
                      >
                        {suitable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};