export type Achievement = {
  id: string
  title: string
  competition?: string
  year: string
  placement?: string
  category?: string
  description: string
  certificateImage?: string
  certificateLabel?: string
  diplomaImage?: string
  diplomaLabel?: string
  additionalImages?: { src: string; label: string }[]
}

export const achievements: Achievement[] = [
  {
    id: 'sabah-alimleri',
    title: 'Sabahın alimləri',
    competition: 'XIV Republican Project Competition',
    year: '2025',
    placement: '2nd Place',
    category: 'Ecology & Environmental Management',
    description:
      'EcoOil was recognized at the XIV Republican Project Competition in the Ecology & Environmental Management category.',
    certificateImage: '/images/achievements/sabah-alimleri/certificate.jpg',
    certificateLabel: 'Certificate',
    diplomaImage: '/images/achievements/sabah-alimleri/diploma.jpg',
    diplomaLabel: 'Diploma',
  },
  {
    id: 'saf',
    title: 'GREENSTEAM SAF 2025 Azerbaijan Festival',
    year: '2025',
    placement: '2nd Place',
    description:
      'EcoOil took part in the GREENSTEAM SAF 2025 Azerbaijan Festival, a clean-energy and STEAM-focused event.',
    certificateImage: '/images/achievements/saf/certificate.jpg',
    certificateLabel: 'Certificate',
    additionalImages: [],
  },
  {
    id: 'cececo',
    title: 'CESECO — Clean Energy Program',
    year: '2025',
    description:
      'EcoOil participated in the CESECO clean-energy program, exploring practical approaches to solar energy protection and thermal management.',
    certificateImage: '/images/achievements/cececo/certificate.jpg',
    certificateLabel: 'Certificate',
  },
]
