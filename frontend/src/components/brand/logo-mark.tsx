import { cn } from '@/lib/utils'

interface LogoMarkProps {
  className?: string
  imageClassName?: string
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span
      className={cn(
        'group inline-flex items-center gap-2 border-[3px] border-brand-ink bg-white px-3 py-1.5 font-display text-brand-ink brutalist-shadow transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 select-none',
        className
      )}
    >
      <span className="flex size-7 items-center justify-center border-2 border-brand-ink bg-brand-purple font-display text-xs font-black text-brand-gold">
        SM
      </span>
      <span className="font-display text-sm font-black uppercase tracking-wider text-brand-ink">
        SEBASTIAN<span className="text-brand-purple">.DEV</span>
      </span>
    </span>
  )
}



