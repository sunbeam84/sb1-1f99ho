export interface SerumTranslation {
  name: string;
  ingredients: string[];
  effects: string[];
  usage: string;
  suitableFor: string[];
}

export interface SerumTranslations {
  [key: string]: SerumTranslation;
}

export interface DeviceTranslation {
  name: string;
  functions: string[];
  benefits: string[];
  usage: string;
  duration: string;
}

export interface DeviceTranslations {
  [key: string]: DeviceTranslation;
}