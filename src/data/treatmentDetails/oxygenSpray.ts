import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const oxygenSpray: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'oxygenspray',
    deviceSetup: {
      mode: 'Sauerstoff-Infusion',
      attachments: ['Spray-Düse', 'Serum-Adapter'],
      settings: {
        oxygenFlow: 'Mittel',
        pressure: 'Angepasst'
      }
    },
    preparation: [
      'Haut gründlich reinigen',
      'Serum vorbereiten',
      'Sauerstofffluss testen',
      'Kundin über Kälteempfindung informieren'
    ],
    instructions: [
      {
        step: 1,
        action: 'Serum-Applikation',
        duration: '5 Minuten',
        technique: 'Gleichmäßiges Sprühen',
        pressure: 'light',
        direction: 'Abschnittweise'
      },
      {
        step: 2,
        action: 'Sauerstoff-Infusion',
        duration: '15 Minuten',
        technique: 'Kreisende Bewegungen',
        pressure: 'medium',
        direction: 'Von innen nach außen'
      }
    ],
    productApplication: [
      {
        product: 'Hyaluron-Serum',
        amount: '3-4ml',
        method: 'Im Spray-System'
      },
      {
        product: 'Beruhigende Essenz',
        amount: '2ml',
        method: 'Nach der Behandlung'
      }
    ],
    aftercare: [
      'Feuchtigkeitsmaske auftragen',
      'Sonnenschutz verwenden',
      'Viel Wasser trinken empfehlen',
      '24h kein Make-up'
    ],
    contraindications: [
      'Akute Hautinfektionen',
      'Offene Wunden',
      'Schwere Akne',
      'Kürzliche Laserbehandlung'
    ]
  },
  en: {
    id: 'oxygenspray',
    deviceSetup: {
      mode: 'Oxygen Infusion',
      attachments: ['Spray nozzle', 'Serum adapter'],
      settings: {
        oxygenFlow: 'Medium',
        pressure: 'Adjusted'
      }
    },
    preparation: [
      'Thoroughly cleanse skin',
      'Prepare serum',
      'Test oxygen flow',
      'Inform client about cold sensation'
    ],
    instructions: [
      {
        step: 1,
        action: 'Serum application',
        duration: '5 minutes',
        technique: 'Even spraying',
        pressure: 'light',
        direction: 'Section by section'
      },
      {
        step: 2,
        action: 'Oxygen infusion',
        duration: '15 minutes',
        technique: 'Circular motions',
        pressure: 'medium',
        direction: 'Inside to outside'
      }
    ],
    productApplication: [
      {
        product: 'Hyaluronic serum',
        amount: '3-4ml',
        method: 'In spray system'
      },
      {
        product: 'Calming essence',
        amount: '2ml',
        method: 'After treatment'
      }
    ],
    aftercare: [
      'Apply moisturizing mask',
      'Use sunscreen',
      'Recommend drinking plenty of water',
      'No makeup for 24h'
    ],
    contraindications: [
      'Acute skin infections',
      'Open wounds',
      'Severe acne',
      'Recent laser treatment'
    ]
  },
  th: {
    id: 'oxygenspray',
    deviceSetup: {
      mode: 'การนำส่งออกซิเจน',
      attachments: ['หัวสเปรย์', 'อะแดปเตอร์เซรั่ม'],
      settings: {
        oxygenFlow: 'ปานกลาง',
        pressure: 'ปรับระดับ'
      }
    },
    preparation: [
      'ทำความสะอาดผิวให้ทั่วถึง',
      'เตรียมเซรั่ม',
      'ทดสอบการไหลของออกซิเจน',
      'แจ้งลูกค้าเกี่ยวกับความรู้สึกเย็น'
    ],
    instructions: [
      {
        step: 1,
        action: 'การทาเซรั่ม',
        duration: '5 นาที',
        technique: 'สเปรย์ให้ทั่ว',
        pressure: 'light',
        direction: 'ทีละส่วน'
      },
      {
        step: 2,
        action: 'การนำส่งออกซิเจน',
        duration: '15 นาที',
        technique: 'เคลื่อนไหวเป็นวงกลม',
        pressure: 'medium',
        direction: 'จากด้านในออกด้านนอก'
      }
    ],
    productApplication: [
      {
        product: 'เซรั่มไฮยาลูรอน',
        amount: '3-4มล.',
        method: 'ในระบบสเปรย์'
      },
      {
        product: 'เอสเซนส์บำรุงผิว',
        amount: '2มล.',
        method: 'หลังการรักษา'
      }
    ],
    aftercare: [
      'ทามาส์กบำรุงผิว',
      'ใช้ครีมกันแดด',
      'แนะนำให้ดื่มน้ำมากๆ',
      'งดแต่งหน้า 24 ชั่วโมง'
    ],
    contraindications: [
      'การติดเชื้อที่ผิวหนังเฉียบพลัน',
      'แผลเปิด',
      'สิวรุนแรง',
      'เพิ่งรับการรักษาด้วยเลเซอร์'
    ]
  }
};