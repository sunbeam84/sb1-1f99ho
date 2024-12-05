import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const vacuumPen: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'vacuumpen',
    deviceSetup: {
      mode: 'Vakuum-Extraktion',
      attachments: ['Verschiedene Aufsatzgrößen'],
      settings: {
        suctionLevel: 'Anpassbar',
        pulseMode: 'Optional'
      }
    },
    preparation: [
      'Poren öffnen (Dampf)',
      'Haut reinigen',
      'Aufsatzgröße wählen',
      'Saugstärke testen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Sanfte Extraktion',
        duration: '5 Minuten',
        technique: 'Gleitende Bewegungen',
        pressure: 'light',
        direction: 'Mit Lymphfluss'
      },
      {
        step: 2,
        action: 'Tiefenreinigung',
        duration: '10-15 Minuten',
        technique: 'Punktuelle Behandlung',
        pressure: 'medium',
        direction: 'T-Zone fokussiert'
      }
    ],
    productApplication: [
      {
        product: 'Porenreiniger',
        amount: '3ml',
        method: 'Vor der Extraktion'
      },
      {
        product: 'Adstringierendes Tonic',
        amount: '5ml',
        method: 'Nach der Behandlung'
      }
    ],
    aftercare: [
      'Poren verschließen (kalt)',
      'Desinfizierende Lotion',
      'Beruhigende Maske',
      'Sonnenschutz'
    ],
    contraindications: [
      'Empfindliche Kapillaren',
      'Aktive Entzündungen',
      'Rosacea',
      'Sonnenbrand'
    ]
  },
  en: {
    id: 'vacuumpen',
    deviceSetup: {
      mode: 'Vacuum extraction',
      attachments: ['Various tip sizes'],
      settings: {
        suctionLevel: 'Adjustable',
        pulseMode: 'Optional'
      }
    },
    preparation: [
      'Open pores (steam)',
      'Cleanse skin',
      'Select tip size',
      'Test suction strength'
    ],
    instructions: [
      {
        step: 1,
        action: 'Gentle extraction',
        duration: '5 minutes',
        technique: 'Gliding movements',
        pressure: 'light',
        direction: 'With lymph flow'
      },
      {
        step: 2,
        action: 'Deep cleansing',
        duration: '10-15 minutes',
        technique: 'Spot treatment',
        pressure: 'medium',
        direction: 'Focus on T-zone'
      }
    ],
    productApplication: [
      {
        product: 'Pore cleanser',
        amount: '3ml',
        method: 'Before extraction'
      },
      {
        product: 'Astringent tonic',
        amount: '5ml',
        method: 'After treatment'
      }
    ],
    aftercare: [
      'Close pores (cold)',
      'Disinfecting lotion',
      'Calming mask',
      'Sunscreen'
    ],
    contraindications: [
      'Sensitive capillaries',
      'Active inflammation',
      'Rosacea',
      'Sunburn'
    ]
  },
  th: {
    id: 'vacuumpen',
    deviceSetup: {
      mode: 'การดูดสิวเสี้ยน',
      attachments: ['หัวดูดขนาดต่างๆ'],
      settings: {
        suctionLevel: 'ปรับระดับได้',
        pulseMode: 'เลือกได้'
      }
    },
    preparation: [
      'เปิดรูขุมขน (ไอน้ำ)',
      'ทำความสะอาดผิว',
      'เลือกขนาดหัวดูด',
      'ทดสอบแรงดูด'
    ],
    instructions: [
      {
        step: 1,
        action: 'ดูดเบาๆ',
        duration: '5 นาที',
        technique: 'เคลื่อนไหวแบบรูด',
        pressure: 'light',
        direction: 'ตามการไหลของน้ำเหลือง'
      },
      {
        step: 2,
        action: 'ทำความสะอาดลึก',
        duration: '10-15 นาที',
        technique: 'รักษาเฉพาะจุด',
        pressure: 'medium',
        direction: 'เน้นโซนที'
      }
    ],
    productApplication: [
      {
        product: 'น้ำยาทำความสะอาดรูขุมขน',
        amount: '3มล.',
        method: 'ก่อนการดูด'
      },
      {
        product: 'โทนเนอร์สมานผิว',
        amount: '5มล.',
        method: 'หลังการรักษา'
      }
    ],
    aftercare: [
      'ปิดรูขุมขน (เย็น)',
      'โลชั่นฆ่าเชื้อ',
      'มาส์กบำรุงผิว',
      'ครีมกันแดด'
    ],
    contraindications: [
      'เส้นเลือดฝอยบอบบาง',
      'การอักเสบที่กำลังเป็นอยู่',
      'โรคผิวหนังโรซาเซีย',
      'ผิวไหม้แดด'
    ]
  }
};