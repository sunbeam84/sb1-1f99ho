import React, { useState } from 'react';
import { SkinMeasurements } from '../types/measurements';
import { SlidersHorizontal, Save } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

interface Props {
  onSubmit: (measurements: SkinMeasurements) => void;
}

export const MeasurementForm: React.FC<Props> = ({ onSubmit }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  const [measurements, setMeasurements] = useState<SkinMeasurements>({
    moisture: 50,
    skinType: 'normal',
    sebum: 3,
    pores: 3,
    spots: 3,
    wrinkles: 3,
    acne: 3,
    blackheads: 3,
    darkCircles: 3,
    skinTone: 3,
    plSensitivity: 3,
    uvSpots: 3,
    pigment: 3,
    uvAcne: 3,
    collagenFiber: 3,
    selectedConcerns: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(measurements);
  };

  const handleSliderChange = (name: keyof SkinMeasurements, value: number) => {
    setMeasurements(prev => ({
      ...prev,
      [name]: value,
      selectedConcerns: updateSelectedConcerns({ ...prev, [name]: value })
    }));
  };

  const updateSelectedConcerns = (values: SkinMeasurements): string[] => {
    const concerns: string[] = [];
    
    // Moisture concerns
    if (values.moisture < 40) concerns.push('moisture');
    
    // Skin condition concerns
    if (values.sebum > 3) concerns.push('sebum');
    if (values.pores > 3) concerns.push('pores');
    if (values.spots > 3) concerns.push('spots');
    if (values.wrinkles > 3) concerns.push('wrinkles');
    if (values.acne > 3) concerns.push('acne');
    if (values.blackheads > 3) concerns.push('blackheads');
    if (values.darkCircles > 3) concerns.push('darkCircles');
    
    // Sensitivity and damage concerns
    if (values.plSensitivity > 3) concerns.push('plSensitivity');
    if (values.uvSpots > 3) concerns.push('uvSpots');
    if (values.pigment > 3) concerns.push('pigment');
    if (values.uvAcne > 3) concerns.push('uvAcne');
    
    // Structural concerns
    if (values.collagenFiber < 3) concerns.push('collagen');

    return concerns;
  };

  const renderSlider = (key: keyof SkinMeasurements, label: string, min: number = 1, max: number = 5) => (
    <div className="bg-gray-50 p-4 rounded-lg">
      <label className="block text-gray-700 font-medium mb-2">
        {label}: <span className="text-blue-600">{measurements[key]}{key === 'moisture' ? '%' : ''}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={measurements[key]}
        onChange={(e) => handleSliderChange(key, parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">{t.skinAnalysisTitle}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skin Type Selection */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block text-gray-700 font-medium mb-2">{t.skinType.label}</label>
          <select
            value={measurements.skinType}
            onChange={(e) => setMeasurements(prev => ({ ...prev, skinType: e.target.value }))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
          >
            <option value="normal">{t.skinType.normal}</option>
            <option value="dry">{t.skinType.dry}</option>
            <option value="oily">{t.skinType.oily}</option>
            <option value="combination">{t.skinType.combination}</option>
            <option value="sensitive">{t.skinType.sensitive}</option>
          </select>
        </div>

        {/* Moisture Level */}
        {renderSlider('moisture', 'Moisture Level', 0, 100)}

        {/* Basic Measurements */}
        {renderSlider('sebum', 'Sebum Production')}
        {renderSlider('pores', 'Pore Size')}
        {renderSlider('spots', 'Spots')}
        {renderSlider('wrinkles', 'Wrinkles')}
        {renderSlider('acne', 'Acne')}
        {renderSlider('blackheads', 'Blackheads')}
        {renderSlider('darkCircles', 'Dark Circles')}

        {/* Advanced Measurements */}
        {renderSlider('skinTone', 'Skin Tone')}
        {renderSlider('plSensitivity', 'PL Sensitivity')}
        {renderSlider('uvSpots', 'UV Spots')}
        {renderSlider('pigment', 'Pigmentation')}
        {renderSlider('uvAcne', 'UV Acne')}
        {renderSlider('collagenFiber', 'Collagen Fiber')}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
      >
        <Save className="w-5 h-5" />
        {t.createPlan}
      </button>
    </form>
  );
};