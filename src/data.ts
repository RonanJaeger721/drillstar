import { ServiceItem, FAQItem, ProcessStep, ProjectItem, TestimonialItem } from './types';

export const BUSINESS_INFO = {
  name: 'Drillstar Borehole Solutions',
  phone: '+263 78 163 3813',
  phoneFormatted: '+263 78 163 3813',
  email: 'drillstarboholessolutions@gmail.com',
  address: '7496 East Coat Avenue, Belvedere, Zimbabwe',
  whatsappUrl: 'https://wa.me/263781633813?text=Hi%20Drillstar%20Borehole%20Solutions%2C%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20request%20a%20quote.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'drilling',
    title: 'Borehole Drilling & Installations',
    shortDesc: 'Professional casing, expert team, state-of-the-art truck-mounted rigs.',
    fullDesc: 'We offer complete end-to-end professional drilling services using heavy-duty truck rigs suited for both soft formations and hard rock basement granite. Our service includes technical casing, sanitary sealing, and high-performance electric/solar sub-pumps installations.',
    icon: 'Droplet',
    image: '/src/assets/images/borehole_hero_1779792739231.png',
    details: [
      'High-specification PVC casing (class 9 & 12 options) to prevent collapse',
      'Advanced sand screen filter installation for crystal clean water output',
      'Sanitary surface sealing and concrete aprons for absolute contamination control',
      'Installation of superior quality submersible pumps tailored to flow demands'
    ]
  },
  {
    id: 'survey',
    title: 'Geological Survey',
    shortDesc: 'High-accuracy geophysical surveys to locate the best water-yielding fracture zone.',
    fullDesc: 'Choosing the correct spot to drill is crucial. Our professional geophysicists use electronic resistivity meters to spot deep underground aquiferous fractures, maximizing your success rate and avoiding dry hole drilling.',
    icon: 'Compass',
    image: '/src/assets/images/geo_survey_1779792784545.png',
    details: [
      'Resistivity method profiling with multi-point sounding assessments',
      'Comprehensive surveying report mapping exact coordinates & expected depths',
      'Assistance with upper-catchment water licensing and ZINWA approvals',
      'Experienced Zimbabwean hydro-geologists with local terrain expertise'
    ]
  },
  {
    id: 'deepening',
    title: 'Borehole Deepening',
    shortDesc: 'Extend the depth of your existing borehole to hit deeper, everlasting aquifers.',
    fullDesc: 'Is your current borehole running dry due to seasonal water table drops or surrounding usage? We can deepen dry or low-capacity boreholes to reach deeper aquifers, ensuring a constant, stable year-round supply.',
    icon: 'TrendingDown',
    image: '/src/assets/images/borehole_hero_1779792739231.png', // falls back nicely
    details: [
      'Safe retrieval of old cables, pumps, and components',
      'Precision air-hammer drilling through existing PVC or steel casings',
      'Strategic extension of depth by 30 to 80 meters for sustainable supply',
      'Upgrading output with correct pump size calibration for new depths'
    ]
  },
  {
    id: 'flushing',
    title: 'Borehole Flushing',
    shortDesc: 'Clean and restore optimal flow rate by clearing silt, sand, and organic buildup.',
    fullDesc: 'Boreholes fill with fine silt, sand, clay, and iron bacteria over time, choking the water pathways and damaging submersible pumps. We perform heavy compressor flushing to blow out deposits, restoring maximum yield and water clarity.',
    icon: 'RefreshCw',
    image: '/src/assets/images/water_test_1779792805382.png',
    details: [
      'High-pressure air injection flushing to clear clay, sand, and stale sludge',
      'Acidization option for deep chemical descaling of screen slits',
      'Yield restoration testing with water clarity visual reporting',
      'Extends the operating life of your expensive submersible pump'
    ]
  },
  {
    id: 'solar',
    title: 'Solar Water Systems',
    shortDesc: 'Zero-emission solar pump systems with steel storage stands and Jojo tanks.',
    fullDesc: 'With local power shedding, converting your water supply to solar is an absolute necessity. We install heavy-duty solar panels, DC/AC hybrid pumps, professional automatic controllers, premium support structures, and insulated tank storage systems.',
    icon: 'Sun',
    image: '/src/assets/images/solar_pump_1779792762637.png',
    details: [
      'High-efficiency monocrystalline solar panels with heavy anti-theft cages',
      'Heavy-duty hot-dip galvanized steel tank stands (from 3m to 9m heights)',
      'Smart solar pump controller with dry-run protection and auto-shutoff',
      'Storage integration with modern 5,000L or 10,000L Jojo water reservoirs'
    ]
  },
  {
    id: 'testing',
    title: 'Capacity Water Testing',
    shortDesc: 'Determine the maximum safe continuous yield with certified flow testing.',
    fullDesc: 'Before installing large agricultural irrigation setups, school supply schemes, or large commercial networks, a formal constant-discharge test is done to confirm how much liters the hole can supply continuously without collapsing.',
    icon: 'Gauge',
    image: '/src/assets/images/water_test_1779792805382.png',
    details: [
      'Constant-rate pumping tests over 4-hour, 8-hour, or 24-hour schedules',
      'Accurate drawdown, discharge, and water recovery monitoring',
      'Comprehensive testing certificates required for farming and commercial approvals',
      'Physical and chemical water quality guidance to ensure clean, safe drinking water'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Consultation & Site Assessment',
    description: 'We discuss your custom water requirements, survey history, and local geological context to plan highly optimized and accurate field operations.',
    timeframe: 'Day 1',
    icon: 'MessageSquare'
  },
  {
    stepNumber: 2,
    title: 'Geological Surveying',
    description: 'Professional geophysicists use electronic resistivity sounding instruments to locate optimal underground water pathways on your premises.',
    timeframe: 'Day 2',
    icon: 'Map'
  },
  {
    stepNumber: 3,
    title: 'Borehole Drilling',
    description: 'Our truck-mounted drilling rig mobilizes to your site. We drill, install durable PVC casing blocks, secure gravel packet filters, and construct concrete aprons.',
    timeframe: 'Day 3 - 4',
    icon: 'Wrench'
  },
  {
    stepNumber: 4,
    title: 'Installation & Water Testing',
    description: 'We install premium submersible pumps and perform continuous capacity tests to measure your static/dynamic water levels and precise discharge rate.',
    timeframe: 'Day 4',
    icon: 'CheckCircle2'
  },
  {
    stepNumber: 5,
    title: 'Solar & Pump System Setup',
    description: 'Finally, we coordinate the installation of solar panels, anti-theft frames, high-level steel tank structures, and JoJo storage water reservoirs.',
    timeframe: 'Day 5',
    icon: 'Sun'
  }
];

