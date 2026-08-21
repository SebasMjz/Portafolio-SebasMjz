import { motion } from 'motion/react'
import { ArrowRight, CircleCheck } from 'lucide-react'

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

      <div className="relative flex flex-col justify-center px-6 py-20 sm:px-10 lg:col-span-7 lg:px-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } } }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="mb-8 flex flex-wrap items-center gap-4">
            <span className="type-label inline-flex items-center gap-2 border-[3px] border-brand-ink bg-brand-lime px-4 py-3 text-brand-ink brutalist-shadow">
              <span className="size-2 rounded-full bg-brand-purple" aria-hidden="true" />
              {h.status}
            </span>
            <span className="font-semibold text-brand-ink/65">{h.since}</span>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            <TypographyH1 className="max-w-5xl text-[clamp(4.2rem,9.2vw,9.2rem)] uppercase">
              {h.headline1}
              <br />
              <span className="relative inline-block px-4">
                <span className="relative z-10">{h.headlineHighlight}</span>
                <span className="absolute inset-x-0 bottom-[0.08em] top-[0.1em] -z-0 -rotate-1 border-[3px] border-brand-ink bg-brand-gold" aria-hidden="true" />
              </span>
              <br />
              {h.headline2}
            </TypographyH1>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-10 max-w-2xl border-l-[6px] border-brand-purple pl-6 sm:pl-8">
            <TypographyP className="text-xl font-medium leading-tight text-brand-ink/75 sm:text-2xl">
              {h.subheadline}
            </TypographyP>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-12 flex flex-wrap items-center gap-7">
            <Button
              asChild
              size="lg"
              className="focus-ring h-16 rounded-none border-[3px] border-brand-ink bg-brand-gold px-7 font-display text-lg font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:bg-brand-gold hover:shadow-none sm:px-10 sm:text-xl"
            >
              <a href="#contacto">
                {h.ctaPrimary}
                <ArrowRight className="size-6" aria-hidden="true" />
              </a>
            </Button>
            <a href="#proyectos" className="focus-ring border-b-[3px] border-brand-purple px-1 py-2 font-display text-lg font-black hover:bg-brand-purple hover:text-white">
              {h.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden border-t-[3px] border-brand-ink bg-brand-mist px-8 py-16 md:col-span-4 md:min-h-0 md:border-t-0 md:border-l-[3px] lg:px-10">
        <motion.div
          aria-hidden="true"
          className="absolute right-10 top-10 size-28 rotate-12 border-[3px] border-brand-ink bg-brand-lime sm:size-36 will-change-transform"
          animate={{ rotate: [12, 20, 12], y: [0, -16, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-10 left-8 size-40 rounded-full border-[3px] border-brand-ink bg-brand-purple/10 sm:size-48 will-change-transform"
          animate={{ y: [0, 14, 0], rotate: [-12, 0, -12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-0 top-1/2 size-16 rotate-45 border-[3px] border-brand-ink bg-brand-gold will-change-transform"
          animate={{ x: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="relative z-10 w-full max-w-[420px] border-[3px] border-brand-ink bg-brand-purple p-2 brutalist-shadow will-change-transform"
          initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.32, ease: 'easeOut' }}
        >
          <img
            src="https://images.unsplash.com/photo-1776126508553-471f8c30cd61?auto=format&fit=crop&w=900&q=82"
            alt="Textura abstracta morada y amarilla, por PixelPro Vibes en Unsplash"
            loading="eager"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-5 -left-5 flex items-center gap-2 border-[3px] border-brand-ink bg-white px-4 py-3 font-display text-xs font-black uppercase">
            <CircleCheck className="size-5 text-brand-purple" aria-hidden="true" />
            {h.badge}
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center border-t-[3px] border-brand-ink bg-brand-purple px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-white md:col-span-12 md:hidden">
        {h.ticker[0]} <span className="mx-2 text-brand-gold">•</span> {h.ticker[1]} <span className="mx-2 text-brand-gold">•</span> {h.ticker[2]} <span className="mx-2 text-brand-gold">•</span> {h.ticker[3]}
      </div>
    </section>
  )
}
