import { DetailedTreatmentStep } from '../../types/treatment';
import { Language } from '../../types/language';

export const skinAnalysis: Record<Language, DetailedTreatmentStep> = {
  de: {
    id: 'skinanalysis',
    deviceSetup: {
      mode: 'Analyse',
      attachments: ['Analysekopf'],
      settings: {
        intensity: 'Standard',
        mode: 'Full Scan'
      }
    },
    preparation: [
      'Haut reinigen',
      'Gerät kalibrieren',
      'Messbereich vorbereiten',
      'Kunden positionieren'
    ],
    instructions: [
      {
        step: 1,
        action: 'Grundanalyse',
        duration: '5-7 Minuten',
        technique: 'Systematisches Scannen',
        pressure: 'light',
        direction: 'Gesichtszonen'
      },
      {
        step: 2,
        action: 'Detailanalyse',
        duration: '3-5 Minuten',
        technique: 'Punktuelle Messung',
        pressure: 'light',
        direction: 'Problemzonen'
      }
    ],
    productApplication: [
      {
        product: 'Reinigungslotion',
        amount: '2ml',
        method: 'Vor der Analyse'
      }
    ],
    aftercare: [
      'Dokumentation erstellen',
      'Behandlungsplan besprechen',
      'Pflegeempfehlungen geben'
    ],
    contraindications: [
      'Keine spezifischen',
      'Bei Hautirritationen vorsichtig'
    ]
  },
  en: {
    id: 'skinanalysis',
    deviceSetup: {
      mode: 'Analysis',
      attachments: ['Analysis head'],
      settings: {
        intensity: 'Standard',
        mode: 'Full Scan'
      }
    },
    preparation: [
      'Clean skin',
      'Calibrate device',
      'Prepare measurement area',
      'Position client'
    ],
    instructions: [
      {
        step: 1,
        action: 'Basic analysis',
        duration: '5-7 minutes',
        technique: 'Systematic scanning',
        pressure: 'light',
        direction: 'Facial zones'
      },
      {
        step: 2,
        action: 'Detailed analysis',
        duration: '3-5 minutes',
        technique: 'Spot measurement',
        pressure: 'light',
        direction: 'Problem areas'
      }
    ],
    productApplication: [
      {
        product: 'Cleansing lotion',
        amount: '2ml',
        method: 'Before analysis'
      }
    ],
    aftercare: [
      'Create documentation',
      'Discuss treatment plan',
      'Provide care recommendations'
    ],
    contraindications: [
      'None specific',
      'Careful with skin irritations'
    ]
  },
  th: {
    id: 'skinanalysis',
    deviceSetup: {
      mode: 'การวิเคราะห์',
      attachments: ['หัววิเคราะห์'],
      settings: {
        intensity: 'มาตรฐาน',
        mode: 'สแกนเต็มรูปแบบ'
      }
    },
    preparation: [
      'ทำความสะอาดผิว',
      'ปรับเทียบเครื่อง',
      'เตรียมพื้นที่วัด',
      'จัดตำแหน่งลูกค้า'
    ],
    instructions: [
      {
        step: 1,
        action: 'วิเคราะห์พื้นฐาน',
        duration: '5-7 นาที',
        technique: 'สแกนอย่างเป็นระบบ',
        pressure: 'light',
        direction: 'โซนใบหน้า'
      },
      {
        step: 2,
        action: 'วิเคราะห์เชิงลึก',
        duration: '3-5 นาที',
        technique: 'วัดเฉพาะจุด',
        pressure: 'light',
        direction: 'บริเวณที่มีปัญหา'
      }
    ],
    productApplication: [
      {
        product: 'โลชั่นทำความสะอาด',
        amount: '2มล.',
        method: 'ก่อนวิเคราะห์'
      }
    ],
    aftercare: [
      'สร้างเอกสาร',
      'พูดคุยแผนการรักษา',
      'ให้คำแนะนำการดูแล'
    ],
    contraindications: [
      'ไม่มีข้อห้ามเฉพาะ',
      'ระวังในกรณีผิวระคายเคือง'
    ]
  }
};