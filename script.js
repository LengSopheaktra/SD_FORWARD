// ─── DATA ───
const brands = [
  { name: "Sinothinker", Image: "img/brand/Sinothinker.png" },
  { name: "Excbio", Image: "img/brand/EXCBIO.png" },
  { name: "RealyTech", Image: "img/brand/RealyTech.png" },
  { name: "Forward", Image: "img/brand/Forward.png" },
  { name: "OUMAN", Image: "img/brand/OUMAN.jpg" },
];

const catIconsMap = {
  // Hematology: "fas fa-tint",
  // "Electrolyte Analyzer": "fas fa-atom",
  // "Full Auto Chemistry Analyzer": "fas fa-flask",
  // "Semi-Auto Chemistry Analyzer": "fas fa-vial",
  // "ECG Machine": "fas fa-wave-square",
  // "Patient Monitor": "fas fa-heartbeat",
  // Ultrasound: "fas fa-heartbeat",
};

const productImages = {
  "EH 8300": {
    card: "img/Hamatology/EH 8300/EH 83001.jpg",
    images: [
      "img/Hamatology/EH 8300/EH 83001.jpg",
      "img/Hamatology/EH 8300/EH 83002.jpg",
      "img/Hamatology/EH 8300/EH 83003.jpg",
    ],
  },
  "FOR-9001": {
    card: "img/Hamatology/FOR-9001/FOR-90011.jpg",
    images: [
      "img/Hamatology/FOR-9001/FOR-90011.jpg",
      "img/Hamatology/FOR-9001/FOR-90012.jpg",
      "img/Hamatology/FOR-9001/FOR-90013.jpg",
    ],
  },
  "Excbio EH8300": {
    card: "img/product/Excbio EH8300_3.png",
    images: [
      "img/product/Excbio EH8300_3.png",
      "img/product/Excbio EH8300 .png",
      "img/product/Excbio EH8300_2.png",
    ],
  },
  "For-9001": {
    card: "img/product/Forward FOR-9001_2.png",
    images: [
      "img/product/Forward FOR-9001_2.png",
      "img/product/Forward FOR-9001.png",
      "img/product/Forward FOR-9001_3.png",
    ],
  },
  "Mindray BC-3000": {
    card: "img/product/Mindray BC 3000Plus.png",
    images: [
      "img/product/Mindray BC 3000Plus.png",
      "img/products/bc-3000-2.png",
      "img/products/bc-3000-3.png",
      "img/products/bc-3000-4.png",
    ],
  },
  "EA-5400": {
    card: "img/Electrolyte/EA-5400/EA-54002.jpg",
    images: [
      "img/Electrolyte/EA-5400/EA-54002.jpg",
      "img/Electrolyte/EA-5400/EA-54001.jpg",
    ],
  },
  "Excbio EC 9002 B": {
    card: "img/product/Excbio EC 9002 B Auto Chemistry Analyzer.png",
    images: [
      "img/product/Excbio EC 9002 B Auto Chemistry Analyzer.png",
      "img/products/ec-9002b-2.png",
      "img/products/ec-9002b-3.png",
      "img/products/ec-9002b-4.png",
    ],
  },
  Mindray: {
    card: "img/products/mindray-chem.png",
    images: [
      "img/products/mindray-chem.png",
      "img/products/mindray-chem-2.png",
      "img/products/mindray-chem-3.png",
      "img/products/mindray-chem-4.png",
    ],
  },
  "Mini-CLIA RL-C200": {
    card: "img/product/mini-clia ri-c2000.png",
    images: [
      "img/product/mini-clia ri-c2000.png",
      "img/products/rl-c200-2.png",
      "img/products/rl-c200-3.png",
      "img/products/rl-c200-4.png",
    ],
  },
  "Excbio SK6100": {
    card: "img/product/Excbio SK6100.png",
    images: [
      "img/product/Excbio SK6100.png",
      "img/products/sk6100-2.png",
      "img/products/sk6100-3.png",
      "img/products/sk6100-4.png",
    ],
  },
  "ZIJIAN BAS-10s": {
    card: "img/product/ZIJIAN BAS-10s.png",
    images: [
      "img/product/ZIJIAN BAS-10s.png",
      "img/products/bas-10s-2.png",
      "img/products/bas-10s-3.png",
      "img/products/bas-10s-4.png",
    ],
  },
  "Excbio EC-9005": {
    card: "img/product/Excbio EC-9005.png",
    images: [
      "img/product/Excbio EC-9005.png",
      "img/products/ec-9005-2.png",
      "img/products/ec-9005-3.png",
      "img/products/ec-9005-4.png",
    ],
  },
  "PE-E12B": {
    card: "img/product/PE-E12A ECG Machine 12 Channel.png",
    images: [
      "img/product/PE-E12A ECG Machine 12 Channel.png",
      "img/products/pe-e12a-2.png",
      "img/products/pe-e12a-3.png",
    ],
  },
  "ECG-1206A": {
    card: "img/product/ECG machine _ECG-1206A.png",
    images: [
      "img/product/ECG machine _ECG-1206A.png",
      "img/products/ecg-1206a-2.png",
      "img/products/ecg-1206a-3.png",
      "img/products/ecg-1206a-4.png",
    ],
  },
  "Defibrillator Monitor 7000D": {
    card: "img/product/Defibrillator Monitor 7000D.png",
    images: [
      "img/product/Defibrillator Monitor 7000D.png",
      "img/products/7000d-2.png",
      "img/products/7000d-3.png",
      "img/products/7000d-4.png",
    ],
  },
  "S8 Monitor Defibrillator": {
    card: "img/product/S8 Monitor Defibrillator.png",
    images: [
      "img/product/S8 Monitor Defibrillator.png",
      "img/products/s8-2.png",
      "img/products/s8-3.png",
      "img/products/s8-4.png",
    ],
  },
  "YK-8000D": {
    card: "img/Patient Monitor/Yk-8000D/Yk-8000D1.jpg",
    images: [
      "img/Patient Monitor/Yk-8000D/Yk-8000D1.jpg",
      "img/Patient Monitor/Yk-8000D/Yk-8000D2.jpg",
      "img/Patient Monitor/Yk-8000D/Yk-8000D3.jpg",
      "img/Patient Monitor/Yk-8000D/Yk-8000D4.jpg",
    ],
  },
  "GE LOGIQ E9": {
    card: "img/Ultrasound/GE LOGIQ E9/GE LOGIQ E91.jpg",
    images: [
      "img/Ultrasound/GE LOGIQ E9/GE LOGIQ E91.jpg",
      "img/Ultrasound/GE LOGIQ E9/GE LOGIQ E92.webp",
      "img/Ultrasound/GE LOGIQ E9/GE LOGIQ E93.webp",
      "img/Ultrasound/GE LOGIQ E9/GE LOGIQ E9.avif",
    ],
  },
  "GE LOGIQ F8": {
    card: "img/Ultrasound/GE LOGIQ F8/GE LOGIQ F81.jpg",
    images: [
      "img/Ultrasound/GE LOGIQ F8/GE LOGIQ F81.jpg",
      "img/Ultrasound/GE LOGIQ F8/GE LOGIQ F82.jpg",
      "img/Ultrasound/GE LOGIQ F8/GE LOGIQ F83.jpg",
    ],
  },
  "GE LOGIQ P5": {
    card: "img/Ultrasound/GE LOGIQ P5/ge-logiq-p51.jpg",
    images: [
      "img/Ultrasound/GE LOGIQ P5/ge-logiq-p51.jpg",
      "img/Ultrasound/GE LOGIQ P5/ge-logiq-p52.jpg",
      "img/Ultrasound/GE LOGIQ P5/ge-logiq-p53.jpg",
    ],
  },
  "GE Vivid S6": {
    card: "img/Ultrasound/GE Vivid S6/GE Vivid S63.jpg",
    images: [
      "img/Ultrasound/GE Vivid S6/GE Vivid S61.jpg",
      "img/Ultrasound/GE Vivid S6/GE Vivid S62.jpg",
      "img/Ultrasound/GE Vivid S6/GE Vivid S63.jpg",
    ],
  },
  "GE Voluson E10": {
    card: "img/Ultrasound/GE Voluson E10/GE Voluson E101.jpg",
    images: [
      "img/Ultrasound/GE Voluson E10/GE Voluson E101.jpg",
      "img/Ultrasound/GE Voluson E10/GE Voluson E102.jpg",
    ],
  },
  "GE Voluson S6": {
    card: "img/Ultrasound/GE Voluson S6/GE Voluson S61.jpg",
    images: [
      "img/Ultrasound/GE Voluson S6/GE Voluson S61.jpg",
      "img/Ultrasound/GE Voluson S6/GE Voluson S62.png",
      "img/Ultrasound/GE Voluson S6/GE Voluson S63.jpg",
    ],
  },
  "GE Voluson S8": {
    card: "img/Ultrasound/GE Voluson S8/GE Voluson S81.JPG",
    images: [
      "img/Ultrasound/GE Voluson S8/GE Voluson S81.JPG",
      "img/Ultrasound/GE Voluson S8/GE Voluson S82.JPG",
      "img/Ultrasound/GE Voluson S8/GE Voluson S83.JPG",
      "img/Ultrasound/GE Voluson S8/GE Voluson S84.JPG",
    ],
  },
  "MINDRAY DC-3": {
    card: "img/Ultrasound/MINDRAY DC-3/MINDRAY DC-31.jpg",
    images: [
      "img/Ultrasound/MINDRAY DC-3/MINDRAY DC-31.jpg",
      "img/Ultrasound/MINDRAY DC-3/MINDRAY DC-32.jpg",
      "img/Ultrasound/MINDRAY DC-3/MINDRAY DC-33.jpg",
    ],
  },
  "MINDRAY DC-28": {
    card: "img/Ultrasound/MINDRAY DC-28/MINDRAY DC-282.jpg",
    images: [
      "img/Ultrasound/MINDRAY DC-28/MINDRAY DC-282.jpg",
      "img/Ultrasound/MINDRAY DC-28/MINDRAY DC-283.jpg",
      "img/Ultrasound/MINDRAY DC-28/MINDRAY DC-284.jpg",
    ],
  },
  "MINDRAY DC-30": {
    card: "img/Ultrasound/MINDRAY DC-30/MINDRAY DC-301.jpg",
    images: [
      "img/Ultrasound/MINDRAY DC-30/MINDRAY DC-301.jpg",
      "img/Ultrasound/MINDRAY DC-30/MINDRAY DC-302.jpg",
      "img/Ultrasound/MINDRAY DC-30/MINDRAY DC-303.jpg",
    ],
  },
  "MINDRAY DC-N3": {
    card: "img/Ultrasound/MINDRAY DC-N3/MINDRAY DC-N31.jpg",
    images: [
      "img/Ultrasound/MINDRAY DC-N3/MINDRAY DC-N31.jpg",
      "img/Ultrasound/MINDRAY DC-N3/MINDRAY DC-N32.jpg",
      "img/Ultrasound/MINDRAY DC-N3/MINDRAY DC-N33.jpg",
    ],
  },
  "ZONCARE VIV 40": {
    card: "img/Ultrasound/ZONCARE VIV 40/ZONCARE VIV 401.webp",
    images: [
      "img/Ultrasound/ZONCARE VIV 40/ZONCARE VIV 401.webp",
      "img/Ultrasound/ZONCARE VIV 40/ZONCARE VIV 402.jpg",
      "img/Ultrasound/ZONCARE VIV 40/ZONCARE VIV 403.JPG",
    ],
  },
  "ZONCARE VIV 60": {
    card: "img/Ultrasound/ZONCARE VIV 60/ZONCARE VIV 603.JPG",
    images: [
      "img/Ultrasound/ZONCARE VIV 60/ZONCARE VIV 602.jpg",
      "img/Ultrasound/ZONCARE VIV 60/ZONCARE VIV 603.png",
      "img/Ultrasound/ZONCARE VIV 60/ZONCARE VIV 602.JPG",
    ],
  },
  "ZONCARE VIV 80": {
    card: "img/Ultrasound/ZONCARE VIV 80/ZONCARE VIV 801.jpg",
    images: [
      "img/Ultrasound/ZONCARE VIV 80/ZONCARE VIV 801.jpg",
      "img/Ultrasound/ZONCARE VIV 80/ZONCARE VIV 803.PNG",
      "img/Ultrasound/ZONCARE VIV 80/ZONCARE VIV 802.webp",
    ],
  },
  "X-RAY 300ma Siment": {
    card: "img/X-RAY Machine/X-RAY 300ma Siment/X-RAY 300ma Siment1.jpg",
    images: [
      "img/X-RAY Machine/X-RAY 300ma Siment/X-RAY 300ma Siment1.jpg",
      "img/X-RAY Machine/X-RAY 300ma Siment/X-RAY 300ma Siment2.jpg",
      "img/X-RAY Machine/X-RAY 300ma Siment/X-RAY 300ma Siment3.webp",
      "img/X-RAY Machine/X-RAY 300ma Siment/X-RAY 300ma Siment4.webp",
    ],
  },
  "Yk-8000B": {
    card: "img/Patient Monitor/Yk-8000B/Yk-8000B1.jpg",
    images: [
      "img/Patient Monitor/Yk-8000B/Yk-8000B1.jpg",
      "img/Patient Monitor/Yk-8000B/Yk-8000B2.png",
      "img/Patient Monitor/Yk-8000B/Yk-8000B3.jpg",
      "img/Patient Monitor/Yk-8000B/Yk-8000BYk-8000B4.png",
    ],
  },
  "HES-3002A": {
    card: "img/Operating Table HES-3002A/Operating Table HES-3002A3.jpg",
    images: [
      "img/Operating Table HES-3002A/Operating Table HES-3002A3.jpg",
      "img/Operating Table HES-3002A/Operating Table HES-3002A1.jpg",
      "img/Operating Table HES-3002A/Operating Table HES-3002A2.webp",
    ],
  },
  "S8 Defibrillator": {
    card: "img/Defibrillator/S8 Defibrillator/S8 Defibrillator3.jpg",
    images: [
      "img/Defibrillator/S8 Defibrillator/S8 Defibrillator3.jpg",
      "img/Defibrillator/S8 Defibrillator/S8 Defibrillator1.webp",
      "img/Defibrillator/S8 Defibrillator/S8 Defibrillator2.jpg",
    ],
  },
  "DEF-7000": {
    card: "img/Defibrillator/DEF-7000/DEF-70001.jpg",
    images: [
      "img/Defibrillator/DEF-7000/DEF-70001.jpg",
      "img/Defibrillator/DEF-7000/DEF-70002.jpg",
    ],
  },
  "ECG PE-E12B": {
    card: "img/ECG Machine/ECG PE-E12B/IMG_0719.JPG",
    images: [
      "img/ECG Machine/ECG PE-E12B/PE-E12B-ECG-MACHINE.jpg",
      "img/ECG Machine/ECG PE-E12B/IMG_0719.JPG",
      "img/ECG Machine/ECG PE-E12B/IMG_0723.JPG",
    ],
  },
  "ECG 1206-A": {
    card: "img/ECG Machine/ECG 1206-A/ECG 1206-A2.avif",
    images: [
      "img/ECG Machine/ECG 1206-A/ECG 1206-A2.avif",
      "img/ECG Machine/ECG 1206-A/ECG 1206-A1.png",
    ],
  },
  "Infant Radiant Warmer": {
    card: "img/Infarnt Radiant warmer/Infarnt Radiant warmer1.webp",
    images: [
      "img/Infarnt Radiant warmer/Infarnt Radiant warmer1.webp",
      "img/Infarnt Radiant warmer/Infarnt Radiant warmer2.jpg",
      "img/Infarnt Radiant warmer/Infarnt Radiant warmer3.jpg",
      "img/Infarnt Radiant warmer/Infarnt Radiant warmer4.jpg",
    ],
  },
  "SK-6100": {
    card: "img/Full Auto Chemistry Analyzer/SK-6100/SK-61001.jpg",
    images: [
      "img/Full Auto Chemistry Analyzer/SK-6100/SK-61001.jpg",
      "img/Full Auto Chemistry Analyzer/SK-6100/SK-61002.jpg",
      "img/Full Auto Chemistry Analyzer/SK-6100/SK-61003.jpg",
    ],
  },
  "Mini-CILA Rl-c2000": {
    card: "img/Full Auto Chemistry Analyzer/Mini-CILA Rl-c2000/Mini-CILA Rl-c20001.png",
    images: [
      "img/Full Auto Chemistry Analyzer/Mini-CILA Rl-c2000/Mini-CILA Rl-c20001.png",
      "img/Full Auto Chemistry Analyzer/Mini-CILA Rl-c2000/Mini-CILA Rl-c20002.jpg",
      "img/Full Auto Chemistry Analyzer/Mini-CILA Rl-c2000/Mini-CILA Rl-c20003.jpg",
    ],
  },
  "EC-9002 B": {
    card: "img/Full Auto Chemistry Analyzer/EC-9002 B/EC-9002 B1.jpg",
    images: [
      "img/Full Auto Chemistry Analyzer/EC-9002 B/EC-9002 B1.jpg",
      "img/Full Auto Chemistry Analyzer/EC-9002 B/EC-9002 B2.jpg",
      "img/Full Auto Chemistry Analyzer/EC-9002 B/EC-9002 B3.jpg",
      "img/Full Auto Chemistry Analyzer/EC-9002 B/EC-9002 B4.jpg",
    ],
  },
  "ENT Endoscopy": {
    card: "img/ENT Endoscopy/ENT Endoscopy2.png",
    images: [
      "img/ENT Endoscopy/ENT Endoscopy1.jpg",
      "img/ENT Endoscopy/ENT Endoscopy2.png",
      "img/ENT Endoscopy/ENT Endoscopy3.jpg",
    ],
  },
};

