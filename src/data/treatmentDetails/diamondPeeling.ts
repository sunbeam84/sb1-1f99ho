import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const diamondPeeling: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'diamondpeeling',
    deviceSetup: {
      mode: 'Dermabrasion',
      attachments: ['Diamant-Aufsätze verschiedener Körnung'],
      settings: {
        vacuum: 'Mittel',
        speed: 'Angepasst'
      }
    },
    preparation: [
      'Hautzustand analysieren',
      'Reinigung durchführen',
      'Aufsatz nach Hauttyp wählen',
      'Vakuumstärke testen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Sanftes Peeling',
        duration: '10 Minuten',
        technique: 'Gleichmäßige Züge',
        pressure: 'light',
        direction: 'Mit Hautstruktur'
      },
      {
        step: 2,
        action: 'Intensives Peeling',
        duration: '10-15 Minuten',
        technique: 'Systematische Behandlung',
        pressure: 'medium',
        direction: 'Problemzonen fokussiert'
      }
    ],
    productApplication: [
      {
        product: 'Beruhigende Lotion',
        amount: '5ml',
        method: 'Nach jedem Durchgang'
      },
      {
        product: 'Regenerationsmaske',
        amount: '10ml',
        method: 'Abschließend'
      }
    ],
    aftercare: [
      'Kühlende Kompresse',
      'Regenerationsserum',
      'Hoher Sonnenschutz',
      'Keine Säuren 48h'
    ],
    contraindications: [
      'Aktive Akne',
      'Rosacea',
      'Offene Wunden',
      'Kürzliche Säurebehandlung',
      'Sonnenbrand'
    ]
  },
  en: {
    id: 'diamondpeeling',
    deviceSetup: {
      mode: 'Dermabrasion',
      attachments: ['Diamond tips of various grits'],
      settings: {
        vacuum: 'Medium',
        speed: 'Adjusted'
      }
    },
    preparation: [
      'Analyze skin condition',
      'Perform cleansing',
      'Select tip based on skin type',
      'Test vacuum strength'
    ],
    instructions: [
      {
        step: 1,
        action: 'Gentle peeling',
        duration: '10 minutes',
        technique: 'Even strokes',
        pressure: 'light',
        direction: 'With skin texture'
      },
      {
        step: 2,
        action: 'Intensive peeling',
        duration: '10-15 minutes',
        technique: 'Systematic treatment',
        pressure: 'medium',
        direction: 'Focus on problem areas'
      }
    ],
    productApplication: [
      {
        product: 'Soothing lotion',
        amount: '5ml',
        method: 'After each pass'
      },
      {
        product: 'Regeneration mask',
        amount: '10ml',
        method: 'Final step'
      }
    ],
    aftercare: [
      'Cooling compress',
      'Regeneration serum',
      'High SPF sunscreen',
      'No acids for 48h'
    ],
    contraindications: [
      'Active acne',
      'Rosacea',
      'Open wounds',
      'Recent acid treatment',
      'Sunburn'
    ]
  },
  th: {
    id: 'diamondpeeling',
    deviceSetup: {
      mode: 'การขัดผิว',
      attachments: ['หัวเพชรขนาดต่างๆ'],
      settings: {
        vacuum: 'ปานกลาง',
        speed: 'ปรับระดับ'
      }
    },
    preparation: [
      'วิเคราะห์สภาพผิว',
      'ทำความสะอาด',
      'เลือกหัวตามประเภทผิว',
      'ทดสอบแรงดูด'
    ],
    instructions: [
      {
        step: 1,
        action: 'ขัดผิวเบา',
        duration: '10 นาที',
        technique: 'ลูบเบาๆ',
        pressure: 'light',
        direction: 'ตามลายผิว'
      },
      {
        step: 2,
        action: 'ขัดผิวเข้มข้น',
        duration: '10-15 นาที',
        technique: 'การรักษาอย่างเป็นระบบ',
        pressure: 'medium',
        direction: 'เน้นบริเวณที่มีปัญหา'
      }
    ],
    productApplication: [
      {
        product: 'โลชั่นบำรุงผิว',
        amount: '5มล.',
        method: 'หลังแต่ละรอบ'
      },
      {
        product: 'มาส์กฟื้นฟูผิว',
        amount: '10มล.',
        method: 'ขั้นตอนสุดท้าย'
      }
    ],
    aftercare: [
      'ประคบเย็น',
      'เซรั่มฟื้นฟูผิว',
      'ครีมกันแดด SPF สูง',
      'งดใช้กรด 48 ชั่วโมง'
    ],
    contraindications: [
      'สิวอักเสบ',
      'โรคผิวหนังโรซาเซีย',
      'แผลเปิด',
      'เพิ่งใช้ทรีทเมนต์กรด',
      'ผิวไหม้แดด'
    ]
  }
};