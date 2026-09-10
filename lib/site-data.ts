export const CONTACT = {
  email: 'ecooilazerbaijan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ecooil-azerbaijan-5113423a1/',
  youtube: 'https://youtu.be/4xB79LGIWMk?si=u1XcgWrYdXaRxCvA',
  youtubeId: '4xB79LGIWMk',
}

export const NAV_LINKS = [
  { label: 'Technology', href: '#technology' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#testing' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Prototype', href: '#prototype' },
  { label: 'Video', href: '#video' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export type PrototypeComponent = {
  id: string
  name: string
  description: string
  image: string
}

// Complete Prototype is presented as the main image; the gallery lists the parts.
export const prototypeComponents: PrototypeComponent[] = [
  {
    id: 'fresnel-lens',
    name: 'Fresnel Lens',
    description: 'Used to concentrate incoming sunlight toward the photovoltaic area.',
    image: '/images/prototype/components/fresnel-lens.jpg',
  },
  {
    id: 'solar-panel',
    name: 'Solar Panel',
    description: 'Photovoltaic element used in the EcoOil prototype.',
    image: '/images/prototype/components/solar-panel.jpg',
  },
  {
    id: 'temperature-sensor',
    name: 'Temperature Sensor',
    description: 'Used for temperature monitoring within the prototype system.',
    image: '/images/prototype/components/temperature-sensor.jpg',
  },
  {
    id: 'arduino-nano',
    name: 'Arduino Nano',
    description: 'Microcontroller used for monitoring and system control.',
    image: '/images/prototype/components/arduino-nano.jpg',
  },
  {
    id: 'cooling-system',
    name: 'Cooling System',
    description: 'Active thermal-management subsystem.',
    image: '/images/prototype/components/cooling-system.jpg',
  },
  {
    id: 'pump',
    name: 'Pump',
    description: 'Used as part of the prototype cooling loop.',
    image: '/images/prototype/components/pump.jpg',
  },
  {
    id: 'fan-radiator',
    name: 'Fan / Radiator',
    description: 'Used to assist heat dissipation.',
    image: '/images/prototype/components/fan-radiator.jpg',
  },
  {
    id: 'hc06',
    name: 'HC-06 Bluetooth Module',
    description: 'Used for wireless communication in the prototype.',
    image: '/images/prototype/components/hc06.jpg',
  },
  {
    id: 'prototype-housing',
    name: 'Prototype Housing',
    description: 'Physical enclosure of the EcoOil prototype.',
    image: '/images/prototype/components/prototype-housing.jpg',
  },
]

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Capture',
    description: 'Solar radiation reaches the Fresnel lens.',
  },
  {
    number: '02',
    title: 'Concentrate',
    description: 'The Fresnel lens concentrates incoming sunlight toward the solar panel area.',
  },
  {
    number: '03',
    title: 'Monitor',
    description: 'Temperature is monitored within the system.',
  },
  {
    number: '04',
    title: 'Respond',
    description: 'The cooling system responds when the configured thermal condition is reached.',
  },
  {
    number: '05',
    title: 'Protect',
    description: 'The cooling system helps manage the thermal condition of the prototype.',
  },
]

export const technologyFlow = [
  'Sunlight',
  'Fresnel Lens',
  'Solar Panel',
  'Temperature Monitoring',
  'Cooling Control',
  'Cooling System',
  'Thermal Management',
]

export const specifications = [
  { label: 'Fresnel Lens', value: 'Approximately 40 × 30 cm' },
  { label: 'Solar Panel', value: 'Approximately 40 × 30 cm' },
  { label: 'Internal Prototype Structure', value: 'Approximately 20 cm internal body / pipe area' },
  { label: 'Controller', value: 'Arduino Nano' },
  { label: 'Temperature Sensor', value: 'DHT22' },
  { label: 'Communication', value: 'HC-06 Bluetooth' },
  { label: 'Cooling', value: 'Pump + fan / radiator' },
  { label: 'Prototype Housing', value: 'Wooden prototype enclosure' },
]

export const testingAreas = [
  {
    title: 'Temperature',
    description: 'Thermal readings recorded across the prototype during operation.',
  },
  {
    title: 'Performance',
    description: 'Observations on how the system behaves under solar concentration.',
  },
  {
    title: 'Operating Conditions',
    description: 'Environmental and operational context for each test session.',
  },
]

export const timeline = [
  {
    year: '2025',
    title: 'CESECO — Clean Energy Program',
    description: 'Participation in the CESECO clean-energy program.',
  },
  {
    year: '2025',
    title: 'GREENSTEAM SAF Festival',
    description: '2nd Place at the GREENSTEAM SAF 2025 Azerbaijan Festival.',
  },
  {
    year: '2025',
    title: 'Sabahın alimləri',
    description:
      '2nd Place at the XIV Republican Project Competition in Ecology & Environmental Management.',
  },
]

export type TeamMember = {
  name: string
  role: string
  org?: string
  responsibilities: string[]
  image: string
}

export const team: TeamMember[] = [
  {
    name: 'Roman Ahmadov',
    role: 'Founder',
    responsibilities: [
      'Project development',
      'Construction',
      'Engineering',
      'Electrical systems',
      'Overall technical development',
    ],
    image: '/images/team/roman-ahmadov.jpg',
  },
  {
    name: 'Azizagha Azizov',
    role: 'CEO',
    responsibilities: [
      'Presentations',
      'Promotion',
      'Advertising ideas',
      'Creative and communication activities',
    ],
    image: '/images/team/azizagha-azizov.jpg',
  },
  {
    name: 'Dogukan Gun',
    role: 'Manager — Operational Technology',
    org: 'Socardownstream Management LLC',
    responsibilities: ['Operational Technology', 'Technical / operational management'],
    image: '/images/team/dogukan-gun.jpg',
  },
]
