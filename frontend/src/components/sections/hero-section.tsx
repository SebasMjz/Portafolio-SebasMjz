import { motion } from 'motion/react'
import { ArrowRight, CircleCheck, Mail, Phone, Github, Linkedin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="inicio" className="grid min-h-[calc(100svh-76px)] border-b-[3px] border-brand-ink bg-brand-paper md:grid-cols-12">
      <div className="hidden border-r-[3px] border-brand-ink bg-brand-purple text-white md:col-span-1 md:flex md:items-center md:justify-center">
        <div className="h-[min(70vh,680px)] overflow-hidden py-8">
          <motion.div
            className="flex w-16 flex-col items-center gap-10 font-display text-2xl font-black uppercase tracking-[0.22em] will-change-transform"
            animate={{ y: ['0px', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {[...h.ticker, ...h.ticker].map((item, index) => (
              <span key={`${item}-${index}`} className="[writing-mode:vertical-rl]">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 lg:col-span-7 lg:px-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } } }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="mb-6 sm:mb-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="type-label inline-flex items-center gap-2 border-[3px] border-brand-ink bg-brand-lime px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-brand-ink brutalist-shadow">
              <span className="size-2 rounded-full bg-brand-purple" aria-hidden="true" />
              {h.status}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-brand-ink/65">{h.since}</span>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <TypographyH1 className="max-w-5xl text-[clamp(2.75rem,8vw,7.8rem)] uppercase tracking-[-0.04em] leading-[0.92] break-words">
              {h.headline1}
              <br />
              <span className="relative inline-block px-2 sm:px-4 mt-1">
                <span className="relative z-10">{h.headlineHighlight}</span>
                <span className="absolute inset-x-0 bottom-[0.08em] top-[0.1em] -z-0 -rotate-1 border-[3px] border-brand-ink bg-brand-gold" aria-hidden="true" />
              </span>
            </TypographyH1>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-8 sm:mt-10 max-w-2xl border-l-[5px] sm:border-l-[6px] border-brand-purple pl-4 sm:pl-8">
            <TypographyP className="text-lg font-medium leading-snug text-brand-ink/75 sm:text-2xl">
              {h.subheadline}
            </TypographyP>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-brand-ink/70">
            <a href={`tel:${h.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-brand-purple transition-colors">
              <Phone className="size-4" aria-hidden="true" />
              {h.phone}
            </a>
            <a href={`mailto:${h.email}`} className="flex items-center gap-2 hover:text-brand-purple transition-colors">
              <Mail className="size-4" aria-hidden="true" />
              {h.email}
            </a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-7">
            <Button
              asChild
              size="lg"
              className="focus-ring h-14 sm:h-16 rounded-none border-[3px] border-brand-ink bg-brand-gold px-6 sm:px-10 font-display text-base sm:text-xl font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:bg-brand-gold hover:shadow-none"
            >
              <a href="#proyectos">
                {h.ctaPrimary}
                <ArrowRight className="size-5 sm:size-6" aria-hidden="true" />
              </a>
            </Button>
            <a href="#contacto" className="focus-ring border-b-[3px] border-brand-purple px-1 py-2 font-display text-base sm:text-lg font-black hover:bg-brand-purple hover:text-white">
              {h.ctaSecondary}
            </a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/SebasMjz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-[3px] border-brand-ink bg-brand-paper px-3 py-2 sm:px-4 sm:py-3 font-display text-xs sm:text-sm font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <Github className="size-4 sm:size-5" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sebasmjz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-[3px] border-brand-ink bg-brand-paper px-3 py-2 sm:px-4 sm:py-3 font-display text-xs sm:text-sm font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <Linkedin className="size-4 sm:size-5" aria-hidden="true" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative flex min-h-[420px] sm:min-h-[520px] items-center justify-center overflow-hidden border-t-[3px] border-brand-ink bg-brand-mist px-6 py-12 sm:px-8 sm:py-16 md:col-span-4 md:min-h-0 md:border-t-0 md:border-l-[3px] lg:px-10">
        <motion.div
          aria-hidden="true"
          className="absolute right-6 top-6 size-20 sm:right-10 sm:top-10 sm:size-36 rotate-12 border-[3px] border-brand-ink bg-brand-lime will-change-transform"
          animate={{ rotate: [12, 20, 12], y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-6 left-6 size-28 sm:bottom-10 sm:left-8 sm:size-48 rounded-full border-[3px] border-brand-ink bg-brand-purple/10 will-change-transform"
          animate={{ y: [0, 10, 0], rotate: [-12, 0, -12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-2 top-1/2 size-12 sm:left-0 sm:size-16 rotate-45 border-[3px] border-brand-ink bg-brand-gold will-change-transform"
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative z-10 w-full max-w-[290px] sm:max-w-[360px] lg:max-w-[400px] border-[3px] border-brand-ink bg-brand-purple p-2 brutalist-shadow will-change-transform"
          initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.32, ease: 'easeOut' }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-ink border-[2px] border-brand-ink/20">
            <img
              src="/assets/profilepic.png"
              alt="Sebastian Mendieta"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 flex items-center gap-2 border-[3px] border-brand-ink bg-white px-3 py-2 sm:px-4 sm:py-3 font-display text-[10px] sm:text-xs font-black uppercase brutalist-shadow">
            <CircleCheck className="size-4 sm:size-5 text-brand-purple" aria-hidden="true" />
            {h.badge}
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center border-t-[3px] border-brand-ink bg-brand-purple px-4 py-3 sm:px-6 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white md:col-span-12 md:hidden">
        {h.ticker[0]} <span className="mx-1.5 text-brand-gold">•</span> {h.ticker[1]} <span className="mx-1.5 text-brand-gold">•</span> {h.ticker[2]} <span className="mx-1.5 text-brand-gold">•</span> {h.ticker[3]}
      </div>
    </section>
  )
}
