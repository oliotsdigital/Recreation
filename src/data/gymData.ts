export interface Program {
  id: string;
  title: string;
  category: 'calisthenics' | 'strength' | 'mobility' | 'youth' | 'private' | 'functional' | 'dance';
  tagline: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  frequency: string;
  coach?: string;
  description: string;
  highlights: string[];
  skillsTargeted: string[];
  image: string;
}

export interface ScheduleItem {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  shortDay: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
  time: string;
  slotType: 'Morning' | 'Evening';
  title: string;
  discipline: string;
  intensity: 'Low' | 'Medium' | 'High' | 'Extreme';
  spotsAvailable: number;
  totalSpots: number;
  room: string;
  isRest?: boolean;
}

export const CLUB_INFO = {
  name: 'Recreation Calisthenics Fitness Club',
  slogan: "Let's Recreate Your Self",
  phone: '7350886383',
  secondaryPhone: '8806404615',
  phoneDisplay: '7350886383 / 8806404615',
  phoneFormatted: '+91 73508 86383 / +91 88064 04615',
  allPhones: ['7350886383', '8806404615'],
  instagram: '@RECREATION_CALIFITNESSCLUB',
  instagramHandle: '@recreation_califitnessclub',
  instagramUrl: 'https://instagram.com/recreation_califitnessclub',
  address: 'Pink City Road, Near Euro School, Wakad, Pune.',
  shortLocation: 'Wakad, Pune',
  city: 'Pune, Maharashtra',
  email: 'club@recreationcaliclub.com',
  timings: {
    morning: '6AM to 12Noon',
    evening: '5PM to 10:30PM',
    days: 'Monday To Saturday',
    sunday: 'Sunday Closed',
  },
};

export const GYM_TIMINGS = {
  title: 'Gym Timings',
  morning: '6AM to 12Noon',
  evening: '5PM to 10:30PM',
  days: 'Monday To Saturday',
  sunday: 'Sunday Closed',
  contactNumbers: ['7350886383', '8806404615'],
};

export interface FeeTier {
  id: string;
  duration: string;
  amount: number;
  amountFormatted: string;
  offer: string;
  totalMonths: number;
  perMonthCost: number | null;
  perMonthFormatted: string;
  badge?: string;
  popular?: boolean;
  bestValue?: boolean;
  description: string;
  features: string[];
}

