import { Language } from '../../types/language';
import { DetailedTreatmentStep } from '../../types/treatment';
import { skinAnalysis } from './skinAnalysis';
import { hydraDermabrasion } from './hydraDermabrasion';
import { bubblePen } from './bubblePen';
import { oxygenSpray } from './oxygenSpray';
import { ultrasound } from './ultrasound';
import { coldHammer } from './coldHammer';
import { microNeedles } from './microNeedles';
import { skinScrubber } from './skinScrubber';
import { highFrequency } from './highFrequency';
import { diamondPeeling } from './diamondPeeling';
import { vacuumPen } from './vacuumPen';

const TREATMENT_DETAILS: Record<string, Record<Language, DetailedTreatmentStep>> = {
  skinanalysis: skinAnalysis,
  hydradermabrasion: hydraDermabrasion,
  bubblepen: bubblePen,
  oxygenspray: oxygenSpray,
  ultrasound: ultrasound,
  coldhammer: coldHammer,
  microneedles: microNeedles,
  skinscrubber: skinScrubber,
  highfrequency: highFrequency,
  diamondpeeling: diamondPeeling,
  vacuumpen: vacuumPen
};

export const getTreatmentDetails = (deviceId: string, language: Language): DetailedTreatmentStep | undefined => {
  const normalizedId = deviceId.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/\s+/g, '')
    .replace('handle', '')
    .replace('-', '');
    
  return TREATMENT_DETAILS[normalizedId]?.[language];
};