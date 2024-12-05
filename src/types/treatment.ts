export interface TreatmentInstruction {
  step: number;
  action: string;
  duration: string;
  technique: string;
  pressure: 'light' | 'medium' | 'firm';
  direction?: string;
  warnings?: string[];
  tips?: string[];
}

export interface DetailedTreatmentStep {
  id: string;
  deviceSetup: {
    powerLevel?: number;
    mode?: string;
    attachments?: string[];
    settings?: Record<string, any>;
  };
  preparation: string[];
  instructions: TreatmentInstruction[];
  productApplication: {
    product: string;
    amount: string;
    method: string;
  }[];
  aftercare: string[];
  contraindications?: string[];
}