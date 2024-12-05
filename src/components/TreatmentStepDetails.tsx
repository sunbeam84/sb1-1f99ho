import React from 'react';
import { DetailedTreatmentStep } from '../types/treatment';
import { Settings, List, Beaker, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

interface Props {
  details: DetailedTreatmentStep;
}

export const TreatmentStepDetails: React.FC<Props> = ({ details }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  if (!details) return null;

  return (
    <div className="mt-4 space-y-6 border-t pt-4">
      {/* Device Setup Section */}
      {details.deviceSetup && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 mb-3">
            <Settings className="w-5 h-5" />
            <h4 className="font-medium">{t.treatmentDetails.deviceSetup}</h4>
          </div>
          <div className="grid gap-3">
            {details.deviceSetup.mode && (
              <div>
                <span className="font-medium">{t.treatmentDetails.mode}:</span> {details.deviceSetup.mode}
              </div>
            )}
            {details.deviceSetup.attachments && (
              <div>
                <span className="font-medium">{t.treatmentDetails.attachments}:</span>
                <ul className="list-disc list-inside mt-1 ml-4">
                  {details.deviceSetup.attachments.map((attachment, idx) => (
                    <li key={idx}>{attachment}</li>
                  ))}
                </ul>
              </div>
            )}
            {details.deviceSetup.settings && (
              <div>
                <span className="font-medium">Settings:</span>
                <div className="grid grid-cols-2 gap-2 mt-1 ml-4">
                  {Object.entries(details.deviceSetup.settings).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-medium capitalize">{key}:</span> {value}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Preparation Section */}
      {details.preparation && details.preparation.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-green-600 mb-3">
            <List className="w-5 h-5" />
            <h4 className="font-medium">{t.treatmentDetails.preparation}</h4>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {details.preparation.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions Section */}
      {details.instructions && details.instructions.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-purple-600 mb-3">
            <ArrowRight className="w-5 h-5" />
            <h4 className="font-medium">{t.treatmentDetails.instructions}</h4>
          </div>
          <div className="space-y-4">
            {details.instructions.map((instruction) => (
              <div key={instruction.step} className="border border-gray-200 p-3 rounded-md">
                <div className="font-medium mb-2">
                  {t.treatmentDetails.step} {instruction.step}: {instruction.action}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium">{t.treatmentDetails.duration}:</span> {instruction.duration}
                  </div>
                  <div>
                    <span className="font-medium">{t.treatmentDetails.technique}:</span> {instruction.technique}
                  </div>
                  {instruction.direction && (
                    <div>
                      <span className="font-medium">{t.treatmentDetails.direction}:</span> {instruction.direction}
                    </div>
                  )}
                  <div>
                    <span className="font-medium">{t.treatmentDetails.pressure}:</span>{' '}
                    {t.treatmentDetails.pressureLevels[instruction.pressure]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Application Section */}
      {details.productApplication && details.productApplication.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-amber-600 mb-3">
            <Beaker className="w-5 h-5" />
            <h4 className="font-medium">{t.treatmentDetails.products}</h4>
          </div>
          <div className="space-y-3">
            {details.productApplication.map((product, idx) => (
              <div key={idx} className="border border-gray-200 p-3 rounded-md">
                <div className="font-medium mb-2">{product.product}</div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium">{t.treatmentDetails.amount}:</span> {product.amount}
                  </div>
                  <div>
                    <span className="font-medium">{t.treatmentDetails.method}:</span> {product.method}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Aftercare Section */}
      {details.aftercare && details.aftercare.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-teal-600 mb-3">
            <Lightbulb className="w-5 h-5" />
            <h4 className="font-medium">{t.treatmentDetails.aftercare}</h4>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {details.aftercare.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contraindications Section */}
      {details.contraindications && details.contraindications.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
          <div className="flex items-center gap-2 text-red-600 mb-3">
            <AlertTriangle className="w-5 h-5" />
            <h4 className="font-medium">{t.treatmentDetails.contraindications}</h4>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-4 text-red-600">
            {details.contraindications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};