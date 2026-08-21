import { cn } from '@/lib/utils'

interface LogoMarkProps {
  className?: string
  imageClassName?: string
}

export function LogoMark({ className, imageClassName }: LogoMarkProps) {
  return (
    <span className={cn('inline-flex items-center justify-center border-[3px] border-brand-ink bg-white px-3 py-1.5 brutalist-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5', className)}>
      <img
        src="/assets/norest-logo.png"
        alt="NoRest Solutions"
        width={180}
        height={68}
        className={cn('h-8 sm:h-9 w-auto object-contain', imageClassName)}
      />
    </span>
  )
}