const productDescriptions = {
  "Excbio EH8300": {
    desc: "The EXCBIO EH8300 is a high-performance automatic hematology analyzer designed for clinics, laboratories, and hospitals needing reliable and efficient Complete Blood Count (CBC) diagnostics. With a 3-part differential and 23-24 reportable parameters plus 3 histograms, this model balances speed, accuracy, and budget.",
    features: [
      "24 parameters including WBC, RBC, HGB, HCT, MCV, MCH, MCHC, PLT and others, with 3 histograms for detailed analysis.",
      "3-part WBC differential (neutrophils, lymphocytes, monocytes).",
      "Throughput: ~60 samples per hour  ideal for moderate-volume labs.",
      "Low sample volume: approx 9.6 µL whole blood.",
    ],
  },
  "For-9001": {
    desc: "The For-9001 hematology analyzer provides reliable 3-part differential blood cell analysis, suitable for small to medium-sized clinics and hospitals.",
    features: [
      "3-part differential WBC",
      "60 samples/hour throughput",
      "18 parameters",
      "Reagent status monitoring",
      "USB data export",
      "Compact design",
    ],
  },
  "Mindray BC-3000": {
    desc: "Mindray BC-3000 delivers accurate and efficient CBC + 3-part differential results with Mindray's trusted reliability and ease of use.",
    features: [
      "3-part differential",
      "Automatic sample mixing",
      "18 parameters",
      "Barcode scanner support",
      "Bi-directional LIS interface",
      "Low sample volume required",
    ],
  },
  "EA-5400": {
    desc: "The Excbio EA-5400 Electrolyte Analyzer measures critical electrolyte levels including Na⁺, K⁺, Cl⁻, Ca²⁺ and pH with high accuracy.",
    features: [
      "Measures Na⁺, K⁺, Cl⁻, Ca²⁺, pH",
      "Ion-selective electrode technology",
      "Automatic calibration",
      "Small sample volume (120μL)",
      "Built-in thermal printer",
      "Memory for 1000 results",
    ],
  },
  "Excbio EC 9002 B": {
    desc: "A fully automated chemistry analyzer delivering high-speed photometric analysis for clinical biochemistry tests in busy hospital laboratories.",
    features: [
      "Up to 400 tests/hour",
      "ISE module available",
      "180 sample positions",
      "Auto-dilution and rerun",
      "Continuous loading",
      "LIS connectivity",
    ],
  },
  Mindray: {
    desc: "Mindray's full auto chemistry analyzer platform offers clinical laboratories exceptional speed, flexibility, and reliability with comprehensive test menus.",
    features: [
      "High throughput analysis",
      "Open reagent system",
      "Automated QC management",
      "Intuitive software interface",
      "Remote diagnostics capability",
      "STAT mode available",
    ],
  },
  "Mini-CLIA RL-C200": {
    desc: "The Mini-CLIA RL-C200 is a compact fully automated biochemistry analyzer ideal for small laboratories and point-of-care settings.",
    features: [
      "200 tests/hour",
      "Compact benchtop design",
      "80 reagent positions",
      "Automatic washing system",
      "Photometric measurement",
      "Easy reagent management",
    ],
  },
  "Excbio SK6100": {
    desc: "The Excbio SK6100 chemistry analyzer combines high throughput with excellent analytical performance for comprehensive biochemistry testing.",
    features: [
      "600 tests/hour",
      "ISE electrolyte module",
      "Continuous sample loading",
      "45 onboard reagent positions",
      "Advanced QC features",
      "Multi-calibration support",
    ],
  },
  "ZIJIAN BAS-10s": {
    desc: "The ZIJIAN BAS-10s is a reliable semi-automatic biochemistry analyzer for cost-effective clinical chemistry testing in routine laboratories.",
    features: [
      "Semi-automatic operation",
      "Wide wavelength range 340–700nm",
      "Kinetic and endpoint measurement",
      "Built-in memory",
      "Low maintenance cost",
      "Simple operation interface",
    ],
  },
  "Excbio EC-9005": {
    desc: "Excbio EC-9005 semi-auto chemistry analyzer offers professional accuracy with a straightforward workflow for medium-volume laboratories.",
    features: [
      "Open reagent platform",
      "Multiple measurement modes",
      "Temperature control 37°C",
      "Built-in printer",
      "Stable photometry",
      "Cost-effective reagent use",
    ],
  },
  "PE-E12B": {
    desc: "The PE-E12A is a professional 12-channel ECG machine offering high-resolution cardiac signal acquisition with automatic interpretation.",
    features: [
      "12-lead simultaneous acquisition",
      "Auto ECG interpretation",
      "7-inch color LCD display",
      "Thermal print output",
      "Patient data management",
      "Lightweight and portable",
    ],
  },
  "ECG-1206A": {
    desc: "The ECG-1206A delivers clinical-grade 12-lead ECG recording with a large display and comprehensive rhythm analysis for hospital use.",
    features: [
      "12 simultaneous leads",
      "Large 10-inch display",
      "Built-in rhythm analysis",
      "Digital signal filtering",
      "USB/LAN connectivity",
      "Long battery life",
    ],
  },
  "Defibrillator Monitor 7000D": {
    desc: "The 7000D Defibrillator Monitor combines life-saving defibrillation with comprehensive patient monitoring for emergency and critical care environments.",
    features: [
      "Biphasic defibrillation up to 360J",
      "ECG, SpO₂, NIBP, EtCO₂",
      "AED and manual modes",
      "Synchronized cardioversion",
      "10-inch color display",
      "Long battery operation",
    ],
  },
  "S8 Monitor Defibrillator": {
    desc: "The S8 is an advanced modular monitor defibrillator designed for ICU, operating rooms, and emergency departments requiring comprehensive monitoring.",
    features: [
      "Multi-parameter monitoring",
      "High-energy defibrillation",
      "Waveform data storage",
      "Touch screen interface",
      "Network connectivity",
      "Modular parameter expansion",
    ],
  },
  "YK-8000D": {
    desc: "The YK-8000D patient monitor provides reliable multi-parameter monitoring with clear display and user-friendly interface for general ward and ICU use.",
    features: [
      "ECG, SpO₂, NIBP, Temp, Resp",
      "15-inch HD color display",
      "Alarm management system",
      "Trend data analysis",
      "Network LAN/WiFi",
      "Bedside and central monitoring",
    ],
  },
  "GE LOGIQ E9": {
    desc: "The GE Logiq E9 is GE's premium flagship radiology ultrasound system. With extraordinary image quality in all applications across all body types the E9 is a remarkable replacement for the Sequoia, Toshiba Aplio and previous GE premium radiology platforms like the Logiq 7 and Logiq 9.",
    features: [
      "B, CFM, M, PW, PDI",
      "High Resolution Flat Panel LCD Monitor",
      "Tissue Harmonics",
      "Coded Harmonic Imaging",
      "Virtual Convex",
      "Anatomical M-Mode",
      "TruScan Architecture (TruAccess, SmartScan, ComfortScan)",
    ],
  },
  "GE LOGIQ F8": {
    desc: "New & Refurbished Ultrasound – GE Logiq F8 Ultrasound Machine. Enhanced image contrast helps you distinguish between tissue types. The ability to image both superficial and deep anatomy, with excellent penetration, helps you image confidently. Incorporating established capabilities from GE’s flagship ultrasound systems, the LOGIQ F8 provides you with an affordable way to offer the advantages of advanced, high-performance ultrasound to your patients. Advanced tools and intuitive protocols help simplify image acquisition and enhance your overall image quality, with our suite of features including:",
    features: [
      "Phase Inversion Harmonic Imaging",
      "CrossXBeam*",
      "Speckle Reduction Imaging",
      "Focus on IMAGE QUALITY",
    ],
  },
};

