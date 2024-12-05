import { DetailedTreatmentStep } from '../types/treatment';
import { Language } from '../types/language';
import { skinAnalysis } from '../data/treatmentDetails/skinAnalysis';
import { hydraDermabrasion } from '../data/treatmentDetails/hydraDermabrasion';
import { bubblePen } from '../data/treatmentDetails/bubblePen';
import { oxygenSpray } from '../data/treatmentDetails/oxygenSpray';
import { ultrasound } from '../data/treatmentDetails/ultrasound';
import { coldHammer } from '../data/treatmentDetails/coldHammer';
import { microNeedles } from '../data/treatmentDetails/microNeedles';
import { skinScrubber } from '../data/treatmentDetails/skinScrubber';
import { highFrequency } from '../data/treatmentDetails/highFrequency';
import { diamondPeeling } from '../data/treatmentDetails/diamondPeeling';
import { vacuumPen } from '../data/treatmentDetails/vacuumPen';

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

const DEVICE_MAPPINGS: Record<string, string> = {
  // Analysis
  'hautanalysehandle': 'skinanalysis',
  'skinanalysishandle': 'skinanalysis',
  'analysishandle': 'skinanalysis',
  'hautanalyse': 'skinanalysis',
  'skinanalysis': 'skinanalysis',
  // Hydra
  'hydradermabrasionhandle': 'hydradermabrasion',
  'hydradermabrasion': 'hydradermabrasion',
  // Bubble
  'bubblepen': 'bubblepen',
  'bubblepenhandle': 'bubblepen',
  // Oxygen
  'oxygenspraygun': 'oxygenspray',
  'oxygenspray': 'oxygenspray',
  'sauerstoffspray': 'oxygenspray',
  // Ultrasound
  'ultrasoundhandle': 'ultrasound',
  'ultrasound': 'ultrasound',
  'ultraschall': 'ultrasound',
  // Cold
  'coldhammer': 'coldhammer',
  'coldhammmerhandle': 'coldhammer',
  'kaltehammer': 'coldhammer',
  'kalthammer': 'coldhammer',
  // Micro needles
  'microneedleshandle': 'microneedles',
  'microneedles': 'microneedles',
  'micronadel': 'microneedles',
  // Scrubber
  'skinscrubberhandle': 'skinscrubber',
  'skinscrubber': 'skinscrubber',
  // High frequency
  'highfrequencyhandle': 'highfrequency',
  'highfrequency': 'highfrequency',
  'hochfrequenz': 'highfrequency',
  // Diamond
  'diamondpeelinghandle': 'diamondpeeling',
  'diamondpeeling': 'diamondpeeling',
  // Vacuum
  'vacuumpenhandle': 'vacuumpen',
  'vacuumpen': 'vacuumpen',
  'vakuumpen': 'vacuumpen'
};

const normalizeDeviceName = (deviceName: string): string => {
  // Convert to lowercase and remove special characters
  return deviceName.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .replace(/handle$/, '')
    .replace(/gun$/, '')
    .replace(/head$/, '')
    .replace(/pen$/, '')
    .replace(/hammer$/, '');
};

export const getDeviceTreatmentDetails = (deviceName: string, language: Language): DetailedTreatmentStep | undefined => {
  if (!deviceName) return undefined;

  // Normalize the device name
  const normalizedName = normalizeDeviceName(deviceName);
  
  // Try to find a direct match first
  let treatmentId = DEVICE_MAPPINGS[normalizedName];

  // If no direct match, try to find a partial match
  if (!treatmentId) {
    const possibleMatches = Object.entries(DEVICE_MAPPINGS).filter(([key]) => 
      normalizedName.includes(key) || key.includes(normalizedName)
    );
    
    if (possibleMatches.length > 0) {
      // Sort by length descending to get the most specific match
      possibleMatches.sort(([a], [b]) => b.length - a.length);
      treatmentId = possibleMatches[0][1];
    }
  }

  if (!treatmentId) {
    console.log('No mapping found for device:', deviceName, 'normalized as:', normalizedName);
    return undefined;
  }

  const details = TREATMENT_DETAILS[treatmentId]?.[language];

  if (!details) {
    console.log('No details found for treatment ID:', treatmentId);
    return undefined;
  }

  return details;
};