export const STATS = [
  { label: 'Completed Wells', value: 380, suffix: '+' },
  { label: 'Siting Success Rate', value: 98.7, suffix: '%' },
  { label: 'Years Combined Experience', value: 12, suffix: '+' },
  { label: 'Provinces Covered', value: 10, suffix: '/10' }
];

export const GALLERY_ITEMS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'High-Yield Residential Drilling',
    category: 'drilling',
    image: '/src/assets/images/borehole_hero_1779792739231.png',
    location: 'Belvedere, Harare',
    year: '2025'
  },
  {
    id: 'p2',
    title: '15k Litres Irrigation Solar Array',
    category: 'solar',
    image: '/src/assets/images/solar_pump_1779792762637.png',
    location: 'Goromonzi District',
    year: '2025'
  },
  {
    id: 'p3',
    title: 'Geological Siting & Sounding',
    category: 'survey',
    image: '/src/assets/images/geo_survey_1779792784545.png',
    location: 'Borrowdale Brooke, Harare',
    year: '2026'
  },
  {
    id: 'p4',
    title: 'High-Volume Capacity Yield Verification',
    category: 'testing',
    image: '/src/assets/images/water_test_1779792805382.png',
    location: 'Ruwa Industrial Area',
    year: '2025'
  },
  {
    id: 'p5',
    title: 'Commercial Farming Solar Supply Scheme',
    category: 'solar',
    image: '/src/assets/images/solar_pump_1779792762637.png',
    location: 'Chegutu Agricultural lands',
    year: '2026'
  },
  {
    id: 'p6',
    title: 'Sub-Pump & Sanitary Apron Setup',
    category: 'drilling',
    image: '/src/assets/images/water_test_1779792805382.png',
    location: 'Waterfalls, Harare South',
    year: '2026'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Mr. Ignatius Chihuri',
    role: 'Homeowner & Property Developer',
    location: 'Greendale, Harare',
    rating: 5,
    text: 'Harare water challenges made my building project impossible. Drillstar Borehole Solutions came through promptly. Their geological survey matched the exact water depth, and the solar-powered Jojo tank setup provides crystal clean water non-stop. Absolutely professional team!',
    date: 'February 2026'
  },
  {
    id: 't2',
    name: 'Dr. Evelyn Moyo',
    role: 'Director',
    organization: 'Greenfield Academic Center',
    location: 'Bulawayo',
    rating: 5,
    text: 'We needed a secure and high-yield water supply for a boarding school facility. Drillstar handled everything from survey layouts to capacity testing and solar panels with superb engineering precision. Their crew has unmatched work ethics.',
    date: 'April 2026'
  },
  {
    id: 't3',
    name: 'Farm Manager Simba Maposa',
    role: 'Chief Horticultural Specialist',
    organization: 'Maposa Farms PVT',
    location: 'Mazowe District, Central Province',
    rating: 5,
    text: 'Drillstar flushed our old non-performing borehole and deepened it. Their heavy compressor rig did a miraculous job. The continuous water yield went up from 1,200L/hour to 4,800L/hour! It has salvaged our entire winter tobacco crop.',
    date: 'May 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How do you determine the depth of a borehole in Zimbabwe?',
    answer: 'The depth depends strictly on the local underground geological formations. In and around Harare, Belvedere, and Borrowdale, aquifers are typically tapped between 40 to 80 meters, but this is decided and confirmed during our high-accuracy Geological Survey using electronic resistivity mapping.',
    category: 'geology'
  },
  {
    id: 'faq2',
    question: 'What is the advantage of Solar Pumping systems vs Grid power in Zimbabwe?',
    answer: 'Due to ongoing load shedding and grid outages, solar-powered pumps offer a 100% self-sufficient, eco-friendly, and cost-efficient alternative. Our system is automatic: standard panels power the pump during sunlight hours to fill the storage JoJo water tank, so you always have high-pressure gravity water available, even during blackouts.',
    category: 'solar'
  },
  {
    id: 'faq3',
    question: 'Are borehole installation permits required, and do you handle ZINWA applications?',
    answer: 'Yes, a permit is legally required by the Zimbabwe National Water Authority (ZINWA). As Drillstar Borehole Solutions is fully compliant, our team arranges the geological report coordinates and documents required to help you file and get approvals easily.',
    category: 'licensing'
  },
  {
    id: 'faq4',
    question: 'What is Borehole Flushing and when do I need it?',
    answer: 'Borehole Flushing is a high-pressure air cleaning technique. It is highly recommended if your water starts containing silt, clay, looking brown, or when the overall flow yield drops over the years. Flushing clears the blocked water paths at the screen filters and restores pristine clean water passage.',
    category: 'maintenance'
  },
  {
    id: 'faq5',
    question: 'How long does the entire siting, drilling, and installation process take?',
    answer: 'Under standard conditions, the whole process is highly streamlined: Siting takes 1 day, actual drilling & casing installation takes 1-2 days, and our pump and solar water system setups take another 1 day. In total, you will be enjoying fully pressurized, clean water within 3 to 5 business days from layout approval.',
    category: 'drilling'
  },
  {
    id: 'faq6',
    question: 'Do you offer warranty or continuous technical support?',
    answer: 'Yes! We stand behind our work with pride. We provide a solid 3-year structural warranty on borehole stability/drilling casings, and standard manufacturers warranties on our high-efficiency solar panels and premium DC/AC submersible pumps, backed by our 24/7 emergency client response team.',
    category: 'warranty'
  }
];

export const FEATURES = [
  {
    title: 'Professional Drilling Expertise',
    desc: 'Fully registered and compliant hydro-geologists using heavy-duty rigs operating for years.'
  },
  {
    title: 'Modern Truck-Mounted Equipment',
    desc: 'High-power pneumatic rock-hammer drills designed for fast and safe drilling deep into basement granite complexes.'
  },
  {
    title: 'Geological Assessment Solutions',
    desc: 'Electronic resistivity surveys targeting high-yielding fracture reservoirs instead of dry holes.'
  },
  {
    title: 'Reliable Certified Installations',
    desc: 'Top-grade Class 9/12 casing pipe structures, double filtering gravel packs, and steel secure pump aprons.'
  },
  {
    title: 'Long-Term Water Solutions',
    desc: 'System setups calculated for multi-decade life expectancy keeping static water tables stable.'
  },
  {
    title: 'Fast Response Times',
    desc: 'Dedicated field survey crews and rapid mobilization across Harare and surrounding national provinces.'
  },
  {
    title: 'Residential & Commercial',
    desc: 'From simple residential household systems in Belvedere to automated massive agricultural irrigation setups.'
  }
];
