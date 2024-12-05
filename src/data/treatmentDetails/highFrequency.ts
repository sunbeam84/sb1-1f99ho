import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const highFrequency: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'highfrequency',
    deviceSetup: {
      mode: 'Hochfrequenz',
      attachments: ['Pilzförmiger Aufsatz', 'Punktelektrode'],
      settings: {
        intensity: 'Niedrig bis Mittel',
        duration: 'Max. 10 Min. pro Zone'
      }
    },
    preparation: [
      'Haut gründlich reinigen',
      'Trocken tupfen',
      'Problemzonen markieren',
      'Schutzbrille aufsetzen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Indirekte Methode',
        duration: '5-7 Minuten',
        technique: 'Gleitende Bewegungen',
        pressure: 'light',
        direction: 'Kreisförmig'
      },
      {
        step: 2,
        action: 'Direkte Methode',
        duration: '3-5 Minuten',
        technique: 'Punktuelle Behandlung',
        pressure: 'medium',
        direction: 'Auf Akne/Unreinheiten'
      }
    ],
    productApplication: [
      {
        product: 'Antibakterielles Gel',
        amount: '2ml',
        method: 'Vor der Behandlung'
      },
      {
        product: 'Beruhigendes Serum',
        amount: '2ml',
        method: 'Nach der Behandlung'
      }
    ],
    aftercare: [
      'Feuchtigkeitspflege auftragen',
      'Sonnenschutz verwenden',
      'Keine Säuren 24h',
      'Viel Wasser trinken'
    ],
    contraindications: [
      'Metallimplantate',
      'Herzschrittmacher',
      'Schwangerschaft',
      'Epilepsie',
      'Akute Entzündungen'
    ]
  },
  en: {
    id: 'highfrequency',
    deviceSetup: {
      mode: 'High frequency',
      attachments: ['Mushroom electrode', 'Point electrode'],
      settings: {
        intensity: 'Low to medium',
        duration: 'Max. 10 min per area'
      }
    },
    preparation: [
      'Thoroughly cleanse skin',
      'Pat dry',
      'Mark problem areas',
      'Put on protective eyewear'
    ],
    instructions: [
      {
        step: 1,
        action: 'Indirect method',
        duration: '5-7 minutes',
        technique: 'Gliding movements',
        pressure: 'light',
        direction: 'Circular'
      },
      {
        step: 2,
        action: 'Direct method',
        duration: '3-5 minutes',
        technique: 'Spot treatment',
        pressure: 'medium',
        direction: 'On acne/impurities'
      }
    ],
    productApplication: [
      {
        product: 'Antibacterial gel',
        amount: '2ml',
        method: 'Before treatment'
      },
      {
        product: 'Calming serum',
        amount: '2ml',
        method: 'After treatment'
      }
    ],
    aftercare: [
      'Apply moisturizer',
      'Use sunscreen',
      'No acids for 24h',
      'Drink plenty of water'
    ],
    contraindications: [
      'Metal implants',
      'Pacemaker',
      'Pregnancy',
      'Epilepsy',
      'Acute inflammation'
    ]
  },
  th: {
    id: 'highfrequency',
    deviceSetup: {
      mode: 'ความถี่สูง',
      attachments: ['หัวเห็ด', 'หัวจุด'],
      settings: {
        intensity: 'ต่ำถึงปานกลาง',
        duration: 'สูงสุด 10 นาทีต่อบริเวณ'
      }
    },
    preparation: [
      'ทำความสะอาดผิวให้ทั่วถึง',
      'ซับให้แห้ง',
      'ทำเครื่องหมายบริเวณที่มีปัญหา',
      'สวมแว่นป้องกัน'
    ],
    instructions: [
      {
        step: 1,
        action: 'วิธีทางอ้อม',
        duration: '5-7 นาที',
        technique: 'เคลื่อนไหวแบบรูด',
        pressure: 'light',
        direction: 'วนเป็นวงกลม'
      },
      {
        step: 2,
        action: 'วิธีทางตรง',
        duration: '3-5 นาที',
        technique: 'รักษาเฉพาะจุด',
        pressure: 'medium',
        direction: 'บนสิว/จุดบกพร่อง'
      }
    ],
    productApplication: [
      {
        product: 'เจลต้านแบคทีเรีย',
        amount: '2มล.',
        method: 'ก่อนการรักษา'
      },
      {
        product: 'เซรั่มบำรุงผิว',
        amount: '2มล.',
        method: 'หลังการรักษา'
      }
    ],
    aftercare: [
      'ทาครีมบำรุง',
      'ใช้ครีมกันแดด',
      'งดใช้กรด 24 ชั่วโมง',
      'ดื่มน้ำมากๆ'
    ],
    contraindications: [
      'มีโลหะฝังในร่างกาย',
      'ใส่เครื่องกระตุ้นหัวใจ',
      'ตั้งครรภ์',
      'โรคลมชัก',
      'การอักเสบเฉียบพลัน'
    ]
  }
};