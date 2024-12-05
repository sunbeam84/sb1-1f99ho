import { SkinMeasurements, TreatmentStep } from '../types/measurements';
import { Language } from '../types/language';
import { treatmentTranslations } from '../translations/treatmentTranslations';

export const generateTreatmentPlan = (measurements: SkinMeasurements, language: Language): TreatmentStep[] => {
  const plan: TreatmentStep[] = [];
  const t = treatmentTranslations[language];

  if (!t) return plan;

  // Initial Analysis
  plan.push({
    device: t.devices.skinAnalysis,
    duration: "5-10 minutes",
    description: t.descriptions.analysis,
    products: [t.products.analysisSoftware],
    targetedConcerns: measurements.selectedConcerns
  });

  // Basic Cleansing based on skin type
  if (measurements.moisture < 40 || measurements.sebum > 3) {
    plan.push({
      device: t.devices.hydraDermabrasion,
      duration: "15-20 minutes",
      description: measurements.plSensitivity > 3 ? t.descriptions.gentleCleansing : t.descriptions.deepCleansing,
      products: [
        measurements.sebum > 3 ? t.products.enzymaticCleanser :
        measurements.moisture < 40 ? t.products.creamyCleanser :
        measurements.plSensitivity > 3 ? t.products.soothingCleanser :
        t.products.balancingCleanser
      ],
      targetedConcerns: ['moisture', 'sebum'].filter(c => measurements.selectedConcerns.includes(c))
    });
  }

  // Pore and Blackhead Treatment
  if (measurements.pores > 3 || measurements.blackheads > 3) {
    plan.push({
      device: t.devices.bubblePen,
      duration: "15 minutes",
      description: t.descriptions.bubbleCleansing,
      products: [t.products.poreCleanser, t.products.mattifyingComplex],
      targetedConcerns: ['pores', 'blackheads'].filter(c => measurements.selectedConcerns.includes(c))
    });

    plan.push({
      device: t.devices.skinScrubber,
      duration: "10-15 minutes",
      description: t.descriptions.vacuumCleansing,
      products: [t.products.antibacterialGel],
      targetedConcerns: ['pores', 'blackheads'].filter(c => measurements.selectedConcerns.includes(c))
    });
  }

  // Acne Treatment
  if (measurements.acne > 3 || measurements.uvAcne > 3) {
    plan.push({
      device: t.devices.highFrequency,
      duration: "10-15 minutes",
      description: t.descriptions.antibacterial,
      products: [t.products.teaTreeSerum, t.products.aloeVera],
      targetedConcerns: ['acne'].filter(c => measurements.selectedConcerns.includes(c))
    });
  }

  // Hydration Treatment
  if (measurements.moisture < 40) {
    plan.push({
      device: t.devices.oxygenSpray,
      duration: "15 minutes",
      description: t.descriptions.moisturizing,
      products: [
        t.products.hyaluronicSerum,
        t.products.moisturizingMask,
        measurements.plSensitivity > 3 ? t.products.soothingConcentrate : t.products.moistureBooster
      ],
      targetedConcerns: ['moisture'].filter(c => measurements.selectedConcerns.includes(c))
    });
  }

  // Anti-aging Treatment
  if (measurements.wrinkles > 3 || measurements.collagenFiber < 3) {
    plan.push({
      device: t.devices.ultrasound,
      duration: "15 minutes",
      description: t.descriptions.ultrasoundPrep,
      products: [t.products.ultrasoundGel, t.products.goldPeptides],
      targetedConcerns: ['wrinkles', 'collagen'].filter(c => measurements.selectedConcerns.includes(c))
    });

    plan.push({
      device: t.devices.microNeedles,
      duration: "20-30 minutes",
      description: t.descriptions.microNeedling,
      products: [
        t.products.peptideSerum,
        t.products.collagenBooster,
        t.products.platinumPeptides
      ],
      targetedConcerns: ['wrinkles', 'collagen'].filter(c => measurements.selectedConcerns.includes(c))
    });
  }

  // Pigmentation Treatment
  if (measurements.spots > 3 || measurements.uvSpots > 3 || measurements.pigment > 3) {
    plan.push({
      device: t.devices.diamondPeeling,
      duration: "15-20 minutes",
      description: t.descriptions.diamondPeeling,
      products: [
        t.products.vitaminC,
        t.products.tyrosinase,
        t.products.nicotinamide
      ],
      targetedConcerns: ['spots', 'pigment'].filter(c => measurements.selectedConcerns.includes(c))
    });
  }

  // Eye Area Treatment
  if (measurements.darkCircles > 3) {
    plan.push({
      device: t.devices.ultrasound,
      duration: "10-15 minutes",
      description: t.descriptions.eyeTreatment,
      products: [
        t.products.caffeineConcentrate,
        t.products.beautyEyes,
        t.products.goldEyeCream
      ],
      targetedConcerns: ['darkCircles'].filter(c => measurements.selectedConcerns.includes(c))
    });
  }

  // Final Step
  plan.push({
    device: t.devices.coldHammer,
    duration: "10 minutes",
    description: t.descriptions.finalStep,
    products: [
      measurements.plSensitivity > 3 ? t.products.soothingMask : t.products.regeneratingMask,
      t.products.snailCream,
      t.products.sunscreen
    ],
    targetedConcerns: measurements.selectedConcerns
  });

  return plan;
};