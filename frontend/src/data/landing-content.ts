export type ServiceTone = 'white' | 'purple' | 'gold' | 'lime'
export type ServiceIcon = 'globe' | 'smartphone' | 'monitor' | 'cpu'
export type ProcessIcon = 'search' | 'palette' | 'code' | 'rocket'

export interface Project {
  id: string
  title: string
  metric: string
  metricLabel: string
  quote: string
  image: string
  imageAlt: string
  url: string
}

export const projects: Project[] = [
  {
    id: 'voluntarios',
    title: 'Voluntarios Univalle',
    metric: 'App',
    metricLabel: 'Móvil publicada',
    quote: 'Aplicación móvil oficial de voluntariado publicada en Google Play Store y Apple App Store.',
    image: '/assets/voluntarios.png',
    imageAlt: 'Voluntarios Univalle - App móvil de voluntariado',
    url: '#',
  },
  {
    id: 'pos',
    title: 'Sistema POS Integral',
    metric: 'Real-time',
    metricLabel: 'Comunicación síncrona',
    quote: 'Sistema POS con comunicación en tiempo real, reserva de mesas y control de inventarios.',
    image: '/assets/pos.png',
    imageAlt: 'Sistema POS Integral',
    url: '#',
  },
  {
    id: 'medbook',
    title: 'Academia MedBook',
    metric: 'Web',
    metricLabel: 'Plataforma de aprendizaje',
    quote: 'Plataforma web de aprendizaje con módulos interactivos de enseñanza optimizados.',
    image: '/assets/medbook.png',
    imageAlt: 'Academia MedBook - Plataforma de aprendizaje',
    url: '#',
  },
]
