import { motion } from 'motion/react'

import { Card, CardContent } from '@/components/ui/card'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { ServiceCard } from './service-card'
import type { Service } from '@/data/landing-content'

export function ServicesSection() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section id="servicios" className="bg-brand-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-10 lg:mb-24 lg:flex-row lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="type-label mb-5 text-brand-purple">{s.sectionLabel}</p>
            <TypographyH2 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] uppercase">
              {s.title1}
              <br />
              <span className="text-brand-ink/65">{s.title2}</span>
            </TypographyH2>
          </motion.div>
          <Card className="max-w-md rotate-1 rounded-none border-[3px] border-brand-ink bg-brand-purple p-0 text-white brutalist-shadow">
            <CardContent className="p-7 sm:p-8">
              <TypographyP className="text-xl font-medium leading-snug">
                {s.pitch}
              </TypographyP>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <ServiceCard service={s.items[0] as Service} className="md:col-span-7" />
          <ServiceCard service={s.items[1] as Service} className="md:col-span-5" />
          <ServiceCard service={s.items[2] as Service} className="md:col-span-5" />
          <ServiceCard service={s.items[3] as Service} className="md:col-span-7" />
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-ink/60">
          {s.tags.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn('border-b-2 px-2 pb-1', index === 0 ? 'border-brand-purple' : 'border-brand-ink/20')}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
