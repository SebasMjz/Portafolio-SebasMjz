import { motion } from 'motion/react'
import { Code2, Palette, Rocket, Search } from 'lucide-react'

import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { ProcessStep } from '@/data/landing-content'

const iconMap = { search: Search, palette: Palette, code: Code2, rocket: Rocket }

function ProcessStepCard({ step }: { step: ProcessStep }) {
  const Icon = iconMap[step.icon]
  const isLeft = step.align === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -42 : 42 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      style={{ willChange: 'transform, opacity' }}
      className={cn('relative flex flex-col items-center gap-8 md:flex-row md:gap-12', isLeft ? 'md:flex-row' : 'md:flex-row-reverse')}
    >
      <div className={cn('w-full flex-1 text-center md:w-auto', isLeft ? 'md:text-right' : 'md:text-left')}>
        <p className="type-label mb-4 text-brand-gold">0{step.number} / NoRest</p>
        <h3 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-5xl">
          {step.title}
        </h3>
        <TypographyP className="mt-5 text-lg leading-snug text-purple-100 sm:text-xl">{step.description}</TypographyP>
        <span className={cn('mt-5 inline-flex border border-white/25 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white', isLeft ? 'md:float-right' : 'md:float-left')}>
          {step.tag}
        </span>
      </div>
      <motion.div
        className={cn(
          'relative z-10 flex size-24 shrink-0 items-center justify-center rounded-full border-[4px] border-brand-ink text-brand-ink shadow-[0_0_34px_rgba(255,216,0,0.22)] sm:size-28',
          step.tone === 'lime' ? 'bg-brand-lime' : 'bg-brand-gold',
        )}
        whileHover={{ scale: 1.08, rotate: 8 }}
      >
        <Icon className="size-10 sm:size-12" strokeWidth={2.2} aria-hidden="true" />
      </motion.div>
      <div className="hidden flex-1 md:block" aria-hidden="true" />
    </motion.div>
  )
}

export function ProcessSection() {
  const { t } = useLanguage()
  const p = t.process

  return (
    <section id="proceso" className="relative overflow-hidden bg-brand-purple px-6 py-24 text-white sm:px-8 sm:py-32 lg:px-20">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-50" viewBox="0 0 1440 1900" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M720 0 C720 240, 180 300, 180 500 C180 720, 1260 760, 1260 960 C1260 1180, 180 1220, 180 1430 C180 1620, 720 1710, 720 1900"
          stroke="var(--brand-gold)"
          strokeWidth="6"
          fill="none"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0, strokeDasharray: '12 12' }}
          whileInView={{ pathLength: 1, opacity: 1, strokeDasharray: '12 12' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </svg>
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 text-center sm:mb-32">
          <TypographyH2 className="text-[clamp(3.5rem,8vw,7.5rem)] uppercase">
            {p.title1}<span className="text-brand-gold">{p.title2}</span>
          </TypographyH2>
          <TypographyP className="mx-auto mt-6 max-w-2xl text-lg text-purple-100 sm:text-2xl">
            {p.subtitle}
          </TypographyP>
        </motion.div>
        <div className="space-y-24 sm:space-y-40">
          {p.steps.map((step) => <ProcessStepCard key={step.id} step={step as ProcessStep} />)}
        </div>
      </div>
    </section>
  )
}
