import { motion } from 'motion/react'
import { Cpu, Globe2, Monitor, Smartphone } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import type { Service } from '@/data/landing-content'
import { cn } from '@/lib/utils'

const iconMap = {
  globe: Globe2,
  smartphone: Smartphone,
  monitor: Monitor,
  cpu: Cpu,
}

const toneClasses = {
  white: 'bg-brand-paper text-brand-ink',
  purple: 'bg-brand-purple text-white',
  gold: 'bg-brand-gold text-brand-ink',
  lime: 'bg-brand-lime text-brand-ink',
}

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon]
  const isPurple = service.tone === 'purple'

  return (
    <motion.div
      className={cn('h-full', className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -8, rotate: service.tone === 'gold' ? -1 : 1 }}
    >
      <Card
        className={cn(
          'h-full min-h-[320px] rounded-none border-[3px] border-brand-ink p-0 brutalist-shadow',
          toneClasses[service.tone],
        )}
      >
        <CardContent className="flex h-full flex-col p-8 sm:p-10">
          <div className="mb-12 flex items-start justify-between">
            <Icon
              aria-hidden="true"
              className={cn('size-16 stroke-[1.8]', isPurple ? 'text-brand-lime' : 'text-brand-purple')}
              strokeWidth={1.8}
            />
            <span className={cn('font-display text-6xl font-black', isPurple ? 'text-white/10' : 'text-black/10')}>
              {service.number}
            </span>
          </div>
          <h3 className={cn('mb-5 font-display text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl', isPurple && 'text-brand-lime')}>
            {service.title}
          </h3>
          <p className={cn('max-w-xl text-lg leading-snug sm:text-xl', isPurple ? 'text-purple-100' : 'text-brand-ink/75')}>
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
