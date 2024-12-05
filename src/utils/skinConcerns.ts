import { SkinConcern } from '../types/measurements';
import { Language } from '../types/language';

export const SKIN_CONCERNS_TRANSLATIONS = {
  de: [
    {
      id: 'moisture',
      label: 'Trockene Haut',
      description: 'Mangelnde Hautfeuchtigkeit'
    },
    {
      id: 'sebum',
      label: 'Fettige Haut',
      description: 'Übermäßige Talgproduktion'
    },
    {
      id: 'pores',
      label: 'Große Poren',
      description: 'Erweiterte oder sichtbare Poren'
    },
    {
      id: 'spots',
      label: 'Hautflecken',
      description: 'Unregelmäßige Pigmentierung'
    },
    {
      id: 'wrinkles',
      label: 'Falten',
      description: 'Feine Linien und Falten'
    },
    {
      id: 'acne',
      label: 'Akne',
      description: 'Aktive Akne und Entzündungen'
    },
    {
      id: 'blackheads',
      label: 'Mitesser',
      description: 'Verstopfte Poren und Mitesser'
    },
    {
      id: 'darkCircles',
      label: 'Augenringe',
      description: 'Dunkle Ringe unter den Augen'
    },
    {
      id: 'plSensitivity',
      label: 'Sensible Haut',
      description: 'Erhöhte Hautempfindlichkeit'
    },
    {
      id: 'uvDamage',
      label: 'UV-Schäden',
      description: 'Sonnenschäden und Pigmentierung'
    },
    {
      id: 'collagen',
      label: 'Elastizitätsverlust',
      description: 'Verminderte Hautelastizität'
    }
  ],
  en: [
    {
      id: 'moisture',
      label: 'Dry Skin',
      description: 'Lack of skin moisture'
    },
    {
      id: 'sebum',
      label: 'Oily Skin',
      description: 'Excessive sebum production'
    },
    {
      id: 'pores',
      label: 'Large Pores',
      description: 'Enlarged or visible pores'
    },
    {
      id: 'spots',
      label: 'Skin Spots',
      description: 'Irregular pigmentation'
    },
    {
      id: 'wrinkles',
      label: 'Wrinkles',
      description: 'Fine lines and wrinkles'
    },
    {
      id: 'acne',
      label: 'Acne',
      description: 'Active acne and inflammation'
    },
    {
      id: 'blackheads',
      label: 'Blackheads',
      description: 'Clogged pores and blackheads'
    },
    {
      id: 'darkCircles',
      label: 'Dark Circles',
      description: 'Dark circles under the eyes'
    },
    {
      id: 'plSensitivity',
      label: 'Sensitive Skin',
      description: 'Increased skin sensitivity'
    },
    {
      id: 'uvDamage',
      label: 'UV Damage',
      description: 'Sun damage and pigmentation'
    },
    {
      id: 'collagen',
      label: 'Loss of Elasticity',
      description: 'Decreased skin elasticity'
    }
  ],
  th: [
    {
      id: 'moisture',
      label: 'ผิวแห้ง',
      description: 'ขาดความชุ่มชื้น'
    },
    {
      id: 'sebum',
      label: 'ผิวมัน',
      description: 'ผลิตน้ำมันมากเกินไป'
    },
    {
      id: 'pores',
      label: 'รูขุมขนกว้าง',
      description: 'รูขุมขนขยายหรือมองเห็นได้ชัด'
    },
    {
      id: 'spots',
      label: 'จุดด่างดำ',
      description: 'รอยดำไม่สม่ำเสมอ'
    },
    {
      id: 'wrinkles',
      label: 'ริ้วรอย',
      description: 'รอยเหี่ยวย่นและริ้วรอย'
    },
    {
      id: 'acne',
      label: 'สิว',
      description: 'สิวอักเสบและการอักเสบ'
    },
    {
      id: 'blackheads',
      label: 'สิวเสี้ยน',
      description: 'รูขุมขนอุดตันและสิวเสี้ยน'
    },
    {
      id: 'darkCircles',
      label: 'รอยคล้ำใต้ตา',
      description: 'วงแหวนสีเข้มใต้ดวงตา'
    },
    {
      id: 'plSensitivity',
      label: 'ผิวบอบบาง',
      description: 'ผิวที่บอบบางและแพ้ง่าย'
    },
    {
      id: 'uvDamage',
      label: 'ความเสียหายจาก UV',
      description: 'ความเสียหายจากแสงแดดและรอยดำ'
    },
    {
      id: 'collagen',
      label: 'ขาดความยืดหยุ่น',
      description: 'ผิวขาดความยืดหยุ่น'
    }
  ]
};

export const useSkinConcerns = (language: Language): SkinConcern[] => {
  return SKIN_CONCERNS_TRANSLATIONS[language];
};