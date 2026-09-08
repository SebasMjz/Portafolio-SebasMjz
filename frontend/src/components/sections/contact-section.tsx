import { Mail, Phone } from 'lucide-react'

import { ContactForm } from '@/components/forms/contact-form'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'

export function ContactSection() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section id="contacto" className="grid border-y-[3px] border-brand-ink md:grid-cols-2">
      <div className="flex min-h-[460px] sm:min-h-[560px] flex-col justify-center bg-brand-purple px-5 py-14 text-white sm:px-12 sm:py-20 lg:px-20">
        <TypographyH2 className="max-w-xl text-[clamp(2.2rem,7vw,6.5rem)] break-words uppercase">
          {c.title1}<span className="text-brand-lime">{c.titleHighlight}</span>
        </TypographyH2>
        <TypographyP className="mt-6 sm:mt-9 max-w-lg text-lg sm:text-2xl leading-snug text-purple-100">
          {c.subtitle}
        </TypographyP>
        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-5">
          <a href="mailto:sebastiantx0604@gmail.com" className="focus-ring flex items-center gap-3 sm:gap-4 text-sm sm:text-lg lg:text-xl font-bold hover:text-brand-lime transition-colors">
            <span className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-brand-ink bg-brand-lime text-brand-ink">
              <Mail className="size-4 sm:size-5" aria-hidden="true" />
            </span>
            <span className="break-all sm:break-normal">sebastiantx0604@gmail.com</span>
          </a>
          <a href="https://wa.me/59176474075" target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-3 sm:gap-4 text-sm sm:text-lg lg:text-xl font-bold hover:text-brand-gold transition-colors">
            <span className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-full border-[3px] border-brand-ink bg-brand-gold text-brand-ink">
              <Phone className="size-4 sm:size-5" aria-hidden="true" />
            </span>
            <span>+591 76474075</span>
          </a>
        </div>
      </div>
      <div className="bg-brand-paper px-5 py-12 sm:px-12 sm:py-20 lg:px-20">
        <ContactForm />
      </div>
    </section>
  )
}
