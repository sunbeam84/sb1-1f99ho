import React, { useState } from 'react';
import { MeasurementForm } from './components/MeasurementForm';
import { TreatmentPlan } from './components/TreatmentPlan';
import { DeviceGuide } from './components/DeviceGuide';
import { SerumGuide } from './components/SerumGuide';
import { generateTreatmentPlan } from './utils/treatmentLogic';
import { SkinMeasurements, TreatmentStep } from './types/measurements';
import { Book, ScanLine, Beaker } from 'lucide-react';
import { LanguageSelector } from './components/LanguageSelector';
import { useLanguage } from './contexts/LanguageContext';
import { useTranslation } from './translations';

function App() {
  const [treatmentSteps, setTreatmentSteps] = useState<TreatmentStep[]>([]);
  const [activeView, setActiveView] = useState<'guide' | 'analysis' | 'serum'>('analysis');
  const { language } = useLanguage();
  const t = useTranslation(language);

  const handleMeasurementSubmit = (measurements: SkinMeasurements) => {
    const plan = generateTreatmentPlan(measurements, language);
    setTreatmentSteps(plan);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        {/* Navigation Section */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveView('guide')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeView === 'guide'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Book className="w-5 h-5" />
              {t.deviceGuide.title}
            </button>
            <button
              onClick={() => setActiveView('analysis')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeView === 'analysis'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ScanLine className="w-5 h-5" />
              {t.skinAnalysis}
            </button>
            <button
              onClick={() => setActiveView('serum')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeView === 'serum'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Beaker className="w-5 h-5" />
              {t.serumGuide.title}
            </button>
          </div>
          <LanguageSelector />
        </div>

        {/* Content Section */}
        {activeView === 'guide' ? (
          <DeviceGuide />
        ) : activeView === 'serum' ? (
          <SerumGuide />
        ) : (
          <div className="space-y-8">
            <MeasurementForm onSubmit={handleMeasurementSubmit} />
            {treatmentSteps.length > 0 && (
              <TreatmentPlan steps={treatmentSteps} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;