export const CLUB_FEES: FeeTier[] = [
  {
    id: '1-month',
    duration: '1 Month',
    amount: 3500,
    amountFormatted: '3500/-',
    offer: '-',
    totalMonths: 1,
    perMonthCost: null,
    perMonthFormatted: '-',
    badge: 'FLEXIBLE ACCESS',
    description: '1 month complete access to calisthenics rigs, free weights arena, and workout batches.',
    features: [
      'Full Gym & Rig Floor Access',
      'Morning (6AM to 12Noon) & Evening (5PM to 10:30PM)',
      'Monday To Saturday Workout Batches',
      'Locker room & hydration amenities',
      'Baseline strength & movement screening',
    ],
  },
  {
    id: '2-months',
    duration: '2 Months',
    amount: 6000,
    amountFormatted: '6000/-',
    offer: '1 Month',
    totalMonths: 3,
    perMonthCost: 2000,
    perMonthFormatted: '2000/-',
    badge: '+1 MONTH FREE (3 MOS TOTAL)',
    description: 'Pay for 2 months and get 1 bonus month completely free (3 months total).',
    features: [
      '3 Months Total Access (2 Paid + 1 Free)',
      'Effective Rate: Just ₹2000/- per month',
      'Morning (6AM-12PM) & Evening (5PM-10:30PM)',
      'Monday To Saturday Rig Access',
      'Structured calisthenics progression guide',
    ],
  },
  {
    id: '5-months',
    duration: '5 Months',
    amount: 9000,
    amountFormatted: '9000/-',
    offer: '3 Months',
    totalMonths: 8,
    perMonthCost: 1125,
    perMonthFormatted: '1125/-',
    badge: '+3 MONTHS FREE (8 MOS TOTAL)',
    description: 'Pay for 5 months and get 3 bonus months free — 8 full months of athletic training.',
    features: [
      '8 Months Total Access (5 Paid + 3 Free)',
      'Effective Rate: Just ₹1125/- per month',
      'Save over 65% compared to single-month rate',
      'Morning & Evening Batches (Mon - Sat)',
      'Advanced skill tracking & body composition',
    ],
  },
  {
    id: '6-months',
    duration: '6 Months',
    amount: 12000,
    amountFormatted: '12000/-',
    offer: '6 Months',
    totalMonths: 12,
    perMonthCost: 1000,
    perMonthFormatted: '1000/-',
    badge: '100% FREE BONUS • BEST VALUE',
    popular: true,
    bestValue: true,
    description: 'Pay for 6 months and receive 6 MONTHS FREE — enjoy 1 FULL YEAR (12 Months) for just ₹12,000/-!',
    features: [
      '12 Months Total Access (6 Paid + 6 Free!)',
      'Effective Rate: Flat ₹1000/- per month',
      'Full 1-Year Gym & Calisthenics Rig Access',
      'Morning & Evening Batches (Mon - Sat)',
      'Priority rig spots, guest passes & event invites',
    ],
  },
  {
    id: '12-months',
    duration: '12 Months',
    amount: 14000,
    amountFormatted: '14000/-',
    offer: '3 Months',
    totalMonths: 15,
    perMonthCost: 933,
    perMonthFormatted: '933/-',
    badge: 'LOWEST PER-MONTH RATE (₹933/MO)',
    description: 'Pay for 12 months and receive 3 bonus months — 15 months total at an unbelievable ₹933/- per month.',
    features: [
      '15 Months Total Access (12 Paid + 3 Free)',
      'Lowest Rate: Only ₹933/- per month',
      'Long-term transformation & mastery warranty',
      'Morning & Evening Batches (Mon - Sat)',
      'VIP member perks & merchandise discounts',
    ],
  },
];

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  signatureMove: string;
  bio: string;
  certifications: string[];
  skills: string[];
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: 'starter' | 'pro' | 'vip';
  monthlyPrice: number;
  annualMonthlyPrice: number;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  badge?: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'calisthenics',
    title: 'Calisthenics & Street Workout',
    category: 'calisthenics',
    tagline: 'Master your own bodyweight with bar skills, levers, dips, and gravity-defying holds.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '5x / week',
    description: 'Our flagship calisthenics system. Build unmatched upper-body strength, strict muscle-ups, straight-arm static holds (planche, front lever), and parallel bar flow under master trainers.',
    highlights: [
      'Strict Pull-ups & Ring Dips mechanics',
      'Bar & Ring Muscle-Up progression',
      'Planche & Front Lever isometric torque',
      'Freestyle flow, spins & dismounts'
    ],
    skillsTargeted: ['Muscle-Up', 'Full Planche', 'Front Lever', 'Human Flag', 'Handstand'],
    image: '/images/hero-athlete.jpg'
  },
  {
    id: 'kids-batch',
    title: 'Kids Batch (Gymnastics & Agility)',
    category: 'youth',
    tagline: 'Fun, structured physical literacy, coordination, and fundamental bodyweight mastery.',
    level: 'Beginner',
    duration: '50 Mins',
    frequency: '3x / week',
    description: 'A playful yet disciplined youth gymnastics and agility program. Designed to develop spatial awareness, core resilience, upper-body pulling strength, and confidence on soft mats and low rings.',
    highlights: [
      'Gymnastics floor tumbling & rolls',
      'Hanging, swinging & monkey bar agility',
      'Balance beams & spatial awareness drills',
      'Safe landing mechanics & injury resilience'
    ],
    skillsTargeted: ['Agility', 'Coordination', 'Core Balance', 'Gymnastics Rolls', 'Patience & Focus'],
    image: '/images/facility.jpg'
  },
  {
    id: 'strength-training',
    title: 'Strength Training & Hypertrophy',
    category: 'strength',
    tagline: 'Compound iron loading engineered to build dense athletic muscle and structural durability.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '4x / week',
    description: 'A scientifically periodized barbell and dumbbell hypertrophy curriculum. Built to increase lean muscle tissue, reinforce tendons for heavy calisthenics loading, and sculpt a powerful physique.',
    highlights: [
      'Squat, Bench Press, and Overhead Press',
      'Hypertrophy accessory cycles with dumbbells',
      'Targeted posterior chain & core bracing',
      'Progressive overload tracking'
    ],
    skillsTargeted: ['Barbell Squat', 'Bench Press', 'Upper Body Mass', 'Structural Balance'],
    image: '/images/facility.jpg'
  },
  {
    id: 'power-lifting',
    title: 'Power Lifting Club',
    category: 'strength',
    tagline: 'The pursuit of maximum 1-Rep single power across Squat, Bench Press, and Deadlift.',
    level: 'Intermediate',
    duration: '75 Mins',
    frequency: '4x / week',
    description: 'For lifters committed to moving the heaviest iron possible. Master competition technique, leg drive, bracing under maximal loads, and nervous system activation with IPF-standard equipment.',
    highlights: [
      'Maximal Squat, Bench, and Deadlift cycles',
      'RPE & velocity-based training protocols',
      'Competition arch, leg drive & grip lock',
      'Meet preparation & attempt peaking'
    ],
    skillsTargeted: ['1RM Deadlift', 'Maximal Bench', 'Competition Squat', 'Central Nervous Drive'],
    image: '/images/facility.jpg'
  },
  {
    id: 'crossfit',
    title: 'CrossFit & MetCon',
    category: 'strength',
    tagline: 'Constantly varied, high-intensity functional movement for peak work capacity.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '5x / week',
    description: 'High-octane conditioning combining Olympic weightlifting, kettlebell cycles, gymnastics bar work, and rowing sprint intervals into intense, supportive community-driven WODs.',
    highlights: [
      'Daily functional WODs (Workout of the Day)',
      'Kettlebell swings, cleans & snatches',
      'Box jumps, wall balls & rowing intervals',
      'High lactate threshold conditioning'
    ],
    skillsTargeted: ['WOD Conditioning', 'Kettlebell Cycles', 'Aerobic Capacity', 'Speed & Stamina'],
    image: '/images/hero-athlete.jpg'
  },
  {
    id: 'functional-training',
    title: 'Functional Training & Athletic Conditioning',
    category: 'functional',
    tagline: 'Train movement patterns, not just isolated muscles, for real-world kinetic performance.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '4x / week',
    description: 'Dynamic athletic conditioning incorporating plyometrics, battle ropes, medicine balls, sled pushes, and unilateral loading to develop multi-planar rotational power and speed.',
    highlights: [
      'Sled pushes & sprint turf acceleration',
      'Kettlebell & dumbbell multi-planar complexes',
      'Rotational core power & medicine ball slams',
      'Cardiorespiratory endurance'
    ],
    skillsTargeted: ['Rotational Power', 'Plyometric Speed', 'Unilateral Balance', 'Stamina'],
    image: '/images/facility.jpg'
  },
  {
    id: 'yoga',
    title: 'Yoga (Vinyasa & Hatha Flow)',
    category: 'mobility',
    tagline: 'Harmonize breath with active flexibility, spinal longevity, and mindful recovery.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '4x / week',
    description: 'Deep somatic flow blending active flexibility, hip opening, thoracic extension, and mindful breathing. Crucial for unwinding heavy training tension and preventing calisthenics joint impingements.',
    highlights: [
      'Vinyasa breath-to-movement synchronization',
      'Deep hip openers & hamstring lengthening',
      'Spinal decompression & thoracic mobility',
      'Pranayama breathwork & mindful recovery'
    ],
    skillsTargeted: ['Active Flexibility', 'Spinal Health', 'Pranayama', 'Balance Control'],
    image: '/images/flow-yoga.jpg'
  },
  {
    id: 'zumba',
    title: 'Zumba Fitness Party',
    category: 'dance',
    tagline: 'High-energy Latin and global rhythm dance workout that burns 600+ calories with a smile.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '3x / week',
    description: 'An exhilarating dance fitness workout blending upbeat Latin salsa, merengue, reggaeton, and pop beats into an infectious, high-calorie cardio party where anyone can follow along.',
    highlights: [
      'Calorie-torching high-energy dance cardio',
      'Salsa, Reggaeton, Merengue & Cumbia steps',
      'Rhythmic coordination & cardiovascular health',
      'Uplifting, high-vibe group energy'
    ],
    skillsTargeted: ['Dance Cardio', 'Rhythm & Footwork', 'Cardio Stamina', 'Endorphin Boost'],
    image: '/images/dance-fitness.jpg'
  },
  {
    id: 'bollywood-dance',
    title: 'Bollywood Dance Fitness',
    category: 'dance',
    tagline: 'Electrifying, dramatic cinematic Bollywood choreo paired with total-body cardio conditioning.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '3x / week',
    description: 'Channel your inner Bollywood star! High-octane Indian film choreography set to the hottest energetic tracks. Fast footwork, expressive hand gestures, and a sweat-drenched cardiovascular rush.',
    highlights: [
      'High-energy Indian cinematic choreography',
      'Full body aerobic & anaerobic conditioning',
      'Expressive dynamic coordination & bounce',
      'Fun, community-celebrated workout vibe'
    ],
    skillsTargeted: ['Bollywood Choreo', 'Bhangra Cardio', 'Expressive Agility', 'High Calorie Burn'],
    image: '/images/dance-fitness.jpg'
  },
  {
    id: 'animal-flow',
    title: 'Animal Flow Ground Movement',
    category: 'mobility',
    tagline: 'Quadrupedal ground-based movement combining gymnastics, breakdance, and capoeira.',
    level: 'All Levels',
    duration: '60 Mins',
    frequency: '3x / week',
    description: 'A revolutionary ground-based movement system. Master Beast, Crab, and Ape transitions, Crab Reach, Scorpion Sweeps, and fluid flow sequences that build bulletproof wrists and extraordinary body control.',
    highlights: [
      'Wrist preparation & quadrupedal crawling',
      'Beast Reach, Crab Reach & Scorpion Sweeps',
      'Side Kick-Throughs & rotational transitions',
      'Continuous ground flow choreography'
    ],
    skillsTargeted: ['Wrist Bulletproofing', 'Ground Flow', 'Shoulder Stability', 'Scorpion Sweep'],
    image: '/images/flow-yoga.jpg'
  },
  {
    id: 'workshops',
    title: 'Calisthenics Skill Workshops & Clinics',
    category: 'calisthenics',
    tagline: 'Intensive deep-dive clinics dedicated to cracking specific straight-arm and bar milestones.',
    level: 'All Levels',
    duration: '90 - 120 Mins',
    frequency: 'Bi-Weekly / Weekends',
    description: 'Dedicated weekend intensives focusing entirely on single high-level moves: Planche clinics, Strict Muscle-Up labs, Handstand alignment bootcamps, and 3D gymnastic rings mastery with video feedback.',
    highlights: [
      'Micro-biomechanics & torque cueing',
      'Slow-motion video analysis & form checks',
      'Individual progression drill customization',
      'Tendon conditioning & safety spotting'
    ],
    skillsTargeted: ['Muscle-Up Clinic', 'Planche Lab', 'Handstand Immersion', 'Video Form Check'],
    image: '/images/planche.jpg'
  }
];

