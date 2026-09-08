
import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Loader2, Send } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/i18n/LanguageContext'

interface ContactFormValues {
  name: string
  email: string
  service: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialValues: ContactFormValues = { name: '', email: '', service: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const { t } = useLanguage()
  const c = t.contact

  const setValue = (key: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }))
    if (status !== 'loading') {
      setStatus('idle')
      setError('')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!values.name.trim() || !values.email.trim() || !values.service || !values.message.trim()) {
      setStatus('error')
      setError(c.formValidationError)
      return
    }

    setStatus('loading')
    setError('')

    // En Vite, todas las variables de entorno para el frontend DEBEN comenzar con VITE_
    const accessKey =
      import.meta.env.VITE_ACCESS_KEY ||
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      import.meta.env.VITE_WEB3FORMS_KEY

    try {
      if (!accessKey) {
        console.warn('Web3Forms access key is missing. Make sure VITE_ACCESS_KEY is set.')
        await new Promise((resolve) => setTimeout(resolve, 800))
        setStatus('success')
        return
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name.trim(),
          email: values.email.trim(),
          service: values.service,
          message: values.message.trim(),
          subject: `Nuevo mensaje de ${values.name.trim()} - Sebastian Mendieta`,
          from_name: 'Sebastian Mendieta Contact Form',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setError(result.message || c.formErrorGeneric)
      }
    } catch (err) {
      console.error('Error enviando formulario:', err)
      setStatus('error')
      setError(c.formErrorConnection)
    }
  }

  return (
    <div className="relative min-h-[460px] sm:min-h-[560px]">
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7" noValidate>
        <FieldGroup>
          <div className="grid gap-5 sm:gap-7 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="contact-name" className="type-label text-brand-ink">{c.formName}</FieldLabel>
              <Input
                id="contact-name"
                value={values.name}
                onChange={(event) => setValue('name', event.target.value)}
                placeholder={c.formNamePlaceholder}
                required
                disabled={status === 'loading'}
                className="h-12 sm:h-14 rounded-none border-[3px] border-brand-ink bg-white px-3 sm:px-4 text-base sm:text-lg focus-visible:border-brand-purple focus-visible:ring-0"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="contact-email" className="type-label text-brand-ink">{c.formEmail}</FieldLabel>
              <Input
                id="contact-email"
                type="email"
                value={values.email}
                onChange={(event) => setValue('email', event.target.value)}
                placeholder={c.formEmailPlaceholder}
                required
                disabled={status === 'loading'}
                className="h-12 sm:h-14 rounded-none border-[3px] border-brand-ink bg-white px-3 sm:px-4 text-base sm:text-lg focus-visible:border-brand-purple focus-visible:ring-0"
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="contact-service" className="type-label text-brand-ink">{c.formService}</FieldLabel>
            <Select value={values.service} onValueChange={(value) => setValue('service', value)} disabled={status === 'loading'}>
              <SelectTrigger id="contact-service" className="h-12 sm:h-14 w-full rounded-none border-[3px] border-brand-ink bg-white px-3 sm:px-4 text-base sm:text-lg focus:ring-0">
                <SelectValue placeholder={c.formServicePlaceholder} />
              </SelectTrigger>
              <SelectContent className="rounded-none border-[3px] border-brand-ink bg-white">
                {c.formServiceOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-message" className="type-label text-brand-ink">{c.formMessage}</FieldLabel>
            <Textarea
              id="contact-message"
              value={values.message}
              onChange={(event) => setValue('message', event.target.value)}
              placeholder={c.formMessagePlaceholder}
              required
              disabled={status === 'loading'}
              rows={4}
              className="resize-none rounded-none border-[3px] border-brand-ink bg-white px-3 sm:px-4 py-3 text-base sm:text-lg focus-visible:border-brand-purple focus-visible:ring-0"
            />
            <FieldDescription className="text-brand-ink/55">{c.formMessageDesc}</FieldDescription>
          </Field>
        </FieldGroup>
        {status === 'error' && <FieldError>{error}</FieldError>}
        <Button
          type="submit"
          size="lg"
          disabled={status === 'loading'}
          className="focus-ring h-14 sm:h-16 w-full rounded-none border-[3px] border-brand-ink bg-brand-lime px-6 font-display text-lg sm:text-2xl font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:bg-brand-lime hover:shadow-none"
        >
          {status === 'loading' ? (
            <>
              {c.formSending}
              <Loader2 className="size-5 sm:size-6 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              {c.formSend}
              <Send className="size-5 sm:size-6" aria-hidden="true" />
            </>
          )}
        </Button>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center border-[3px] border-brand-ink bg-brand-lime p-8 text-center brutalist-shadow"
          >
            <div className="mb-7 flex size-24 items-center justify-center rounded-full border-[3px] border-brand-ink bg-white text-brand-purple">
              <Check className="size-12" aria-hidden="true" />
            </div>
            <h3 className="font-display text-4xl font-black uppercase tracking-[-0.04em]">{c.successTitle}</h3>
            <p className="mt-4 max-w-md text-lg font-semibold text-brand-ink/75">
              {c.successDesc}
            </p>
            <Button type="button" variant="link" onClick={() => { setStatus('idle'); setValues(initialValues) }} className="mt-5 rounded-none font-display font-black uppercase text-brand-purple hover:text-brand-purple">
              {c.successReset}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Alert className="sr-only" role="status">
        <AlertTitle>Contact form</AlertTitle>
        <AlertDescription>Direct submission via Web3Forms to sebastiantx0604@gmail.com</AlertDescription>
      </Alert>
    </div>
  )
}
