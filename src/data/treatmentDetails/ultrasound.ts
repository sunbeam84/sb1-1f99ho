import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const ultrasound: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'ultrasound',
    deviceSetup: {
      mode: 'Ultraschall-Therapie',
      attachments: ['Ultraschallkopf', 'Spezial-Augenaufsatz'],
      settings: {
        frequency: '1 MHz',
        intensity: 'Mittel'
      }
    },
    preparation: [
      'Ultraschallgel vorbereiten',
      'Haut reinigen und trocknen',
      'Behandlungsbereich markieren',
      'Schutzfolie aufbringen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Gel-Auftrag',
        duration: '2 Minuten',
        technique: 'Gleichmäßig verteilen',
        pressure: 'light',
        direction: 'Gesamtes Gesicht'
      },
      {
        step: 2,
        action: 'Ultraschall-Behandlung',
        duration: '15-20 Minuten',
        technique: 'Gleitende Bewegungen',
        pressure: 'medium',
        direction: 'Aufwärts und auswärts'
      },
      {
        step: 3,
        action: 'Augenbereich',
        duration: '5-7 Minuten',
        technique: 'Sanfte Kreisbewegungen',
        pressure: 'light',
        direction: 'Von innen nach außen'
      }
    ],
    productApplication: [
      {
        product: 'Ultraschallgel',
        amount: '30ml',
        method: 'Während der Behandlung'
      },
      {
        product: 'Lifting-Serum',
        amount: '2ml',
        method: 'Nach der Behandlung'
      }
    ],
    aftercare: [
      'Überschüssiges Gel entfernen',
      'Straffende Creme auftragen',
      'Sonnenschutz verwenden',
      'Viel Wasser trinken'
    ],
    contraindications: [
      'Metallimplantate im Gesicht',
      'Schwangerschaft',
      'Herzschrittmacher',
      'Akute Entzündungen'
    ]
  },
  en: {
    id: 'ultrasound',
    deviceSetup: {
      mode: 'Ultrasound Therapy',
      attachments: ['Ultrasound head', 'Special eye attachment'],
      settings: {
        frequency: '1 MHz',
        intensity: 'Medium'
      }
    },
    preparation: [
      'Prepare ultrasound gel',
      'Clean and dry skin',
      'Mark treatment area',
      'Apply protective film'
    ],
    instructions: [
      {
        step: 1,
        action: 'Gel application',
        duration: '2 minutes',
        technique: 'Even distribution',
        pressure: 'light',
        direction: 'Entire face'
      },
      {
        step: 2,
        action: 'Ultrasound treatment',
        duration: '15-20 minutes',
        technique: 'Gliding movements',
        pressure: 'medium',
        direction: 'Upward and outward'
      },
      {
        step: 3,
        action: 'Eye area',
        duration: '5-7 minutes',
        technique: 'Gentle circular motions',
        pressure: 'light',
        direction: 'Inside to outside'
      }
    ],
    productApplication: [
      {
        product: 'Ultrasound gel',
        amount: '30ml',
        method: 'During treatment'
      },
      {
        product: 'Lifting serum',
        amount: '2ml',
        method: 'After treatment'
      }
    ],
    aftercare: [
      'Remove excess gel',
      'Apply firming cream',
      'Use sunscreen',
      'Drink plenty of water'
    ],
    contraindications: [
      'Facial metal implants',
      'Pregnancy',
      'Pacemaker',
      'Acute inflammation'
    ]
  },
  th: {
    id: 'ultrasound',
    deviceSetup: {
      mode: 'การรักษาด้วยอัลตร้าซาวด์',
      attachments: ['หัวอัลตร้าซาวด์', 'หัวพิเศษสำหรับรอบดวงตา'],
      settings: {
        frequency: '1 MHz',
        intensity: 'ปานกลาง'
      }
    },
    preparation: [
      'เตรียมเจลอัลตร้าซาวด์',
      'ทำความสะอาดและเช็ดผิวให้แห้ง',
      'ทำเครื่องหมายบริเวณที่จะรักษา',
      'ติดแผ่นฟิล์มป้องกัน'
    ],
    instructions: [
      {
        step: 1,
        action: 'ทาเจล',
        duration: '2 นาที',
        technique: 'ทาให้ทั่ว',
        pressure: 'light',
        direction: 'ทั่วใบหน้า'
      },
      {
        step: 2,
        action: 'การรักษาด้วยอัลตร้าซาวด์',
        duration: '15-20 นาที',
        technique: 'เคลื่อนไหวแบบรูด',
        pressure: 'medium',
        direction: 'ขึ้นและออกด้านนอก'
      },
      {
        step: 3,
        action: 'บริเวณรอบดวงตา',
        duration: '5-7 นาที',
        technique: 'วนเบาๆ',
        pressure: 'light',
        direction: 'จากด้านในออกด้านนอก'
      }
    ],
    productApplication: [
      {
        product: 'เจลอัลตร้าซาวด์',
        amount: '30มล.',
        method: 'ระหว่างการรักษา'
      },
      {
        product: 'เซรั่มยกกระชับ',
        amount: '2มล.',
        method: 'หลังการรักษา'
      }
    ],
    aftercare: [
      'เช็ดเจลส่วนเกินออก',
      'ทาครีมกระชับผิว',
      'ใช้ครีมกันแดด',
      'ดื่มน้ำมากๆ'
    ],
    contraindications: [
      'มีโลหะฝังในใบหน้า',
      'ตั้งครรภ์',
      'ใส่เครื่องกระตุ้นหัวใจ',
      'มีการอักเสบเฉียบพลัน'
    ]
  }
};