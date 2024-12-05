import React, { useEffect, useState } from 'react';
import { Wrench, CheckCircle, Clock, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import { useDeviceGuide } from '../utils/machineGuide';
import { DeviceInfo } from '../types/machine';

export const DeviceGuide: React.FC = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [deviceGuide, setDeviceGuide] = useState<DeviceInfo[]>([]);

  useEffect(() => {
    const loadGuide = () => {
      setDeviceGuide(useDeviceGuide(language));
    };

    loadGuide();
    window.addEventListener('languagechange', loadGuide);
    return () => window.removeEventListener('languagechange', loadGuide);
  }, [language]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">{t.deviceGuide.title}</h2>
      </div>

      <div className="grid gap-6">
        {deviceGuide.map((device, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{device.handle}</h3>
            
            <div className="grid gap-4">
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Wrench className="w-4 h-4" />
                  <h4 className="font-medium">{t.deviceGuide.functions}:</h4>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {device.functions.map((func, idx) => (
                    <li key={idx}>{func}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-green-600 mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <h4 className="font-medium">{t.deviceGuide.benefits}:</h4>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {device.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <Info className="w-4 h-4" />
                    <h4 className="font-medium">{t.deviceGuide.usage}:</h4>
                  </div>
                  <p className="text-gray-600">{device.usage}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-orange-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <h4 className="font-medium">{t.deviceGuide.duration}:</h4>
                  </div>
                  <p className="text-gray-600">{device.duration}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};