const products = [
  {
    id: 1,
    name: "Excbio EH8300",
    cat: "Hematology",
    price: "$2,800",
    priceNum: 2800,
  },
  {
    id: 2,
    name: "For-9001",
    cat: "Hematology",
    price: "$1,950",
    priceNum: 1950,
  },
  {
    id: 3,
    name: "Mindray BC-3000",
    cat: "Hematology",
    price: "$3,200",
    priceNum: 3200,
  },
  {
    id: 32,
    name: "EH 8300",
    cat: "Hematology",
    price: "$3,200",
    priceNum: 3200,
  },
  {
    id: 33,
    name: "FOR-9001",
    cat: "Hematology",
    price: "$1000",
    priceNum: 1000,
  },
  {
    id: 4,
    name: "EA-5400",
    cat: "Electrolyte",
    // price: "$1,600",
    priceNum: 1600,
  },
  {
    id: 5,
    name: "Excbio EC 9002 B",
    cat: "Full Auto Chemistry Analyzer",
    price: "$15,000",
    priceNum: 15000,
  },
  // {
  //   id: 6,
  //   name: "Mindray",
  //   cat: "Full Auto Chemistry Analyzer",
  //   price: "$18,500",
  //   priceNum: 18500,
  // },
  {
    id: 7,
    name: "Mini-CLIA RL-C200",
    cat: "Full Auto Chemistry Analyzer",
    price: "$8,900",
    priceNum: 8900,
  },
  {
    id: 8,
    name: "Excbio SK6100",
    cat: "Full Auto Chemistry Analyzer",
    price: "$22,000",
    priceNum: 22000,
  },
  {
    id: 9,
    name: "ZIJIAN BAS-10s",
    cat: "Semi-Auto Chemistry Analyzer",
    price: "$1,200",
    priceNum: 1200,
  },
  {
    id: 10,
    name: "Excbio EC-9005",
    cat: "Semi-Auto Chemistry Analyzer",
    price: "$2,100",
    priceNum: 2100,
  },
  {
    id: 11,
    name: "PE-E12B",
    cat: "ECG Machine",
    price: "$1,800",
    priceNum: 1800,
  },
  {
    id: 12,
    name: "ECG-1206A",
    cat: "ECG Machine",
    price: "$2,400",
    priceNum: 2400,
  },
  {
    id: 13,
    name: "Defibrillator Monitor 7000D",
    cat: "Defibrillator",
    price: "$9,500",
    priceNum: 9500,
  },
  {
    id: 14,
    name: "S8 Monitor Defibrillator",
    cat: "Defibrillator",
    price: "$12,000",
    priceNum: 12000,
  },
  {
    id: 15,
    name: "YK-8000D",
    cat: "Patient Monitor",
    price: "$4,800",
    priceNum: 4800,
  },
  {
    id: 34,
    name: "Yk-8000B",
    cat: "Patient Monitor",
    price: "$1000",
    priceNum: 1000,
  },
  {
    id: 16,
    name: "GE LOGIQ E9",
    cat: "Ultrasound",
    price: "$4,800",
    priceNum: 4800,
  },
  {
    id: 17,
    name: "GE LOGIQ F8",
    cat: "Ultrasound",
    price: "$4,800",
    priceNum: 4800,
  },
  {
    id: 18,
    name: "GE LOGIQ P5",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 19,
    name: "GE Vivid S6",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 20,
    name: "GE Voluson E10",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 22,
    name: "GE Voluson S8",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 23,
    name: "MINDRAY DC-3",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 24,
    name: "MINDRAY DC-28",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 25,
    name: "MINDRAY DC-30",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 26,
    name: "MINDRAY DC-N3",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 27,
    name: "ZONCARE VIV 40",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 28,
    name: "ZONCARE VIV 60",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 29,
    name: "ZONCARE VIV 80",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 30,
    name: "GE Voluson S6",
    cat: "Ultrasound",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 31,
    name: "X-RAY 300ma Siment",
    cat: "X-RAY Machine",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 35,
    name: "HES-3002A",
    cat: "Operating Table",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 36,
    name: "S8 Defibrillator",
    cat: "Defibrillator",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 37,
    name: "DEF-7000",
    cat: "Defibrillator",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 38,
    name: "ECG 1206-A",
    cat: "ECG Machine",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 39,
    name: "ECG PE-E12B",
    cat: "ECG Machine",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 40,
    name: "Infant Radiant Warmer",
    cat: "Infant Radiant Warmer",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 41,
    name: "SK-6100",
    cat: "Full Auto Chemistry Analyzer",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 42,
    name: "Mini-CILA Rl-c2000",
    cat: "Full Auto Chemistry Analyzer",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 43,
    name: "EC-9002 B",
    cat: "Full Auto Chemistry Analyzer",
    price: "$1,000",
    priceNum: 1000,
  },
  {
    id: 44,
    name: "ENT Endoscopy",
    cat: "ENT Endoscopy",
    price: "$1,000",
    priceNum: 1000,
  },
];

