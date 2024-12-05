import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const coldHammer: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'coldhammer',
    deviceSetup: {
      mode: 'Kryotherapie',
      attachments: ['Kältehammer'],
      settings: {
        temperature: '8-12°C',
        intensity: 'Anpassbar'
      }
    },
    preparation: [
      'Gerät vorkühlen',
      'Haut reinigen',
      'Toner auftragen',
      'Handtücher bereitlegen'
    ],
    instructions: [
      {
        step: 1,
        action: 'Temperaturtest',
        duration: '1 Minute',
        technique: 'Punktuell testen',
        pressure: 'light',
        direction: 'Kieferbereich'
      },
      {
        step: 2,
        action: 'Kältebehandlung',
        duration: '10-15 Minuten',
        technique: 'Gleitende Bewegungen',
        pressure: 'medium',
        direction: 'Von innen nach außen'
      }
    ],
    productApplication: [
      {
        product: 'Kühlender Toner',
        amount: '5ml',
        method: 'Vor der Behandlung'
      },
      {
        product: 'Beruhigendes Serum',
        amount: '2ml',
        method: 'Während der Behandlung'
      }
    ],
    aftercare: [
      'Feuchtigkeitspflege auftragen',
      'Sonnenschutz verwenden',
      'Hautreaktion beobachten',
      'Kalte Kompresse bei Bedarf'
    ],
    contraindications: [
      'Kälteunverträglichkeit',
      'Durchblutungsstörungen',
      'Gefäßerkrankungen',
      'Sehr dünne Haut'
    ]
  },
  en: {
    id: 'coldhammer',
    deviceSetup: {
      mode: 'Cryotherapy',
      attachments: ['Cold hammer'],
      settings: {
        temperature: '8-12°C',
        intensity: 'Adjustable'
      }
    },
    preparation: [
      'Pre-cool device',
      'Cleanse skin',
      'Apply toner',
      'Prepare towels'
    ],
    instructions: [
      {
        step: 1,
        action: 'Temperature test',
        duration: '1 minute',
        technique: 'Spot testing',
        pressure: 'light',
        direction: 'Jaw area'
      },
      {
        step: 2,
        action: 'Cold treatment',
        duration: '10-15 minutes',
        technique: 'Gliding movements',
        pressure: 'medium',
        direction: 'Inside to outside'
      }
    ],
    productApplication: [
      {
        product: 'Cooling toner',
        amount: '5ml',
        method: 'Before treatment'
      },
      {
        product: 'Calming serum',
        amount: '2ml',
        method: 'During treatment'
      }
    ],
    aftercare: [
      'Apply moisturizer',
      'Use sunscreen',
      'Monitor skin reaction',
      'Cold compress if needed'
    ],
    contraindications: [
      'Cold intolerance',
      'Circulation problems',
      'Vascular diseases',
      'Very thin skin'
    ]
  },
  th: {
    id: 'coldhammer',
    deviceSetup: {
      mode: 'การบำบัดด้วยความเย็น',
      attachments: ['ค้อนเย็น'],
      settings: {
        temperature: '8-12°C',
        intensity: 'ปรับระดับได้'
      }
    },
    preparation: [
      'ทำให้เครื่องเย็นล่วงหน้า',
      'ทำความสะอาดผิว',
      'ใช้โทนเนอร์',
      'เตรียมผ้าขนหนู'
    ],
    instructions: [
      {
        step: 1,
        action: 'ทดสอบอุณหภูมิ',
        duration: '1 นาที',
        technique: 'ทดสอบเฉพาะจุด',
        pressure: 'light',
        direction: 'บริเวณกราม'
      },
      {
        step: 2,
        action: 'การรักษาด้วยความเย็น',
        duration: '10-15 นาที',
        technique: 'เคลื่อนไหวแบบรูด',
        pressure: 'medium',
        direction: 'จากด้านในออกด้านนอก'
      }
    ],
    productApplication: [
      {
        product: 'โทนเนอร์เย็น',
        amount: '5มล.',
        method: 'ก่อนการรักษา'
      },
      {
        product: 'เซรั่มบำรุงผิว',
        amount: '2มล.',
        method: 'ระหว่างการรักษา'
      }
    ],
    aftercare: [
      'ทาครีมบำรุง',
      'ใช้ครีมกันแดด',
      'สังเกตการตอบสนองของผิว',
      'ประคบเย็นถ้าจำเป็น'
    ],
    contraindications: [
      'แพ้ความเย็น',
      'มีปัญหาการไหลเวียนโลหิต',
      'โรคหลอดเลือด',
      'ผิวบางมาก'
    ]
  }
};