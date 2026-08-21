import { motion } from 'motion/react'
import { Github, Linkedin, Twitter } from 'lucide-react'

import { LogoMark } from '@/components/brand/logo-mark'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useLanguage } from '@/i18n/LanguageContext'

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: '#contacto' },
  { label: 'Twitter', icon: Twitter, href: '#contacto' },
  { label: 'GitHub', icon: Github, href: '#contacto' },
]

export function SiteFooter() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="overflow-hidden bg-brand-ink pt-20 text-white sm:pt-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-20">
        <div className="grid gap-16 pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <LogoMark className="mb-9" imageClassName="h-10 sm:h-11" />
            <p className="max-w-md font-display text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl">
              {f.tagline}
            </p>
            <TooltipProvider>
              <div className="mt-10 flex gap-3">
                {socials.map(({ label, icon: Icon, href }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a
                        href={href}
                        aria-label={label}
                        className="focus-ring inline-flex size-12 items-center justify-center rounded-full border-[3px] border-brand-ink bg-white text-brand-ink hover:bg-brand-gold"
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {f.groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h3 className="type-label text-brand-gold">{group.title}</h3>
                {group.links.map((link) => (
                  <a key={link} href={link.includes('@') ? `mailto:${link}` : '#contacto'} className="focus-ring w-fit text-sm text-white/65 hover:text-brand-lime">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Separator className="bg-white/15" />
        <div className="flex flex-col justify-between gap-5 py-7 text-sm text-white/45 md:flex-row">
          <p>{f.copyright}</p>
          <div className="flex gap-6">
            <a href="#contacto" className="focus-ring hover:text-white">{f.privacy}</a>
            <a href="#contacto" className="focus-ring hover:text-white">{f.terms}</a>
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-brand-purple bg-brand-purple py-8 sm:py-10">
        <div className="no-scrollbar overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-6 whitespace-nowrap font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black uppercase leading-none text-white/20"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                NO REST SOLUTIONS<span aria-hidden="true">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
