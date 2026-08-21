import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type TypographyProps = ComponentPropsWithoutRef<'h1'> & {
  children: ReactNode
}

export function TypographyH1({ className, children, ...props }: TypographyProps) {
  return (
    <h1 className={cn('type-display', className)} {...props}>
      {children}
    </h1>
  )
}

export function TypographyH2({ className, children, ...props }: Omit<TypographyProps, 'children'> & { children: ReactNode }) {
  return (
    <h2 className={cn('type-section-title', className)} {...props}>
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children, ...props }: Omit<TypographyProps, 'children'> & { children: ReactNode }) {
  return (
    <h3 className={cn('font-display font-black tracking-[-0.04em]', className)} {...props}>
      {children}
    </h3>
  )
}

export function TypographyP({ className, children, ...props }: ComponentPropsWithoutRef<'p'> & { children: ReactNode }) {
  return (
    <p className={cn('leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ className, children, ...props }: ComponentPropsWithoutRef<'blockquote'> & { children: ReactNode }) {
  return (
    <blockquote className={cn('font-display font-semibold italic leading-relaxed', className)} {...props}>
      {children}
    </blockquote>
  )
}
