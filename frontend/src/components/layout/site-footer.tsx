import { motion } from 'motion/react'
import { Github, Linkedin, Mail } from 'lucide-react'

import { LogoMark } from '@/components/brand/logo-mark'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useLanguage } from '@/i18n/LanguageContext'

const socials = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sebasmjz/', external: true },
  { label: 'GitHub', icon: Github, href: 'https://github.com/SebasMjz', external: true },
  { label: 'Email', icon: Mail, href: 'mailto:sebastiantx0604@gmail.com', external: false },
]

function getFooterLinkTarget(link: string): { href: string; target?: string; rel?: string } {
  const lower = link.toLowerCase()
  if (link.includes('@')) {
    return { href: `mailto:${link}` }
  }
  if (link.startsWith('+') || link.replace(/\D/g, '').length >= 8) {
    return { href: `tel:${link.replace(/\s+/g, '')}` }
  }
  if (
    lower.includes('vris') ||
    lower.includes('univalle') ||
    lower.includes('freelance') ||
    lower.includes('experiencia') ||
    lower.includes('experience')
  ) {
    return { href: '#experiencia' }
  }
  if (
    lower.includes('full-stack') ||
    lower.includes('blockchain') ||
    lower.includes('devops') ||
    lower.includes('cloud') ||
    lower.includes('habilidades') ||
    lower.includes('skills')
  ) {
    return { href: '#habilidades' }
  }
  return { href: '#contacto' }
}

export function SiteFooter() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="overflow-hidden bg-brand-ink pt-16 text-white sm:pt-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-20">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <a href="#inicio" aria-label="Ir al inicio" className="focus-ring mb-8 inline-block">
              <LogoMark />
            </a>
            <p className="max-w-md font-display text-2xl font-black uppercase leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              {f.tagline}
            </p>
            <TooltipProvider>
              <div className="mt-8 flex gap-3 sm:mt-10">
                {socials.map(({ label, icon: Icon, href, external }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        aria-label={label}
                        className="focus-ring inline-flex size-11 items-center justify-center rounded-full border-[3px] border-brand-ink bg-white text-brand-ink transition-transform hover:-translate-y-1 hover:bg-brand-gold sm:size-12"
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {f.groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3 sm:gap-4">
                <h3 className="type-label text-brand-gold">{group.title}</h3>
                {group.links.map((link) => {
                  const targetProps = getFooterLinkTarget(link)
                  return (
                    <a
                      key={link}
                      {...targetProps}
                      className="focus-ring w-fit break-all text-sm text-white/70 transition-colors hover:text-brand-lime sm:break-normal"
                    >
                      {link}
                    </a>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        <Separator className="bg-white/15" />
        <div className="flex flex-col justify-between gap-5 py-7 text-xs text-white/45 sm:text-sm md:flex-row">
          <p>{f.copyright}</p>
          <div className="flex gap-6">
            <a href="#contacto" className="focus-ring hover:text-white">{f.privacy}</a>
            <a href="#contacto" className="focus-ring hover:text-white">{f.terms}</a>
          </div>
        </div>
      </div>
      <div className="border-t-[3px] border-brand-purple bg-brand-purple py-6 sm:py-8">
        <div className="no-scrollbar overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-6 whitespace-nowrap font-display text-[clamp(1.5rem,4vw,3.5rem)] font-black uppercase leading-none text-white/20"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                SEBAS_MJZ<span aria-hidden="true">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

