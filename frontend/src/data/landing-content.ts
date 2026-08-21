export type ServiceTone = 'white' | 'purple' | 'gold' | 'lime'
export type ServiceIcon = 'globe' | 'smartphone' | 'monitor' | 'cpu'
export type ProcessIcon = 'search' | 'palette' | 'code' | 'rocket'

export interface Service {
  id: string
  number: string
  title: string
  description: string
  icon: ServiceIcon
  tone: ServiceTone
}

export interface ProcessStep {
  id: string
  number: number
  title: string
  description: string
  tag: string
  icon: ProcessIcon
  tone: 'lime' | 'gold'
  align: 'left' | 'right'
}

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

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const services: Service[] = [
  {
    id: 'web',
    number: '01',
    title: 'Web development',
    description:
      'Ecosistemas web complejos, PWAs y plataformas escalables que no conocen límites de tráfico.',
    icon: 'globe',
    tone: 'white',
  },
  {
    id: 'mobile',
    number: '02',
    title: 'Apps móviles',
    description:
      'iOS y Android nativos o multiplataforma. Experiencias fluidas que viven en el bolsillo de tus clientes.',
    icon: 'smartphone',
    tone: 'purple',
  },
  {
    id: 'desktop',
    number: '03',
    title: 'Desktop apps',
    description:
      'Software de alto rendimiento para Windows, macOS y Linux. Control total del hardware.',
    icon: 'monitor',
    tone: 'gold',
  },
  {
    id: 'systems',
    number: '04',
    title: 'Sistemas a medida',
    description:
      'ERPs, CRMs y microservicios diseñados específicamente para tus procesos internos.',
    icon: 'cpu',
    tone: 'lime',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: 1,
    title: 'Descubrimos',
    description:
      'Inmersión total en tu negocio. Definimos el alcance y los objetivos críticos para el éxito.',
    tag: 'Trato directo',
    icon: 'search',
    tone: 'lime',
    align: 'left',
  },
  {
    id: 'design',
    number: 2,
    title: 'Diseñamos',
    description:
      'Prototipado rápido y diseño de experiencia. Validamos la usabilidad antes de escribir una sola línea de código.',
    tag: 'Calidad sostenible',
    icon: 'palette',
    tone: 'gold',
    align: 'right',
  },
  {
    id: 'build',
    number: 3,
    title: 'Construimos',
    description:
      'Desarrollo ágil en sprints de dos semanas. Estarás viendo el progreso real de tu plataforma constantemente.',
    tag: 'Entregas claras',
    icon: 'code',
    tone: 'lime',
    align: 'left',
  },
  {
    id: 'launch',
    number: 4,
    title: 'Lanzamos',
    description:
      'Despliegue controlado, soporte y optimización. Seguimos a tu lado para escalar la solución.',
    tag: 'Soporte continuo',
    icon: 'rocket',
    tone: 'gold',
    align: 'right',
  },
]

export const projects: Project[] = [
  {
    id: 'aqualatina',
    title: 'Aqualatina',
    metric: '500+',
    metricLabel: 'alumnos gestionados',
    quote:
      'Gestionar la escuela de natación era un caos con hojas de cálculo. Ahora todo el control de alumnos, pagos y clases está en un solo lugar.',
    image: '/assets/Aqualatina.png',
    imageAlt: 'Aqualatina - Sistema de gestión de escuela de natación',
    url: 'https://aqualatina.vercel.app',
  },
  {
    id: 'alice',
    title: 'Alice',
    metric: '3x',
    metricLabel: 'más productividad',
    quote:
      'Alice transformó la forma en que nuestro equipo escribe código. La asistencia de IA nos ahorra horas de trabajo repetitivo.',
    image: '/assets/Alice.png',
    imageAlt: 'Alice - Agente de IA para asistencia en código',
    url: 'https://alice-agent.stuko.dev/es/',
  },
  {
    id: 'cyrex-store',
    title: 'Cyrex Store',
    metric: '-60%',
    metricLabel: 'tiempo en inventario',
    quote:
      'Antes perdíamos horas controlando stock manualmente. Ahora el sistema gestiona todo el inventario de hardware y las ventas de forma automática.',
    image: '/assets/cxergonomic.png',
    imageAlt: 'Cyrex Store - Gestor de inventario y ventas de hardware',
    url: 'https://cxergonomic.com/',
  },
]

export const faqItems: FaqItem[] = [
  {
    id: 'timeline',
    question: '¿Cuánto tiempo tarda un proyecto?',
    answer:
      'Depende de la complejidad. Un MVP suele tomar entre seis y diez semanas. Los proyectos de gran escala pueden extenderse de cuatro a seis meses con lanzamientos incrementales.',
  },
  {
    id: 'support',
    question: '¿Ofrecen soporte post-lanzamiento?',
    answer:
      'Sí. Ofrecemos mantenimiento preventivo, soporte técnico y actualizaciones de seguridad para que tu software siga funcionando después del lanzamiento.',
  },
  {
    id: 'technology',
    question: '¿Qué tecnologías utilizan?',
    answer:
      'Somos agnósticos a la tecnología, pero trabajamos con herramientas modernas y probadas como React, Node.js, Flutter, Go, AWS y Google Cloud según lo que el proyecto necesite.',
  },
  {
    id: 'small-business',
    question: '¿Trabajan con empresas pequeñas?',
    answer:
      'Sí. Adaptamos el alcance y la forma de trabajo al momento de cada negocio, empezando con una solución útil y preparada para crecer contigo.',
  },
  {
    id: 'integrations',
    question: '¿Pueden integrarse con mis sistemas actuales?',
    answer:
      'Podemos conectar APIs, bases de datos, ERPs, CRMs y herramientas internas existentes para evitar cambios innecesarios y aprovechar lo que ya funciona.',
  },
]

export const footerLinkGroups = [
  {
    title: 'Servicios',
    links: ['Desarrollo web', 'Apps móviles', 'Sistemas custom', 'Consultoría'],
  },
  {
    title: 'Compañía',
    links: ['Proceso', 'Proyectos', 'Blog', 'FAQ'],
  },
  {
    title: 'Contacto',
    links: ['NoRestSolutions@outlook.com', '+591 72928969', 'Cochabamba, Bolivia'],
  },
]
