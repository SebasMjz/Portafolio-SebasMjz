import { motion } from 'motion/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'

export function FaqSection() {
  const { t } = useLanguage()
  const f = t.faq

  return (
    <section id="faq" className="bg-brand-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-20">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <TypographyH2 className="text-[clamp(3.5rem,8vw,7rem)] uppercase">{f.title}</TypographyH2>
          <div className="mx-auto mt-7 h-3 w-24 bg-brand-gold" aria-hidden="true" />
        </motion.div>
        <Accordion type="single" collapsible defaultValue={f.items[0].id} className="gap-5">
          {f.items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="overflow-hidden rounded-none border-[3px] border-brand-ink data-[state=open]:shadow-[6px_6px_0_var(--brand-gold)]">
              <AccordionTrigger className="focus-ring rounded-none px-6 py-6 font-display text-lg font-black uppercase tracking-[-0.02em] hover:no-underline data-[state=open]:bg-[#fffde7] sm:px-8 sm:text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="border-t-[3px] border-brand-ink bg-white px-6 text-lg text-brand-ink/75 sm:px-8 sm:text-xl">
                <TypographyP className="max-w-3xl pb-5 pt-2 leading-relaxed">{item.answer}</TypographyP>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
