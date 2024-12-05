import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const bubblePen: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'bubblepen',
    deviceSetup: {
      mode: 'Bubble-Cleansing',
      attachments: ['Bubble-Pen Aufsatz'],
      settings: {
        bubbleIntensity: 'Mittel',
        oxygenFlow: 'Normal'
      }
    },
    preparation: [
      'Gesicht gründlich reinigen',
      'Bubble-Lösung vorbereiten',
      'Kundin über Behandlungsablauf informieren',
      'Augenpartie schützen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Bubble-Aktivierung',
        duration: '3-5 Minuten',
        technique: 'Gleichmäßiges Auftragen',
        pressure: 'light',
        direction: 'Gesamtes Gesicht'
      },
      {
        step: 2,
        action: 'Porenreinigung',
        duration: '10-15 Minuten',
        technique: 'Kreisende Bewegungen',
        pressure: 'medium',
        direction: 'T-Zone und Problemzonen'
      },
      {
        step: 3,
        action: 'Sauerstoff-Infusion',
        duration: '5-7 Minuten',
        technique: 'Punktuelle Behandlung',
        pressure: 'light',
        direction: 'Problemzonen'
      }
    ],
    productApplication: [
      {
        product: 'Spezial-Reinigungsschaum',
        amount: '20ml',
        method: 'Im Bubble-Pen'
      },
      {
        product: 'Porenverfeinerungsserum',
        amount: '2ml',
        method: 'Nach der Behandlung'
      }
    ],
    aftercare: [
      'Toner auftragen',
      'Feuchtigkeitspflege verwenden',
      'Sonnenschutz auftragen',
      'Makeup-Pause empfehlen'
    ],
    contraindications: [
      'Aktive Entzündungen',
      'Sehr empfindliche Haut',
      'Rosacea',
      'Frische Verletzungen'
    ]
  },
  en: {
    id: 'bubblepen',
    deviceSetup: {
      mode: 'Bubble-Cleansing',
      attachments: ['Bubble-Pen attachment'],
      settings: {
        bubbleIntensity: 'Medium',
        oxygenFlow: 'Normal'
      }
    },
    preparation: [
      'Thoroughly cleanse face',
      'Prepare bubble solution',
      'Inform client about treatment process',
      'Protect eye area'
    ],
    instructions: [
      {
        step: 1,
        action: 'Bubble activation',
        duration: '3-5 minutes',
        technique: 'Even application',
        pressure: 'light',
        direction: 'Entire face'
      },
      {
        step: 2,
        action: 'Pore cleansing',
        duration: '10-15 minutes',
        technique: 'Circular motions',
        pressure: 'medium',
        direction: 'T-zone and problem areas'
      },
      {
        step: 3,
        action: 'Oxygen infusion',
        duration: '5-7 minutes',
        technique: 'Spot treatment',
        pressure: 'light',
        direction: 'Problem areas'
      }
    ],
    productApplication: [
      {
        product: 'Special cleansing foam',
        amount: '20ml',
        method: 'In bubble pen'
      },
      {
        product: 'Pore refining serum',
        amount: '2ml',
        method: 'After treatment'
      }
    ],
    aftercare: [
      'Apply toner',
      'Use moisturizer',
      'Apply sunscreen',
      'Recommend makeup break'
    ],
    contraindications: [
      'Active inflammation',
      'Very sensitive skin',
      'Rosacea',
      'Fresh injuries'
    ]
  },
  th: {
    id: 'bubblepen',
    deviceSetup: {
      mode: 'การทำความสะอาดด้วยฟอง',
      attachments: ['หัวทำความสะอาดด้วยฟอง'],
      settings: {
        bubbleIntensity: 'ปานกลาง',
        oxygenFlow: 'ปกติ'
      }
    },
    preparation: [
      'ทำความสะอาดใบหน้าอย่างทั่วถึง',
      'เตรียมน้ำยาทำฟอง',
      'แจ้งลูกค้าเกี่ยวกับขั้นตอนการรักษา',
      'ป้องกันบริเวณรอบดวงตา'
    ],
    instructions: [
      {
        step: 1,
        action: 'การกระตุ้นฟอง',
        duration: '3-5 นาที',
        technique: 'ทาให้ทั่ว',
        pressure: 'light',
        direction: 'ทั่วใบหน้า'
      },
      {
        step: 2,
        action: 'ทำความสะอาดรูขุมขน',
        duration: '10-15 นาที',
        technique: 'เคลื่อนไหวเป็นวงกลม',
        pressure: 'medium',
        direction: 'โซนที และบริเวณที่มีปัญหา'
      },
      {
        step: 3,
        action: 'การนำส่งออกซิเจน',
        duration: '5-7 นาที',
        technique: 'การรักษาเฉพาะจุด',
        pressure: 'light',
        direction: 'บริเวณที่มีปัญหา'
      }
    ],
    productApplication: [
      {
        product: 'โฟมทำความสะอาดพิเศษ',
        amount: '20มล.',
        method: 'ในปากกาทำฟอง'
      },
      {
        product: 'เซรั่มกระชับรูขุมขน',
        amount: '2มล.',
        method: 'หลังการรักษา'
      }
    ],
    aftercare: [
      'ใช้โทนเนอร์',
      'ใช้ครีมบำรุง',
      'ทาครีมกันแดด',
      'แนะนำให้งดการแต่งหน้า'
    ],
    contraindications: [
      'การอักเสบที่กำลังเป็นอยู่',
      'ผิวที่บอบบางมาก',
      'โรคผิวหนังโรซาเซีย',
      'บาดแผลสด'
    ]
  }
};