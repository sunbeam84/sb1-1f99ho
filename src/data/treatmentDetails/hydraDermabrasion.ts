import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const hydraDermabrasion: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'hydradermabrasion',
    deviceSetup: {
      mode: 'Hydra-Peeling',
      attachments: ['Hydra-Kopf', 'Peeling-Aufsatz'],
      settings: {
        intensity: 'Mittel',
        suction: 'Angepasst nach Hauttyp',
        waterFlow: 'Moderat'
      }
    },
    preparation: [
      'Hauttyp bestimmen',
      'Reinigungslösung vorbereiten',
      'Handtücher und Arbeitsbereich vorbereiten',
      'Schutzausrüstung anlegen',
      'Gerät auf Funktionalität prüfen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Vorreinigung',
        duration: '5 Minuten',
        technique: 'Sanfte Reinigung',
        pressure: 'light',
        direction: 'Von innen nach außen'
      },
      {
        step: 2,
        action: 'Hydra-Peeling',
        duration: '15-20 Minuten',
        technique: 'Systematische Behandlung',
        pressure: 'medium',
        direction: 'Lymphflussrichtung beachten'
      },
      {
        step: 3,
        action: 'Tiefenreinigung',
        duration: '10 Minuten',
        technique: 'Vakuum-Extraktion',
        pressure: 'medium',
        direction: 'Problemzonen fokussiert'
      }
    ],
    productApplication: [
      {
        product: 'Reinigungslösung',
        amount: '30ml',
        method: 'Im Gerät'
      },
      {
        product: 'Hyaluronserum',
        amount: '2-3ml',
        method: 'Nach der Behandlung'
      },
      {
        product: 'Beruhigende Maske',
        amount: '5ml',
        method: 'Abschließend'
      }
    ],
    aftercare: [
      'Feuchtigkeitspflege auftragen',
      'UV-Schutz auftragen',
      'Hautpflegeroutine besprechen',
      'Nächsten Termin vereinbaren',
      'Trinkempfehlung: viel Wasser'
    ],
    contraindications: [
      'Aktive Akne',
      'Offene Wunden',
      'Sonnenbrand',
      'Starke Couperose',
      'Aktive Herpes-Läsionen'
    ]
  },
  en: {
    id: 'hydradermabrasion',
    deviceSetup: {
      mode: 'Hydra-Peeling',
      attachments: ['Hydra head', 'Peeling attachment'],
      settings: {
        intensity: 'Medium',
        suction: 'Adjusted to skin type',
        waterFlow: 'Moderate'
      }
    },
    preparation: [
      'Determine skin type',
      'Prepare cleansing solution',
      'Prepare towels and work area',
      'Put on protective equipment',
      'Check device functionality'
    ],
    instructions: [
      {
        step: 1,
        action: 'Pre-cleansing',
        duration: '5 minutes',
        technique: 'Gentle cleansing',
        pressure: 'light',
        direction: 'Inside to outside'
      },
      {
        step: 2,
        action: 'Hydra-peeling',
        duration: '15-20 minutes',
        technique: 'Systematic treatment',
        pressure: 'medium',
        direction: 'Follow lymphatic flow'
      },
      {
        step: 3,
        action: 'Deep cleansing',
        duration: '10 minutes',
        technique: 'Vacuum extraction',
        pressure: 'medium',
        direction: 'Focus on problem areas'
      }
    ],
    productApplication: [
      {
        product: 'Cleansing solution',
        amount: '30ml',
        method: 'In device'
      },
      {
        product: 'Hyaluronic serum',
        amount: '2-3ml',
        method: 'After treatment'
      },
      {
        product: 'Calming mask',
        amount: '5ml',
        method: 'Final step'
      }
    ],
    aftercare: [
      'Apply moisturizer',
      'Apply UV protection',
      'Discuss skincare routine',
      'Schedule next appointment',
      'Hydration advice: drink plenty of water'
    ],
    contraindications: [
      'Active acne',
      'Open wounds',
      'Sunburn',
      'Severe couperose',
      'Active herpes lesions'
    ]
  },
  th: {
    id: 'hydradermabrasion',
    deviceSetup: {
      mode: 'ไฮดร้า-พีลลิ่ง',
      attachments: ['หัวไฮดร้า', 'หัวพีลลิ่ง'],
      settings: {
        intensity: 'ปานกลาง',
        suction: 'ปรับตามสภาพผิว',
        waterFlow: 'ปานกลาง'
      }
    },
    preparation: [
      'ระบุประเภทผิว',
      'เตรียมน้ำยาทำความสะอาด',
      'เตรียมผ้าเช็ดตัวและพื้นที่ทำงาน',
      'สวมอุปกรณ์ป้องกัน',
      'ตรวจสอบการทำงานของเครื่อง'
    ],
    instructions: [
      {
        step: 1,
        action: 'ทำความสะอาดเบื้องต้น',
        duration: '5 นาที',
        technique: 'ทำความสะอาดเบาๆ',
        pressure: 'light',
        direction: 'จากด้านในออกด้านนอก'
      },
      {
        step: 2,
        action: 'ไฮดร้า-พีลลิ่ง',
        duration: '15-20 นาที',
        technique: 'การรักษาอย่างเป็นระบบ',
        pressure: 'medium',
        direction: 'ตามทิศทางการไหลของน้ำเหลือง'
      },
      {
        step: 3,
        action: 'ทำความสะอาดลึก',
        duration: '10 นาที',
        technique: 'การดูดด้วยสุญญากาศ',
        pressure: 'medium',
        direction: 'เน้นบริเวณที่มีปัญหา'
      }
    ],
    productApplication: [
      {
        product: 'น้ำยาทำความสะอาด',
        amount: '30มล.',
        method: 'ในเครื่อง'
      },
      {
        product: 'เซรั่มไฮยาลูรอน',
        amount: '2-3มล.',
        method: 'หลังการรักษา'
      },
      {
        product: 'มาส์กบำรุงผิว',
        amount: '5มล.',
        method: 'ขั้นตอนสุดท้าย'
      }
    ],
    aftercare: [
      'ทาครีมบำรุง',
      'ทาครีมกันแดด',
      'แนะนำการดูแลผิว',
      'นัดหมายครั้งต่อไป',
      'คำแนะนำการดื่มน้ำ: ดื่มน้ำให้มาก'
    ],
    contraindications: [
      'สิวอักเสบ',
      'แผลเปิด',
      'ผิวไหม้แดด',
      'เส้นเลือดฝอยอักเสบรุนแรง',
      'เริมกำเริบ'
    ]
  }
};