// ─── BUILD BRAND SLIDER ───
function buildBrands() {
  const track = document.getElementById("brandSlider");
  const allBrands = [...brands, ...brands];
  allBrands.forEach((b) => {
    const card = document.createElement("div");
    card.className = "brand-card";
    card.innerHTML = `
      <div class="brand-img-wrap">
        <img src="${b.Image}" alt="${b.name}" />
      </div>
      <div class="brand-name">${b.name}</div>
    `;
    track.appendChild(card);
  });
}

// ─── BUILD PRODUCTS ───
function buildProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  const categories = [...new Set(products.map((p) => p.cat))];

  categories.forEach((cat) => {
    const catProds = products.filter((p) => p.cat === cat);
    if (filter !== "all" && filter !== cat) return;

    // Category header
    const header = document.createElement("div");
    header.className = "cat-section-title";
    header.innerHTML = `<i class="${catIconsMap[cat]}"></i> ${cat}`;
    grid.appendChild(header);

    catProds.forEach((prod) => {
      const card = document.createElement("div");
      card.className = "product-card fade-up";

      // Use product image if available, else fallback icon
      const imgData = productImages[prod.name];
      const cardImgHTML = imgData
        ? `<img src="${imgData.card}" alt="${prod.name}" class="product-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="product-placeholder" style="display:none"><i class="${catIconsMap[prod.cat] || "fas fa-box"}"></i><span>${prod.name}</span></div>`
        : `<div class="product-placeholder"><i class="${catIconsMap[prod.cat] || "fas fa-box"}"></i><span>${prod.name}</span></div>`;

      card.innerHTML = `
        <div class="product-img-wrap">
          ${cardImgHTML}
        </div>
        <div class="product-info">
          <div class="product-category">${prod.cat}</div>
          <div class="product-name">${prod.name}</div>
          <button class="btn-buy" onclick="openModal(${prod.id})">
            <i class="fas fa-shopping-cart"></i> Buy Now
          </button>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  observeFadeUps();
}

// ─── CATEGORY FILTER ───
document.getElementById("catSelect").addEventListener("change", (e) => {
  buildProducts(e.target.value);
});

// ─── MODAL ───
function openModal(id) {
  const prod = products.find((p) => p.id === id);
  if (!prod) return;

  const info = productDescriptions[prod.name] || {
    desc: `The ${prod.name} is a high-quality medical device designed for professional clinical use.`,
    features: [
      "Professional grade quality",
      "Easy operation",
      "Reliable performance",
      "Warranty included",
      "Technical support available",
    ],
  };

  document.getElementById("modalCat").textContent = prod.cat;
  document.getElementById("modalName").textContent = prod.name;
  // document.getElementById("modalPrice").innerHTML =
  //   `<span class="currency">$</span>${prod.price.replace("$", "")} <span style="font-size:14px;color:var(--gray-400);font-weight:400;"></span>`;
  document.getElementById("modalDesc").textContent = info.desc;

  const featList = document.getElementById("modalFeatures");
  featList.innerHTML = info.features.map((f) => `<li>${f}</li>`).join("");

  // ── Gallery ──
  const imgData = productImages[prod.name];
  const fallbackIcon = catIconsMap[prod.cat] || "fas fa-box";

  const mainImgEl = document.getElementById("modalMainImg");
  const thumbsEl = document.getElementById("modalThumbs");

  if (imgData && imgData.images && imgData.images.length > 0) {
    // Show first image as main
    mainImgEl.innerHTML = `<img id="modalMainImgTag" src="${imgData.images[0]}" alt="${prod.name}"
      onerror="this.parentElement.innerHTML='<i class=\\'${fallbackIcon} big-icon\\'></i>'"
      style="width:100%;height:100%;object-fit:contain;border-radius:8px;" />`;

    // Show up to 3 thumbnails (images[1], [2], [3])
    const thumbSrcs = imgData.images.slice(0, 4); // all 4 including main
    thumbsEl.innerHTML = thumbSrcs
      .map(
        (src, i) => `
        <div class="modal-thumb ${i === 0 ? "active" : ""}" onclick="selectThumb(this, '${src}', '${prod.name}', '${fallbackIcon}')">
          <img src="${src}" alt="View ${i + 1}"
            onerror="this.parentElement.innerHTML='<i class=\\'${fallbackIcon}\\' style=\\'font-size:22px;color:var(--gray-300)\\'></i>'"
            style="width:100%;height:100%;object-fit:contain;border-radius:4px;" />
        </div>`,
      )
      .join("");
  } else {
    // Fallback to icons
    mainImgEl.innerHTML = `<i class="${fallbackIcon} big-icon"></i>`;
    thumbsEl.innerHTML = ["View 1", "View 2", "View 3"]
      .map(
        (label, i) => `
        <div class="modal-thumb ${i === 0 ? "active" : ""}" onclick="selectThumb(this, null, '', '')">
          <i class="${fallbackIcon}" style="font-size:22px;color:var(--gray-300)"></i>
        </div>`,
      )
      .join("");
  }

  const overlay = document.getElementById("modalOverlay");
  overlay.style.display = "flex";
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

// ─── THUMBNAIL SELECT ───
function selectThumb(el, src, productName, fallbackIcon) {
  document
    .querySelectorAll(".modal-thumb")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");

  if (src) {
    document.getElementById("modalMainImg").innerHTML = `
      <img src="${src}" alt="${productName}"
        onerror="this.parentElement.innerHTML='<i class=\\'${fallbackIcon} big-icon\\'></i>'"
        style="width:100%;height:100%;object-fit:contain;border-radius:8px;" />`;
  }
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.style.display = "none";
  document.body.style.overflow = "";
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ─── NAVBAR ───
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// ─── HAMBURGER ───
document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
  document.getElementById("mobileMenu").classList.toggle("open");
});

function closeMobile() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobileMenu").classList.remove("open");
}

// ─── FADE UP OBSERVER ───
function observeFadeUps() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(".fade-up:not(.visible)")
    .forEach((el) => io.observe(el));
}

// ─── SLIDE NAVIGATION ───
let currentSlide = 0;
const slides = document.querySelectorAll(".slide-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  updateButtons();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function updateButtons() {
  const prevBtn = document.querySelector(".slide-btn.prev");
  const nextBtn = document.querySelector(".slide-btn.next");
  if (slides.length <= 1) {
    prevBtn && (prevBtn.disabled = true);
    nextBtn && (nextBtn.disabled = true);
  } else {
    prevBtn && (prevBtn.disabled = false);
    nextBtn && (nextBtn.disabled = false);
  }
}

// ─── INIT ───
buildBrands();
buildProducts();
observeFadeUps();
showSlide(currentSlide);
