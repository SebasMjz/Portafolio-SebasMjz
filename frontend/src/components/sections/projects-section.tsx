import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { useLanguage } from '@/i18n/LanguageContext'
import { ProjectCard } from './project-card'
import type { Project } from '@/data/landing-content'

export function ProjectsSection() {
  const railRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()
  const p = t.projects

  const moveRail = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * railRef.current.clientWidth * 0.82, behavior: 'smooth' })
  }

  return (
    <section id="proyectos" className="overflow-hidden bg-brand-mist px-5 py-16 sm:px-8 sm:py-28 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 sm:mb-16 flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="type-label mb-4 border-l-[6px] border-brand-lime pl-4 text-brand-ink">{p.sectionLabel}</p>
            <TypographyH2 className="text-[clamp(2.2rem,7vw,7rem)] break-words uppercase">
              {p.title1}
              <br />
              <span className="text-brand-ink/35">{p.title2}</span>
            </TypographyH2>
            <TypographyP className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl font-semibold text-brand-ink/70">
              {p.subtitle}
            </TypographyP>
          </div>
          <TooltipProvider>
            <div className="flex gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-lg"
                    aria-label={p.prevLabel}
                    onClick={() => moveRail(-1)}
                    className="focus-ring rounded-full border-[3px] border-brand-ink bg-brand-paper hover:bg-brand-gold"
                  >
                    <ArrowLeft className="size-6" aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{p.prev}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-lg"
                    aria-label={p.nextLabel}
                    onClick={() => moveRail(1)}
                    className="focus-ring rounded-full border-[3px] border-brand-ink bg-brand-paper hover:bg-brand-gold"
                  >
                    <ArrowRight className="size-6" aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{p.next}</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
      <div ref={railRef} className="no-scrollbar mx-auto flex w-full max-w-[1600px] snap-x gap-8 overflow-x-auto px-0 pb-8 sm:px-1 lg:px-0">
        {p.items.map((project) => <ProjectCard key={project.id} project={project as Project} />)}
      </div>
    </section>
  )
}
