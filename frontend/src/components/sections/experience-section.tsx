import { motion } from 'motion/react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'

export function ExperienceSection() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section id="experiencia" className="bg-brand-paper px-5 py-16 sm:px-8 sm:py-28 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 sm:mb-20 flex flex-col justify-between gap-8 lg:mb-24 lg:flex-row lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="type-label mb-4 text-brand-purple">{e.sectionLabel}</p>
            <TypographyH2 className="max-w-4xl text-[clamp(2.2rem,7vw,7rem)] break-words uppercase">
              {e.title1}
              <br />
              <span className="text-brand-ink/65">{e.title2}</span>
            </TypographyH2>
          </motion.div>
        </div>

        <div className="space-y-12">
          {e.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border-[3px] border-brand-ink bg-white p-6 sm:p-8 brutalist-shadow"
            >
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-black uppercase text-brand-ink">
                    {item.role}
                  </h3>
                  <p className="mt-2 font-display text-lg font-bold text-brand-purple">
                    {item.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-brand-ink/70">
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4" aria-hidden="true" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="size-4" aria-hidden="true" />
                    {item.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex gap-3">
                    <Briefcase className="mt-1 size-5 shrink-0 text-brand-purple" aria-hidden="true" />
                    <TypographyP className="text-brand-ink/80">
                      {desc}
                    </TypographyP>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 border-[3px] border-brand-ink bg-brand-lime p-6 brutalist-shadow"
        >
          <h3 className="mb-4 font-display text-xl font-black uppercase text-brand-ink">
            {e.languages.title}
          </h3>
          <div className="flex flex-wrap gap-4">
            {e.languages.items.map((lang) => (
              <span
                key={lang}
                className="border border-brand-ink/20 bg-white px-4 py-2 font-medium text-brand-ink"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
