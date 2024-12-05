import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const skinScrubber: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'skinscrubber',
    deviceSetup: {
      mode: 'Ultraschall-Peeling',
      attachments: ['Spatula-Aufsatz'],
      settings: {
        frequency: 'Standard',
        intensity: 'Mittel'
      }
    },
    preparation: [
      'Haut anfeuchten',
      'Reinigungslösung vorbereiten',
      'Handtücher bereitlegen',
      'Schutzausrüstung anlegen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Grundreinigung',
        duration: '5 Minuten',
        technique: 'Flache Haltung',
        pressure: 'light',
        direction: 'Mit Lymphfluss'
      },
      {
        step: 2,
        action: 'Tiefenreinigung',
        duration: '15 Minuten',
        technique: '45-Grad-Winkel',
        pressure: 'medium',
        direction: 'Aufwärts'
      }
    ],
    productApplication: [
      {
        product: 'Reinigungsgel',
        amount: '15ml',
        method: 'Während der Behandlung'
      },
      {
        product: 'Feuchtigkeitsserum',
        amount: '2ml',
        method: 'Nach der Reinigung'
      }
    ],
    aftercare: [
      'Toner auftragen',
      'Feuchtigkeitspflege verwenden',
      'Sonnenschutz auftragen',
      'Makeup-Pause empfehlen'
    ],
    contraindications: [
      'Aktive Akne',
      'Rosacea',
      'Offene Wunden',
      'Sehr empfindliche Haut'
    ]
  },
  en: {
    id: 'skinscrubber',
    deviceSetup: {
      mode: 'Ultrasonic peeling',
      attachments: ['Spatula attachment'],
      settings: {
        frequency: 'Standard',
        intensity: 'Medium'
      }
    },
    preparation: [
      'Moisten skin',
      'Prepare cleansing solution',
      'Prepare towels',
      'Put on protective equipment'
    ],
    instructions: [
      {
        step: 1,
        action: 'Basic cleansing',
        duration: '5 minutes',
        technique: 'Flat position',
        pressure: 'light',
        direction: 'With lymph flow'
      },
      {
        step: 2,
        action: 'Deep cleansing',
        duration: '15 minutes',
        technique: '45-degree angle',
        pressure: 'medium',
        direction: 'Upward'
      }
    ],
    productApplication: [
      {
        product: 'Cleansing gel',
        amount: '15ml',
        method: 'During treatment'
      },
      {
        product: 'Moisturizing serum',
        amount: '2ml',
        method: 'After cleansing'
      }
    ],
    aftercare: [
      'Apply toner',
      'Use moisturizer',
      'Apply sunscreen',
      'Recommend makeup break'
    ],
    contraindications: [
      'Active acne',
      'Rosacea',
      'Open wounds',
      'Very sensitive skin'
    ]
  },
  th: {
    id: 'skinscrubber',
    deviceSetup: {
      mode: 'การขัดผิวด้วยอัลตร้าโซนิก',
      attachments: ['หัวสแปตตูล่า'],
      settings: {
        frequency: 'มาตรฐาน',
        intensity: 'ปานกลาง'
      }
    },
    preparation: [
      'ทำให้ผิวชุ่มชื้น',
      'เตรียมน้ำยาทำความสะอาด',
      'เตรียมผ้าขนหนู',
      'สวมอุปกรณ์ป้องกัน'
    ],
    instructions: [
      {
        step: 1,
        action: 'ทำความสะอาดพื้นฐาน',
        duration: '5 นาที',
        technique: 'วางราบ',
        pressure: 'light',
        direction: 'ตามการไหลของน้ำเหลือง'
      },
      {
        step: 2,
        action: 'ทำความสะอาดลึก',
        duration: '15 นาที',
        technique: 'มุม 45 องศา',
        pressure: 'medium',
        direction: 'ขึ้นบน'
      }
    ],
    productApplication: [
      {
        product: 'เจลทำความสะอาด',
        amount: '15มล.',
        method: 'ระหว่างการรักษา'
      },
      {
        product: 'เซรั่มบำรุงความชุ่มชื้น',
        amount: '2มล.',
        method: 'หลังทำความสะอาด'
      }
    ],
    aftercare: [
      'ใช้โทนเนอร์',
      'ใช้ครีมบำรุง',
      'ทาครีมกันแดด',
      'แนะนำให้งดการแต่งหน้า'
    ],
    contraindications: [
      'สิวอักเสบ',
      'โรคผิวหนังโรซาเซีย',
      'แผลเปิด',
      'ผิวที่บอบบางมาก'
    ]
  }
};