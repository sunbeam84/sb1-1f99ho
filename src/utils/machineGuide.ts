import { DeviceInfo } from '../types/machine';
import { Language } from '../types/language';

export const DEVICE_GUIDE_TRANSLATIONS = {
  de: [
    {
      handle: "Skin Analysis Handle",
      functions: [
        "Hautfeuchtigkeitsmessung",
        "Talgproduktionsanalyse",
        "Porengröße-Analyse",
        "Pigmentierungsanalyse",
        "Faltenanalyse"
      ],
      benefits: [
        "Präzise Hautanalyse für maßgeschneiderte Behandlungen",
        "Dokumentation des Behandlungsfortschritts",
        "Visualisierung der Hautprobleme für Kunden"
      ],
      usage: "Vor jeder Behandlung zur Analyse und Dokumentation des Hautzustands",
      duration: "5-10 Minuten"
    },
    {
      handle: "Hydra Dermabrasion Handle",
      functions: [
        "Tiefenreinigung",
        "Porenreinigung",
        "Feuchtigkeitsversorgung",
        "Aqua-Peeling"
      ],
      benefits: [
        "Gründliche aber sanfte Reinigung",
        "Verbesserte Hautstruktur",
        "Erhöhte Produktaufnahme",
        "Sofort sichtbare Ergebnisse"
      ],
      usage: "Nach der Hautanalyse für die Grundreinigung",
      duration: "15-20 Minuten"
    },
    {
      handle: "Bubble Pen Handle",
      functions: [
        "Mikrobläschen-Reinigung",
        "Sauerstoffanreicherung",
        "Porenreinigung"
      ],
      benefits: [
        "Sanfte aber effektive Tiefenreinigung",
        "Verbesserte Sauerstoffversorgung",
        "Porenverfeinerung"
      ],
      usage: "Für die gründliche Reinigung verstopfter Poren",
      duration: "10-15 Minuten"
    },
    {
      handle: "Oxygen Spray Gun",
      functions: [
        "Sauerstoff-Infusion",
        "Wirkstoff-Einschleusung",
        "Feuchtigkeitsversorgung"
      ],
      benefits: [
        "Tiefe Wirkstoffpenetration",
        "Erhöhte Sauerstoffversorgung",
        "Verbesserte Hautdurchfeuchtung"
      ],
      usage: "Zur Wirkstoffeinschleusung und Sauerstoffversorgung",
      duration: "15-20 Minuten"
    },
    {
      handle: "Facial/Eye Ultrasound",
      functions: [
        "Ultraschallvibration",
        "Wirkstofftransport",
        "Lymphdrainage"
      ],
      benefits: [
        "Verbesserte Produktaufnahme",
        "Reduzierung von Schwellungen",
        "Straffungseffekt"
      ],
      usage: "Für Gesicht und Augenpartie zur Straffung und Drainage",
      duration: "10-15 Minuten"
    },
    {
      handle: "Cold Hammer",
      functions: [
        "Kühlung",
        "Porenverfeinerung",
        "Beruhigung"
      ],
      benefits: [
        "Reduzierung von Rötungen",
        "Porenverschluss",
        "Erhöhte Wirkstoffaufnahme"
      ],
      usage: "Als abschließende Behandlung",
      duration: "5-10 Minuten"
    },
    {
      handle: "Auto Micro Needles",
      functions: [
        "Mikro-Needling",
        "Kollagenstimulation",
        "Wirkstoffeinschleusung"
      ],
      benefits: [
        "Verbesserte Hautstruktur",
        "Erhöhte Kollagenproduktion",
        "Optimierte Wirkstoffaufnahme"
      ],
      usage: "Für Anti-Aging und Hautstrukturverbesserung",
      duration: "20-30 Minuten"
    },
    {
      handle: "Skin Scrubber",
      functions: [
        "Ultraschall-Peeling",
        "Tiefenreinigung",
        "Wirkstofftransport"
      ],
      benefits: [
        "Sanfte Entfernung von Verhornungen",
        "Porenreinigung",
        "Verbesserte Hautstruktur"
      ],
      usage: "Zur sanften Tiefenreinigung und Peeling",
      duration: "10-15 Minuten"
    },
    {
      handle: "High Frequency",
      functions: [
        "Bakterienreduktion",
        "Durchblutungsförderung",
        "Talgregulierung"
      ],
      benefits: [
        "Antibakterielle Wirkung",
        "Verbesserte Heilung",
        "Regulierung der Talgproduktion"
      ],
      usage: "Bei Unreinheiten und zur Desinfektion",
      duration: "5-10 Minuten"
    },
    {
      handle: "Diamond Peeling",
      functions: [
        "Mechanisches Peeling",
        "Abtrag toter Hautzellen",
        "Hauterneuerung"
      ],
      benefits: [
        "Verfeinerte Hautstruktur",
        "Verbessertes Hautbild",
        "Erhöhte Produktaufnahme"
      ],
      usage: "Für mechanisches Peeling und Hauterneuerung",
      duration: "15-20 Minuten"
    },
    {
      handle: "Vacuum Pen",
      functions: [
        "Lymphdrainage",
        "Mitesserentfernung",
        "Durchblutungsförderung"
      ],
      benefits: [
        "Entfernung von Unreinheiten",
        "Verbesserte Lymphzirkulation",
        "Straffungseffekt"
      ],
      usage: "Zur gezielten Behandlung von Unreinheiten",
      duration: "10-15 Minuten"
    }
  ],
  en: [
    {
      handle: "Skin Analysis Handle",
      functions: [
        "Skin moisture measurement",
        "Sebum production analysis",
        "Pore size analysis",
        "Pigmentation analysis",
        "Wrinkle analysis"
      ],
      benefits: [
        "Precise skin analysis for customized treatments",
        "Documentation of treatment progress",
        "Visualization of skin concerns for clients"
      ],
      usage: "Before each treatment for analysis and documentation of skin condition",
      duration: "5-10 minutes"
    },
    {
      handle: "Hydra Dermabrasion Handle",
      functions: [
        "Deep cleansing",
        "Pore cleansing",
        "Hydration",
        "Aqua peeling"
      ],
      benefits: [
        "Thorough yet gentle cleansing",
        "Improved skin texture",
        "Enhanced product absorption",
        "Immediate visible results"
      ],
      usage: "After skin analysis for basic cleansing",
      duration: "15-20 minutes"
    },
    {
      handle: "Bubble Pen Handle",
      functions: [
        "Micro-bubble cleansing",
        "Oxygen enrichment",
        "Pore cleansing"
      ],
      benefits: [
        "Gentle yet effective deep cleansing",
        "Improved oxygen supply",
        "Pore refinement"
      ],
      usage: "For thorough cleansing of clogged pores",
      duration: "10-15 minutes"
    },
    {
      handle: "Oxygen Spray Gun",
      functions: [
        "Oxygen infusion",
        "Active ingredient delivery",
        "Hydration"
      ],
      benefits: [
        "Deep ingredient penetration",
        "Increased oxygen supply",
        "Enhanced skin hydration"
      ],
      usage: "For ingredient delivery and oxygen supply",
      duration: "15-20 minutes"
    },
    {
      handle: "Facial/Eye Ultrasound",
      functions: [
        "Ultrasonic vibration",
        "Product transport",
        "Lymphatic drainage"
      ],
      benefits: [
        "Enhanced product absorption",
        "Reduction of swelling",
        "Firming effect"
      ],
      usage: "For face and eye area firming and drainage",
      duration: "10-15 minutes"
    },
    {
      handle: "Cold Hammer",
      functions: [
        "Cooling",
        "Pore refinement",
        "Calming"
      ],
      benefits: [
        "Reduction of redness",
        "Pore closing",
        "Enhanced product absorption"
      ],
      usage: "As final treatment step",
      duration: "5-10 minutes"
    },
    {
      handle: "Auto Micro Needles",
      functions: [
        "Micro-needling",
        "Collagen stimulation",
        "Product infusion"
      ],
      benefits: [
        "Improved skin texture",
        "Increased collagen production",
        "Optimized product absorption"
      ],
      usage: "For anti-aging and skin texture improvement",
      duration: "20-30 minutes"
    },
    {
      handle: "Skin Scrubber",
      functions: [
        "Ultrasonic peeling",
        "Deep cleansing",
        "Product transport"
      ],
      benefits: [
        "Gentle removal of dead skin cells",
        "Pore cleansing",
        "Improved skin texture"
      ],
      usage: "For gentle deep cleansing and peeling",
      duration: "10-15 minutes"
    },
    {
      handle: "High Frequency",
      functions: [
        "Bacteria reduction",
        "Blood circulation promotion",
        "Sebum regulation"
      ],
      benefits: [
        "Antibacterial effect",
        "Improved healing",
        "Sebum production regulation"
      ],
      usage: "For impurities and disinfection",
      duration: "5-10 minutes"
    },
    {
      handle: "Diamond Peeling",
      functions: [
        "Mechanical peeling",
        "Dead skin cell removal",
        "Skin renewal"
      ],
      benefits: [
        "Refined skin texture",
        "Improved skin appearance",
        "Enhanced product absorption"
      ],
      usage: "For mechanical peeling and skin renewal",
      duration: "15-20 minutes"
    },
    {
      handle: "Vacuum Pen",
      functions: [
        "Lymphatic drainage",
        "Blackhead removal",
        "Blood circulation promotion"
      ],
      benefits: [
        "Removal of impurities",
        "Improved lymphatic circulation",
        "Firming effect"
      ],
      usage: "For targeted treatment of impurities",
      duration: "10-15 minutes"
    }
  ],
  th: [
    {
      handle: "เครื่องวิเคราะห์ผิว",
      functions: [
        "วัดความชุ่มชื้นของผิว",
        "วิเคราะห์การผลิตน้ำมัน",
        "วิเคราะห์ขนาดรูขุมขน",
        "วิเคราะห์รอยดำ",
        "วิเคราะห์ริ้วรอย"
      ],
      benefits: [
        "วิเคราะห์ผิวแม่นยำสำหรับการรักษาเฉพาะบุคคล",
        "บันทึกความคืบหน้าของการรักษา",
        "แสดงปัญหาผิวให้ลูกค้าเห็น"
      ],
      usage: "ก่อนการรักษาทุกครั้งเพื่อวิเคราะห์และบันทึกสภาพผิว",
      duration: "5-10 นาที"
    },
    {
      handle: "เครื่องไฮดราเดอร์มาเบรชั่น",
      functions: [
        "ทำความสะอาดลึก",
        "ทำความสะอาดรูขุมขน",
        "เพิ่มความชุ่มชื้น",
        "พีลผิวด้วยน้ำ"
      ],
      benefits: [
        "ทำความสะอาดล้ำลึกแต่อ่อนโยน",
        "ปรับปรุงพื้นผิว",
        "เพิ่มการดูดซึมผลิตภัณฑ์",
        "เห็นผลทันที"
      ],
      usage: "หลังวิเคราะห์ผิวสำหรับการทำความสะอาดพื้นฐาน",
      duration: "15-20 นาที"
    },
    {
      handle: "เครื่องทำความสะอาดด้วยฟอง",
      functions: [
        "ทำความสะอาดด้วยไมโครบับเบิ้ล",
        "เพิ่มออกซิเจน",
        "ทำความสะอาดรูขุมขน"
      ],
      benefits: [
        "ทำความสะอาดลึกแต่อ่อนโยน",
        "เพิ่มการไหลเวียนออกซิเจน",
        "กระชับรูขุมขน"
      ],
      usage: "สำหรับทำความสะอาดรูขุมขนอุดตันอย่างล้ำลึก",
      duration: "10-15 นาที"
    },
    {
      handle: "เครื่องสเปรย์ออกซิเจน",
      functions: [
        "นำส่งออกซิเจน",
        "นำส่งสารสำคัญ",
        "เพิ่มความชุ่มชื้น"
      ],
      benefits: [
        "การซึมซาบสารสำคัญลึก",
        "เพิ่มออกซิเจน",
        "เพิ่มความชุ่มชื้นผิว"
      ],
      usage: "สำหรับนำส่งสารสำคัญและออกซิเจน",
      duration: "15-20 นาที"
    },
    {
      handle: "เครื่องอัลตร้าซาวด์หน้าและตา",
      functions: [
        "การสั่นด้วยอัลตร้าซาวด์",
        "นำส่งผลิตภัณฑ์",
        "ระบายน้ำเหลือง"
      ],
      benefits: [
        "เพิ่มการดูดซึมผลิตภัณฑ์",
        "ลดอาการบวม",
        "กระชับผิว"
      ],
      usage: "สำหรับกระชับผิวหน้าและรอบดวงตา",
      duration: "10-15 นาที"
    },
    {
      handle: "เครื่องค้อนเย็น",
      functions: [
        "ทำให้เย็น",
        "กระชับรูขุมขน",
        "ผ่อนคลายผิว"
      ],
      benefits: [
        "ลดรอยแดง",
        "ปิดรูขุมขน",
        "เพิ่มการดูดซึมผลิตภัณฑ์"
      ],
      usage: "เป็นขั้นตอนสุดท้ายของการรักษา",
      duration: "5-10 นาที"
    },
    {
      handle: "เครื่องไมโครนีดเดิ้ล",
      functions: [
        "การเจาะผิวระดับไมโคร",
        "กระตุ้นคอลลาเจน",
        "นำส่งผลิตภัณฑ์"
      ],
      benefits: [
        "ปรับปรุงพื้นผิว",
        "เพิ่มการผลิตคอลลาเจน",
        "เพิ่มประสิทธิภาพการดูดซึม"
      ],
      usage: "สำหรับต่อต้านริ้วรอยและปรับสภาพผิว",
      duration: "20-30 นาที"
    },
    {
      handle: "เครื่องสครับเบอร์",
      functions: [
        "พีลผิวด้วยอัลตร้าโซนิก",
        "ทำความสะอาดลึก",
        "นำส่งผลิตภัณฑ์"
      ],
      benefits: [
        "ขจัดเซลล์ผิวตายอย่างอ่อนโยน",
        "ทำความสะอาดรูขุมขน",
        "ปรับปรุงพื้นผิว"
      ],
      usage: "สำหรับทำความสะอาดลึกและพีลผิวอย่างอ่อนโยน",
      duration: "10-15 นาที"
    },
    {
      handle: "เครื่องความถี่สูง",
      functions: [
        "ลดแบคทีเรีย",
        "กระตุ้นการไหลเวียนโลหิต",
        "ควบคุมความมัน"
      ],
      benefits: [
        "ฆ่าเชื้อแบคทีเรีย",
        "เพิ่มการรักษา",
        "ควบคุมการผลิตน้ำมัน"
      ],
      usage: "สำหรับรักษาสิวและฆ่าเชื้อ",
      duration: "5-10 นาที"
    },
    {
      handle: "เครื่องขัดผิวเพชร",
      functions: [
        "ขัดผิวเชิงกล",
        "ขจัดเซลล์ผิวตาย",
        "ฟื้นฟูผิว"
      ],
      benefits: [
        "ผิวเนียนละเอียด",
        "ผิวดูดีขึ้น",
        "เพิ่มการดูดซึมผลิตภัณฑ์"
      ],
      usage: "สำหรับขัดผิวและฟื้นฟูผิว",
      duration: "15-20 นาที"
    },
    {
      handle: "เครื่องดูดสิวเสี้ยน",
      functions: [
        "ระบายน้ำเหลือง",
        "กำจัดสิวเสี้ยน",
        "กระตุ้นการไหลเวียนโลหิต"
      ],
      benefits: [
        "กำจัดสิ่งสกปรก",
        "เพิ่มการไหลเวียนน้ำเหลือง",
        "กระชับผิว"
      ],
      usage: "สำหรับรักษาสิวเสี้ยนเฉพาะจุด",
      duration: "10-15 นาที"
    }
  ]
};

export const useDeviceGuide = (language: Language): DeviceInfo[] => {
  return DEVICE_GUIDE_TRANSLATIONS[language];
};