export const SCHEDULE_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

export const SCHEDULE_DATA: ScheduleItem[] = [
  // Monday
  {
    id: 'mon-morning',
    day: 'Monday',
    shortDay: 'MON',
    time: '7:30 AM - 8:30 AM',
    slotType: 'Morning',
    title: 'CALISTHENICS',
    discipline: 'Calisthenics',
    intensity: 'High',
    spotsAvailable: 6,
    totalSpots: 16,
    room: 'Main Calisthenics Arena'
  },
  {
    id: 'mon-evening',
    day: 'Monday',
    shortDay: 'MON',
    time: '7:30 PM - 8:30 PM',
    slotType: 'Evening',
    title: 'CALISTHENICS',
    discipline: 'Calisthenics',
    intensity: 'High',
    spotsAvailable: 4,
    totalSpots: 16,
    room: 'Main Calisthenics Arena'
  },

  // Tuesday
  {
    id: 'tue-morning',
    day: 'Tuesday',
    shortDay: 'TUE',
    time: '7:30 AM - 8:30 AM',
    slotType: 'Morning',
    title: 'CALISTHENICS',
    discipline: 'Calisthenics',
    intensity: 'High',
    spotsAvailable: 8,
    totalSpots: 16,
    room: 'Main Calisthenics Arena'
  },
  {
    id: 'tue-evening',
    day: 'Tuesday',
    shortDay: 'TUE',
    time: '7:30 PM - 8:30 PM',
    slotType: 'Evening',
    title: 'CALISTHENICS',
    discipline: 'Calisthenics',
    intensity: 'High',
    spotsAvailable: 5,
    totalSpots: 16,
    room: 'Main Calisthenics Arena'
  },

  // Wednesday
  {
    id: 'wed-morning',
    day: 'Wednesday',
    shortDay: 'WED',
    time: '7:30 AM - 8:30 AM',
    slotType: 'Morning',
    title: 'YOGA',
    discipline: 'Yoga',
    intensity: 'Low',
    spotsAvailable: 9,
    totalSpots: 18,
    room: 'Flow & Mobility Studio'
  },
  {
    id: 'wed-evening',
    day: 'Wednesday',
    shortDay: 'WED',
    time: '7:30 PM - 8:30 PM',
    slotType: 'Evening',
    title: 'YOGA',
    discipline: 'Yoga',
    intensity: 'Low',
    spotsAvailable: 7,
    totalSpots: 18,
    room: 'Flow & Mobility Studio'
  },

  // Thursday
  {
    id: 'thu-morning',
    day: 'Thursday',
    shortDay: 'THU',
    time: '7:30 AM - 8:30 AM',
    slotType: 'Morning',
    title: 'CALISTHENICS ANIMAL FLOW',
    discipline: 'Animal Flow',
    intensity: 'Medium',
    spotsAvailable: 5,
    totalSpots: 16,
    room: 'Ground Movement & Mobility Arena'
  },
  {
    id: 'thu-evening',
    day: 'Thursday',
    shortDay: 'THU',
    time: '7:30 PM - 8:30 PM',
    slotType: 'Evening',
    title: 'CALISTHENICS ANIMAL FLOW',
    discipline: 'Animal Flow',
    intensity: 'Medium',
    spotsAvailable: 3,
    totalSpots: 16,
    room: 'Ground Movement & Mobility Arena'
  },

  // Friday
  {
    id: 'fri-morning',
    day: 'Friday',
    shortDay: 'FRI',
    time: '7:30 AM - 8:30 AM',
    slotType: 'Morning',
    title: 'CALISTHENICS CROSSFIT',
    discipline: 'CrossFit',
    intensity: 'Extreme',
    spotsAvailable: 4,
    totalSpots: 16,
    room: 'CrossFit & Conditioning Rig'
  },
  {
    id: 'fri-evening',
    day: 'Friday',
    shortDay: 'FRI',
    time: '7:30 PM - 8:30 PM',
    slotType: 'Evening',
    title: 'CALISTHENICS CROSSFIT',
    discipline: 'CrossFit',
    intensity: 'Extreme',
    spotsAvailable: 2,
    totalSpots: 16,
    room: 'CrossFit & Conditioning Rig'
  },

  // Saturday
  {
    id: 'sat-morning',
    day: 'Saturday',
    shortDay: 'SAT',
    time: '7:30 AM - 8:30 AM',
    slotType: 'Morning',
    title: 'CALISTHENICS SKILLS',
    discipline: 'Skills',
    intensity: 'High',
    spotsAvailable: 6,
    totalSpots: 18,
    room: 'Skill Rig & Parallettes Arena'
  },
  {
    id: 'sat-evening',
    day: 'Saturday',
    shortDay: 'SAT',
    time: '7:30 PM - 8:30 PM',
    slotType: 'Evening',
    title: 'ZUMBA AND SKILLS',
    discipline: 'Zumba',
    intensity: 'Medium',
    spotsAvailable: 8,
    totalSpots: 20,
    room: 'Dance Fitness & Skill Studio'
  },

  // Sunday
  {
    id: 'sun-morning',
    day: 'Sunday',
    shortDay: 'SUN',
    time: '7:30 AM - 8:30 AM',
    slotType: 'Morning',
    title: '-',
    discipline: 'Rest & Open Rig',
    intensity: 'Low',
    spotsAvailable: 20,
    totalSpots: 25,
    room: 'Open Rig Self-Practice',
    isRest: true
  },
  {
    id: 'sun-evening',
    day: 'Sunday',
    shortDay: 'SUN',
    time: '7:30 PM - 8:30 PM',
    slotType: 'Evening',
    title: '-',
    discipline: 'Rest & Open Rig',
    intensity: 'Low',
    spotsAvailable: 20,
    totalSpots: 25,
    room: 'Open Rig Self-Practice',
    isRest: true
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'static-strength',
    name: 'Calisthenics & Static Strength Team',
    role: 'Static Strength & Straight-Arm Protocols',
    experience: '10+ Years Coaching',
    signatureMove: 'Full Planche to Handstand Press',
    bio: 'Specializing in biomechanical straight-arm torque development, tendon resilience protocols, and unlocking impossible static holds like Planche and Front Lever.',
    certifications: ['WSWCF Certified Master Training', 'Artistic Gymnastics Certification', 'Biomechanics Specialist (NASM)'],
    skills: ['Full Planche', 'Front Lever', 'Maltese', 'Hefesto'],
    avatar: '/images/planche.jpg'
  },
  {
    id: 'gymnastic-rings',
    name: 'Gymnastic Rings & Hand Balancing Faculty',
    role: 'Rings 3D Stability & Inversion Dynamics',
    experience: '9+ Years Coaching',
    signatureMove: 'Straight-Arm Press Handstand & RTO Cross',
    bio: 'Guiding athletes through wrist preparation, scapular elevation mechanics, and unlocking flawless 60-second freestanding handstands and ring stabilization.',
    certifications: ['FIG Gymnastics Certified', 'Movement & Mobility Master Faculty', 'Precision Nutrition L1'],
    skills: ['Handstand Press', 'Iron Cross', 'Skin The Cat', 'Pelican Curls'],
    avatar: '/images/rings.jpg'
  },
  {
    id: 'freestyle',
    name: 'Dynamic Freestyle & Explosive Power Team',
    role: 'Bar Dynamics & Freestyle Combinations',
    experience: '8+ Years Coaching',
    signatureMove: '540 Bar Spin into Strict Muscle-Up',
    bio: 'Coaching the kinetic transfer between explosive pulling and airborne agility, demystifying the strict muscle-up and dynamic bar flow.',
    certifications: ['World Calisthenics Organization Certified', 'Olympic Weightlifting Club Faculty'],
    skills: ['Clean Bar Muscle-Up', '360 / 540 Spins', 'Shrimp Flip', 'Human Flag'],
    avatar: '/images/hero-athlete.jpg'
  },
  {
    id: 'strength-conditioning',
    name: 'Strength & Conditioning Faculty',
    role: 'Barbell Hypertrophy & Posterior Chain Power',
    experience: '12+ Years Coaching',
    signatureMove: '+70kg Weighted Pull-up & 260kg Deadlift',
    bio: 'Bridging the raw power of barbell lifting with bodyweight agility to develop structural joint balance, raw compound power, and peak relative strength.',
    certifications: ['CSCS (Certified Strength & Conditioning Specialist)', 'USAW National Certified', 'FMS Level 2'],
    skills: ['Weighted Calisthenics', 'Olympic Weightlifting', 'Powerlifting', 'Kettlebell Sport'],
    avatar: '/images/facility.jpg'
  },
  {
    id: 'foundations',
    name: 'Foundations & Youth Academy Team',
    role: 'Beginner Progression & Youth Agility',
    experience: '8+ Years Coaching',
    signatureMove: 'One-Arm Pull-up & Strict L-Sit to V-Sit',
    bio: 'Guiding hundreds of beginners from zero pull-ups to their first strict muscle-up through methodical progressive overload and joint longevity.',
    certifications: ['ACE Certified Training Faculty', 'WSWCF Certified', 'Kinstretch Specialist'],
    skills: ['Strict Pull-ups', 'Bar Dips', 'Dragon Flag', 'V-Sit'],
    avatar: '/images/hero-athlete.jpg'
  },
  {
    id: 'mobility',
    name: 'Mobility & Fascial Restoration Team',
    role: 'Active Flexibility & Spinal Decompression',
    experience: '8+ Years Coaching',
    signatureMove: 'Full Active Pancake & 180° Shoulder Dislocate',
    bio: 'Helping athletes unlock deep ranges of motion that protect joints under extreme torque through loaded stretching and myofascial restoration.',
    certifications: ['FRC (Functional Range Conditioning) Mobility Specialist', 'Kinstretch Certified', 'Sports Massage Therapy'],
    skills: ['Pancake Stretch', 'Front Splits', 'Thoracic Bridge', 'Scapular Control'],
    avatar: '/images/flow-yoga.jpg'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-athlete',
    name: 'Starter Athlete',
    tier: 'starter',
    monthlyPrice: 69,
    annualMonthlyPrice: 55,
    description: 'Perfect for beginners building foundational bodyweight strength and regular gym gym-goers looking to start calisthenics.',
    features: [
      'Full Access to Gym & Calisthenics Rigs (Mon - Fri 6am - 10pm)',
      '2 Calisthenics Foundations classes per week',
      'Locker room, power showers & sauna access',
      'Initial Calisthenics Skill & Mobility Assessment',
      'Mobile App access for training logs & rig check-ins'
    ],
    notIncluded: [
      'Unlimited Advanced Skill Clinics (Planche / Muscle-Up)',
      'Weekend Open Rig Jams priority access',
      'Monthly 1-on-1 technique review'
    ]
  },
  {
    id: 'calisthenics-pro',
    name: 'Calisthenics Pro',
    tier: 'pro',
    monthlyPrice: 119,
    annualMonthlyPrice: 95,
    popular: true,
    badge: 'MOST POPULAR',
    description: 'Our flagship membership for dedicated athletes determined to unlock muscle-ups, handstands, and levers.',
    features: [
      'UNLIMITED access to all Calisthenics & Strength areas 7 days/week',
      'UNLIMITED Classes (Foundations, Planche, Rings, Muscle-Up)',
      'Weekend Open Rig Jam access & guided spotting',
      'Full Olympic Barbell & Free Weights Zone access',
      'InBody 770 Body Composition scan every 6 weeks',
      'Custom Skill Progression Roadmap with monthly check-in',
      '15% discount on Workshops & Calisthenics Apparel'
    ]
  },
  {
    id: 'recreation-vip',
    name: 'Recreation VIP All-Access',
    tier: 'vip',
    badge: 'ULTIMATE ATHLETE',
    monthlyPrice: 189,
    annualMonthlyPrice: 149,
    description: 'The elite experience for athletes wanting direct mentorship, dedicated coaching, and VIP amenities.',
    features: [
      '24/7 VIP Access to Recreation Calisthenics Club',
      'Two 60-Minute 1-on-1 Private Coaching Sessions each month',
      'Unlimited access to all Group Classes & Masterclass Clinics',
      'Dedicated Recovery Zone (Infrared Sauna, Cold Plunge, Normatec boots)',
      'Custom Video Movement Analysis by Head Training Faculty',
      'Complimentary Guest Passes (2 per month)',
      'Complimentary Recreation Cali Club Gym Bag & Chalk Kit'
    ]
  }
];

