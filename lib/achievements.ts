export type Achievement = {
  id: string
  title: string
  competition?: string
  year: string
  placement?: string
  category?: string
  description: string
  coverImage: string
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
    coverImage: '/images/achievements-cover/sabah-alimleri.svg',
  },
  {
    id: 'saf',
    title: 'GREENSTEAM SAF Azerbaijan Green Festival',
    year: '2024',
    placement: '2nd Place',
    description:
      'EcoOil took part in the GREENSTEAM SAF Azerbaijan Green Festival, a clean-energy and STEAM-focused event.',
    coverImage: '/images/achievements-cover/saf.svg',
  },
  {
    id: 'cececo',
    title: 'CESECO — Clean Energy Program',
    year: '2026',
    description:
      'EcoOil participated in the CESECO clean-energy program, exploring practical approaches to solar energy protection and thermal management.',
    coverImage: '/images/achievements-cover/cececo.svg',
  },
]
