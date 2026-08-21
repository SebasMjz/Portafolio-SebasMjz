import { useState } from 'react'
import { Menu, ArrowUpRight, Languages } from 'lucide-react'

import { LogoMark } from '@/components/brand/logo-mark'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'

interface SiteHeaderProps {
  onContactClick?: () => void
}

export function SiteHeader({ onContactClick }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const nav = t.nav

  const handleContactClick = () => {
    setOpen(false)
    onContactClick?.()
  }

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-brand-ink bg-brand-paper/95 backdrop-blur-sm" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
      <nav className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10" aria-label={nav.ariaNav}>
        <a href="#inicio" className="focus-ring shrink-0" aria-label={nav.ariaHome}>
          <LogoMark imageClassName="h-8 sm:h-9" />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring border-b-[3px] border-transparent px-1 py-2 font-display text-sm font-black uppercase tracking-[0.12em] hover:border-brand-purple hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {/* Language toggle - desktop */}
          <button
            onClick={toggleLanguage}
            aria-label={nav.langToggle}
            title={nav.langToggle}
            className="focus-ring hidden items-center gap-1.5 border-[3px] border-brand-ink bg-transparent px-3 py-2 font-display text-xs font-black uppercase tracking-[0.1em] text-brand-ink transition-colors hover:bg-brand-ink hover:text-white sm:inline-flex"
          >
            <Languages className="size-3.5" aria-hidden="true" />
            <span className="relative inline-block w-6 text-center">
              <span
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                style={{ opacity: language === 'es' ? 1 : 0 }}
                aria-hidden={language !== 'es'}
              >
                EN
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                style={{ opacity: language === 'en' ? 1 : 0 }}
                aria-hidden={language !== 'en'}
              >
                ES
              </span>
            </span>
          </button>

          <Button
            asChild
            className="focus-ring hidden h-12 rounded-none border-[3px] border-brand-ink bg-brand-gold px-5 font-display font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:bg-brand-gold hover:shadow-none sm:inline-flex"
          >
            <a href="#contacto" onClick={handleContactClick}>
              {nav.cta}
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="focus-ring rounded-none border-[3px] border-brand-ink bg-brand-paper lg:hidden"
                aria-label={nav.ariaMenu}
              >
                <Menu className="size-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,360px)] border-l-[3px] border-brand-ink bg-brand-purple p-0 text-white">
              <SheetHeader className="border-b-[3px] border-brand-ink p-6 text-left">
                <SheetTitle className="font-display text-2xl font-black uppercase text-white">{nav.menuTitle}</SheetTitle>
                <SheetDescription className="text-sm text-purple-100">{nav.menuDesc}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-6">
                {nav.links.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      className={cn('focus-ring border-b border-white/20 px-2 py-4 font-display text-2xl font-black uppercase hover:bg-white/10')}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                {/* Language toggle inside mobile menu */}
                <button
                  onClick={() => { toggleLanguage(); setOpen(false) }}
                  className="focus-ring mt-2 flex items-center gap-2 border border-white/20 px-2 py-3 font-display text-base font-black uppercase tracking-[0.1em] text-white hover:bg-white/10"
                >
                  <Languages className="size-4" aria-hidden="true" />
                  {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                </button>
              </div>
              <div className="mt-auto p-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="focus-ring h-14 w-full rounded-none border-[3px] border-brand-ink bg-brand-gold font-display font-black uppercase text-brand-ink hover:bg-brand-gold"
                    onClick={handleContactClick}
                  >
                    <a href="#contacto">{nav.cta}</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