export const PASSES = [
  {
    name: 'Day Drop-In Pass',
    price: '$25',
    desc: 'Full day access to all calisthenics rigs, bars, rings, and free weights gym.',
    badge: 'Visiting Athlete'
  },
  {
    name: '10-Class Skill Punch Card',
    price: '$190',
    desc: 'Valid for 6 months across any coached class (Muscle-up, Planche, Rings, Mobility).',
    badge: 'Flexible Training'
  },
  {
    name: 'Weekend Masterclass Pass',
    price: '$45',
    desc: 'Access to Saturday & Sunday 90-min intensive clinics with master coaches.',
    badge: 'Weekend Intensive'
  }
];

export const PROGRESSION_STEPS = [
  {
    level: 'Level 1',
    title: 'Kinetic Foundation',
    skills: ['10 Strict Pull-Ups', '15 Clean Parallel Dips', '25 Diamond Pushups', '60s Hollow Body Hold'],
    focus: 'Joint conditioning, tendon sheath adaptation, and scapular depression.'
  },
  {
    level: 'Level 2',
    title: 'Inversion & Core Lock',
    skills: ['Wall Handstand (45s)', 'L-Sit on Parallettes (20s)', 'Skin-The-Cat on Rings', 'Dragon Flag Negatives'],
    focus: 'Wrist resilience, straight-arm balance, and anterior chain compression.'
  },
  {
    level: 'Level 3',
    title: 'Airborne Power & Dynamics',
    skills: ['Strict Bar Muscle-Up', 'Rings Muscle-Up', 'Freestanding Handstand (15s)', 'Human Flag (5s)'],
    focus: 'Explosive high-pull rate of force, false grip efficiency, and rotational torque.'
  },
  {
    level: 'Level 4',
    title: 'Static Mastery',
    skills: ['Straddle Planche (5s)', 'Full Front Lever (10s)', 'Handstand Pushup (Strict)', 'Back Lever'],
    focus: 'Extreme straight-arm bicep tendon torque, lat lock, and glute-core tension.'
  },
  {
    level: 'Level 5',
    title: 'Gravity Defier',
    skills: ['Full Planche on Rings', 'Maltese Hold', 'One-Arm Chin-Up', 'Hefesto on High Bar'],
    focus: 'Elite world-class calisthenics mastery and superhuman relative power.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Julian Mercer',
    role: 'Software Architect & Calisthenics Athlete',
    achievement: 'Unlocked Strict Muscle-Up & 8s Front Lever',
    content: 'Before joining Recreation, I spent 2 years trying to get my first muscle-up through random YouTube tutorials. The coaches here broke down my false grip and high-pull mechanics in week one. In 35 days, I achieved my first clean muscle-up. The atmosphere in this gym is unmatched.',
    rating: 5
  },
  {
    name: 'Soraya Patel',
    role: 'CrossFit Athlete & Rings Specialist',
    achievement: 'Achieved 45s Freestanding Handstand',
    content: 'The ring setup and parallettes equipment here are the best in the state. The coaching staff pays obsessive attention to joint health, so I have zero wrist or shoulder pain while mastering strict handstand pushups.',
    rating: 5
  },
  {
    name: 'David Kowalski',
    role: 'Fitness Enthusiast',
    achievement: 'Lost 18kg & Gained +40kg Weighted Pull-up',
    content: 'Recreation Cali isn’t just a gym; it’s a culture. The combination of heavy iron lifting and raw calisthenics transforms your physique faster than anything else. Recreated my entire self here!',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'I cannot do a single pull-up. Can I still join Recreation Calisthenics Club?',
    answer: 'Absolutely! More than 60% of our members began without a single pull-up. Our Calisthenics Foundations program uses resistance bands, low bars, Australian rows, and eccentric dip protocols to build you safely from step zero to your first strict pull-up within weeks.'
  },
  {
    question: 'How is Recreation Calisthenics different from standard commercial gyms?',
    answer: 'Traditional gyms have machines designed for isolated muscle movements. Recreation is purpose-built for functional human power: custom high-bar rigs, Olympic gymnastic rings, custom parallettes, stall bars, turf sprint lanes, paired with Olympic lifting platforms and heavy dumbbells. Plus, our members train together in a supportive, high-energy community.'
  },
  {
    question: 'What is included in the Free Trial Assessment?',
    answer: 'Your 60-minute Free Trial Assessment includes: 1) Movement screen & joint mobility evaluation, 2) Baseline push/pull/core strength benchmark test, 3) Guided trial of our calisthenics rigs with a master coach, and 4) A customized roadmap outlining your fastest path to your target skills (Muscle-Up, Planche, Handstand, or General Strength).'
  },
  {
    question: 'Are classes included in the memberships?',
    answer: 'Yes! The Calisthenics Pro and Recreation VIP memberships include unlimited access to all group classes and skill clinics. Starter Athlete members receive 2 coached classes weekly plus open gym.'
  },
  {
    question: 'Do you offer 1-on-1 private coaching?',
    answer: 'Yes, our master trainers provide dedicated 1-on-1 skill mentorship for Planche, Front Lever, Handstand Balancing, Weighted Calisthenics, and competition preparation.'
  }
];
