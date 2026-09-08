import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Project } from '@/data/landing-content'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="h-full min-w-[min(92vw,920px)] snap-start"
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="grid min-h-[500px] md:h-[500px] overflow-hidden rounded-none border-[3px] border-brand-ink bg-white p-0 shadow-[8px_8px_0_var(--brand-purple)] md:grid-cols-[0.95fr_1.05fr]">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-52 sm:h-64 md:h-auto overflow-hidden border-b-[3px] border-brand-ink md:border-r-[3px] md:border-b-0"
            aria-label={`Ver proyecto ${project.title} en nueva pestaña`}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover grayscale-[0.2] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-brand-ink/0 transition-colors duration-300 group-hover:bg-brand-ink/10" />
            <span className="absolute left-4 top-4 sm:left-5 sm:top-5 bg-brand-lime px-3 py-1.5 sm:py-2 font-display text-xs font-black uppercase tracking-[0.12em] text-brand-ink brutalist-shadow">
              Caso destacado
            </span>
          </a>
          <CardContent className="flex flex-col justify-between p-5 sm:p-8 md:p-10">
            <div>
              <div className="mb-4 sm:mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="type-label mb-1.5 text-brand-purple">Proyecto NoRest</p>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight tracking-[-0.04em]">
                    {project.title}
                  </h3>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="icon-lg"
                  className="focus-ring shrink-0 rounded-full border-[3px] border-brand-ink bg-brand-paper hover:bg-brand-gold"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${project.title} en nueva pestaña`}
                    title={`Abrir ${project.title} en nueva pestaña`}
                  >
                    <ArrowUpRight className="size-5 sm:size-6" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="mb-4 sm:mb-6 flex items-end gap-3 sm:gap-4 border-y-[3px] border-brand-ink py-3 sm:py-4">
                <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.06em] text-brand-purple">
                  {project.metric}
                </span>
                <span className="pb-1 font-semibold uppercase tracking-[0.12em] text-brand-ink/60 text-xs sm:text-sm">
                  {project.metricLabel}
                </span>
              </div>
              <p className="font-display text-base sm:text-lg font-semibold italic leading-relaxed text-brand-ink/90">
                "{project.quote}"
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-brand-ink/20">
              <Button
                asChild
                className="focus-ring h-11 sm:h-12 w-full rounded-none border-[3px] border-brand-ink bg-brand-gold px-5 font-display font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-brand-gold hover:shadow-none text-sm sm:text-base"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Ver proyecto
                  <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
