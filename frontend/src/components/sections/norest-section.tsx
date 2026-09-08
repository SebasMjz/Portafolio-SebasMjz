import { motion } from 'motion/react'
import { ArrowUpRight, Rocket } from 'lucide-react'

import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'

export function NoRestSection() {
  const { t } = useLanguage()
  const n = t.norest

  return (
    <section id="norest" className="bg-brand-purple px-5 py-16 sm:px-8 sm:py-28 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="type-label mb-4 text-brand-gold">{n.sectionLabel}</p>
              <TypographyH2 className="text-[clamp(2.2rem,7vw,7rem)] break-words uppercase text-white">
                {n.title1}
                <br />
                <span className="text-white/65">{n.title2}</span>
              </TypographyH2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 max-w-xl border-l-[6px] border-brand-gold pl-6 sm:pl-8"
            >
              <TypographyP className="text-xl font-medium leading-tight text-white/85 sm:text-2xl">
                {n.description}
              </TypographyP>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href={n.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-[3px] border-white bg-transparent px-6 py-4 font-display text-lg font-black uppercase text-white brutalist-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:text-brand-purple transition-all"
              >
                <Rocket className="size-5" aria-hidden="true" />
                {n.linkLabel}
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-[3px] border-white/20 bg-white/10 p-8 sm:p-10"
            >
              <h3 className="mb-6 font-display text-2xl font-black uppercase text-white">
                Lo que construimos
              </h3>
              <ul className="space-y-4">
                {n.projects.map((project, index) => (
                  <motion.li
                    key={project}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center border-2 border-brand-gold font-display text-sm font-black text-brand-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium text-white/90">{project}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
