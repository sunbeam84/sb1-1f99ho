export interface SkinMeasurements {
  moisture: number;
  skinType: string;
  sebum: number;
  pores: number;
  spots: number;
  wrinkles: number;
  acne: number;
  blackheads: number;
  darkCircles: number;
  skinTone: number;
  plSensitivity: number;
  uvSpots: number;
  pigment: number;
  uvAcne: number;
  collagenFiber: number;
  selectedConcerns: string[];
}

export interface SkinConcern {
  id: string;
  label: string;
  description: string;
}

export interface TreatmentStep {
  device: string;
  duration: string;
  description: string;
  products?: string[];
  targetedConcerns: string[];
}