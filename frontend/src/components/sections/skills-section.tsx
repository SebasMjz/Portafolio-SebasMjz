import { motion } from 'motion/react'
import { Globe, Smartphone, Cpu, Server, Code, Database, TestTube } from 'lucide-react'

import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  cpu: Cpu,
  server: Server,
  code: Code,
  database: Database,
  'test-tube': TestTube,
}

const toneStyles = {
  white: 'bg-white text-brand-ink border-brand-ink',
  purple: 'bg-brand-purple text-white border-brand-ink',
  gold: 'bg-brand-gold text-brand-ink border-brand-ink',
  lime: 'bg-brand-lime text-brand-ink border-brand-ink',
}

const toneNumberStyles = {
  white: 'text-brand-ink/15',
  purple: 'text-white/15',
  gold: 'text-brand-ink/15',
  lime: 'text-brand-ink/15',
}

const toneIconBg = {
  white: 'bg-brand-purple/10',
  purple: 'bg-white/10',
  gold: 'bg-brand-ink/10',
  lime: 'bg-brand-ink/10',
}

const toneTag = {
  white: 'border-brand-ink/20 bg-brand-ink/5 text-brand-ink',
  purple: 'border-white/30 bg-white/10 text-white',
  gold: 'border-brand-ink/20 bg-brand-ink/5 text-brand-ink',
  lime: 'border-brand-ink/20 bg-brand-ink/5 text-brand-ink',
}

export function SkillsSection() {
  const { t } = useLanguage()
  const s = t.skills

  const allCategories = s.categories

  return (
    <section id="habilidades" className="bg-brand-paper px-5 py-16 sm:px-8 sm:py-28 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 sm:mb-20 flex flex-col justify-between gap-8 lg:mb-24 lg:flex-row lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="type-label mb-4 text-brand-purple">{s.sectionLabel}</p>
            <TypographyH2 className="max-w-4xl text-[clamp(2.2rem,7vw,7rem)] break-words uppercase">
              {s.title1}
              <br />
              <span className="text-brand-ink/65">{s.title2}</span>
            </TypographyH2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md rotate-1 rounded-none border-[3px] border-brand-ink bg-brand-purple p-7 sm:p-8 text-white brutalist-shadow"
          >
            <TypographyP className="text-xl font-medium leading-snug">
              {s.subtitle}
            </TypographyP>
          </motion.div>
        </div>

        {/* Row 1: 2 large cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 mb-6 sm:mb-8">
          {[allCategories[0], allCategories[1]].map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Globe
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden border-[3px] p-6 sm:p-8 brutalist-shadow cursor-pointer transition-shadow duration-300 hover:shadow-[12px_12px_0_var(--brand-ink)] ${toneStyles[category.tone]}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`flex size-14 items-center justify-center ${toneIconBg[category.tone]}`}>
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <span className={`font-display text-6xl font-black ${toneNumberStyles[category.tone]}`}>
                    {category.number}
                  </span>
                </div>
                <h3 className="mt-6 mb-4 font-display text-2xl font-black uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className={`border px-3 py-1 text-sm font-medium transition-colors duration-200 group-hover:bg-opacity-20 ${toneTag[category.tone]}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Row 2: 2 medium cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 mb-6 sm:mb-8">
          {[allCategories[2], allCategories[3]].map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Globe
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 2) * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden border-[3px] p-6 sm:p-8 brutalist-shadow cursor-pointer transition-shadow duration-300 hover:shadow-[12px_12px_0_var(--brand-ink)] ${toneStyles[category.tone]}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`flex size-14 items-center justify-center ${toneIconBg[category.tone]}`}>
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <span className={`font-display text-6xl font-black ${toneNumberStyles[category.tone]}`}>
                    {category.number}
                  </span>
                </div>
                <h3 className="mt-6 mb-4 font-display text-2xl font-black uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className={`border px-3 py-1 text-sm font-medium transition-colors duration-200 group-hover:bg-opacity-20 ${toneTag[category.tone]}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Row 3: 3 smaller cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[allCategories[4], allCategories[5], allCategories[6]].map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Globe
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden border-[3px] p-6 sm:p-8 brutalist-shadow cursor-pointer transition-shadow duration-300 hover:shadow-[12px_12px_0_var(--brand-ink)] ${toneStyles[category.tone]}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`flex size-14 items-center justify-center ${toneIconBg[category.tone]}`}>
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <span className={`font-display text-6xl font-black ${toneNumberStyles[category.tone]}`}>
                    {category.number}
                  </span>
                </div>
                <h3 className="mt-6 mb-4 font-display text-2xl font-black uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className={`border px-3 py-1 text-sm font-medium transition-colors duration-200 group-hover:bg-opacity-20 ${toneTag[category.tone]}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
