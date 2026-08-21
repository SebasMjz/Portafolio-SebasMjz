import { Mail, Phone } from 'lucide-react'

import { ContactForm } from '@/components/forms/contact-form'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'

export function ContactSection() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section id="contacto" className="grid border-y-[3px] border-brand-ink md:grid-cols-2">
      <div className="flex min-h-[560px] flex-col justify-center bg-brand-purple px-6 py-20 text-white sm:px-12 lg:px-20">
        <TypographyH2 className="max-w-xl text-[clamp(3.7rem,7vw,7.3rem)] uppercase">
          {c.title1}<span className="text-brand-lime">{c.titleHighlight}</span>
        </TypographyH2>
        <TypographyP className="mt-9 max-w-lg text-xl leading-snug text-purple-100 sm:text-2xl">
          {c.subtitle}
        </TypographyP>
        <div className="mt-12 space-y-5">
          <a href="mailto:NoRestSolutions@outlook.com" className="focus-ring flex w-fit items-center gap-4 text-lg font-bold hover:text-brand-lime sm:text-xl">
            <span className="flex size-12 items-center justify-center rounded-full border-[3px] border-brand-ink bg-brand-lime text-brand-ink">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            NoRestSolutions@outlook.com
          </a>
          <a href="https://wa.me/59172928969" target="_blank" rel="noopener noreferrer" className="focus-ring flex w-fit items-center gap-4 text-lg font-bold hover:text-brand-gold sm:text-xl">
            <span className="flex size-12 items-center justify-center rounded-full border-[3px] border-brand-ink bg-brand-gold text-brand-ink">
              <Phone className="size-5" aria-hidden="true" />
            </span>
            +591 72928969
          </a>
        </div>
      </div>
      <div className="bg-brand-paper px-6 py-20 sm:px-12 lg:px-20">
        <ContactForm />
      </div>
    </section>
  )
}
