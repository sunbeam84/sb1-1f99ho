import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const microNeedles: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'microneedles',
    deviceSetup: {
      mode: 'Mikroneedling',
      attachments: ['Sterile Nadeln', 'Schutzkappe'],
      settings: {
        needleDepth: '0.5-1.5mm',
        speed: 'Mittel'
      }
    },
    preparation: [
      'Desinfektion der Haut',
      'Betäubungscreme auftragen',
      'Einwirkzeit abwarten',
      'Behandlungsbereich markieren'
    ],
    instructions: [
      {
        step: 1,
        action: 'Oberflächliche Behandlung',
        duration: '10 Minuten',
        technique: 'Gleichmäßige Bewegungen',
        pressure: 'light',
        direction: 'Systematisch vorgehen'
      },
      {
        step: 2,
        action: 'Problemzonen',
        duration: '15 Minuten',
        technique: 'Kreuzende Bewegungen',
        pressure: 'medium',
        direction: 'Mehrere Durchgänge'
      }
    ],
    productApplication: [
      {
        product: 'Hyaluronserum steril',
        amount: '4ml',
        method: 'Während der Behandlung'
      },
      {
        product: 'Beruhigende Maske',
        amount: '10ml',
        method: 'Nach der Behandlung'
      }
    ],
    aftercare: [
      'Kühlende Kompresse',
      'Sonnenschutz SPF 50',
      'Keine Makeup 24h',
      'Pflegeprodukte nach Plan'
    ],
    contraindications: [
      'Aktive Akne',
      'Offene Wunden',
      'Herpes simplex',
      'Hautinfektionen',
      'Blutverdünnung'
    ]
  },
  en: {
    id: 'microneedles',
    deviceSetup: {
      mode: 'Microneedling',
      attachments: ['Sterile needles', 'Protection cap'],
      settings: {
        needleDepth: '0.5-1.5mm',
        speed: 'Medium'
      }
    },
    preparation: [
      'Disinfect skin',
      'Apply numbing cream',
      'Wait for onset time',
      'Mark treatment area'
    ],
    instructions: [
      {
        step: 1,
        action: 'Surface treatment',
        duration: '10 minutes',
        technique: 'Even movements',
        pressure: 'light',
        direction: 'Systematic approach'
      },
      {
        step: 2,
        action: 'Problem areas',
        duration: '15 minutes',
        technique: 'Cross-hatching',
        pressure: 'medium',
        direction: 'Multiple passes'
      }
    ],
    productApplication: [
      {
        product: 'Sterile hyaluronic serum',
        amount: '4ml',
        method: 'During treatment'
      },
      {
        product: 'Calming mask',
        amount: '10ml',
        method: 'After treatment'
      }
    ],
    aftercare: [
      'Cooling compress',
      'Sunscreen SPF 50',
      'No makeup for 24h',
      'Follow skincare plan'
    ],
    contraindications: [
      'Active acne',
      'Open wounds',
      'Herpes simplex',
      'Skin infections',
      'Blood thinners'
    ]
  },
  th: {
    id: 'microneedles',
    deviceSetup: {
      mode: 'ไมโครนีดเดิ้ล',
      attachments: ['เข็มปลอดเชื้อ', 'ฝาครอบป้องกัน'],
      settings: {
        needleDepth: '0.5-1.5มม.',
        speed: 'ปานกลาง'
      }
    },
    preparation: [
      'ฆ่าเชื้อผิว',
      'ทายาชา',
      'รอให้ยาออกฤทธิ์',
      'ทำเครื่องหมายบริเวณที่จะรักษา'
    ],
    instructions: [
      {
        step: 1,
        action: 'การรักษาผิวชั้นบน',
        duration: '10 นาที',
        technique: 'เคลื่อนไหวสม่ำเสมอ',
        pressure: 'light',
        direction: 'เป็นระบบ'
      },
      {
        step: 2,
        action: 'บริเวณที่มีปัญหา',
        duration: '15 นาที',
        technique: 'เคลื่อนไหวแบบตาราง',
        pressure: 'medium',
        direction: 'หลายรอบ'
      }
    ],
    productApplication: [
      {
        product: 'เซรั่มไฮยาลูรอนปลอดเชื้อ',
        amount: '4มล.',
        method: 'ระหว่างการรักษา'
      },
      {
        product: 'มาส์กบำรุงผิว',
        amount: '10มล.',
        method: 'หลังการรักษา'
      }
    ],
    aftercare: [
      'ประคบเย็น',
      'ครีมกันแดด SPF 50',
      'งดแต่งหน้า 24 ชั่วโมง',
      'ทำตามแผนการดูแลผิว'
    ],
    contraindications: [
      'สิวอักเสบ',
      'แผลเปิด',
      'เริม',
      'การติดเชื้อที่ผิวหนัง',
      'ยาละลายลิ่มเลือด'
    ]
  }
};