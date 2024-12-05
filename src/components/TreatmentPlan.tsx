import React, { useState, useEffect, useCallback } from 'react';
import { TreatmentStep } from '../types/measurements';
import { Clock, Wrench, Sparkle, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import { useSkinConcerns } from '../utils/skinConcerns';
import { TreatmentStepDetails } from './TreatmentStepDetails';
import { getDeviceTreatmentDetails } from '../utils/treatmentDetails';

interface Props {
  steps: TreatmentStep[];
}

export const TreatmentPlan: React.FC<Props> = ({ steps }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const skinConcerns = useSkinConcerns(language);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [treatmentDetails, setTreatmentDetails] = useState<Record<string, any>>({});

  const loadTreatmentDetails = useCallback(() => {
    if (!steps) return;
    
    const details: Record<string, any> = {};
    steps.forEach(step => {
      if (step.device) {
        const deviceDetails = getDeviceTreatmentDetails(step.device, language);
        if (deviceDetails) {
          details[step.device] = deviceDetails;
        }
      }
    });
    setTreatmentDetails(details);
  }, [steps, language]);

  useEffect(() => {
    loadTreatmentDetails();
    window.addEventListener('languagechange', loadTreatmentDetails);
    return () => window.removeEventListener('languagechange', loadTreatmentDetails);
  }, [loadTreatmentDetails]);

  const getConcernLabel = (concernId: string) => {
    const concern = skinConcerns.find(c => c.id === concernId);
    return concern ? concern.label : concernId;
  };

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Sparkle className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">{t.treatmentPlan}</h2>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const details = step.device ? treatmentDetails[step.device] : null;
          
          return (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-lg text-gray-800">{step.device}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>

                  <p className="mt-2 text-gray-700">{step.description}</p>

                  {step.targetedConcerns && step.targetedConcerns.length > 0 && (
                    <div className="mt-3">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">{t.treats}:</span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {step.targetedConcerns.map((concernId) => (
                          <span
                            key={concernId}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {getConcernLabel(concernId)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.products && step.products.length > 0 && (
                    <div className="mt-3">
                      <h4 className="font-medium text-gray-700">{t.requiredProducts}:</h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {step.products.map((product, idx) => (
                          <li key={idx}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {details && (
                    <div className="mt-4">
                      <button
                        onClick={() => toggleStep(index)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        {expandedStep === index ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            {t.treatmentDetails.hideDetails}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            {t.treatmentDetails.showDetails}
                          </>
                        )}
                      </button>

                      {expandedStep === index && (
                        <div className="mt-4">
                          <TreatmentStepDetails details={details} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};