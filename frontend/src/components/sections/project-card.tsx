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
      className="h-full min-w-[min(88vw,920px)] snap-start"
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <Card className="grid h-[600px] overflow-hidden rounded-none border-[3px] border-brand-ink bg-white p-0 shadow-[8px_8px_0_var(--brand-purple)] md:grid-cols-[0.95fr_1.05fr]">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-[4/3] overflow-hidden border-b-[3px] border-brand-ink md:border-r-[3px] md:border-b-0"
          aria-label={`Ver proyecto ${project.title} en nueva pestaña`}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover grayscale-[0.2] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
          <span className="absolute left-5 top-5 bg-brand-lime px-3 py-2 font-display text-xs font-black uppercase tracking-[0.12em] text-brand-ink brutalist-shadow">
            Caso destacado
          </span>
        </a>
        <CardContent className="flex flex-col justify-between p-8 sm:p-10">
          <div>
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <p className="type-label mb-2 text-brand-purple">Proyecto NoRest</p>
                <h3 className="font-display text-3xl font-black uppercase leading-none tracking-[-0.05em] sm:text-4xl">
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
                  <ArrowUpRight className="size-6" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="mb-6 flex items-end gap-4 border-y-[3px] border-brand-ink py-4">
              <span className="font-display text-4xl font-black tracking-[-0.06em] text-brand-purple sm:text-5xl">
                {project.metric}
              </span>
              <span className="pb-1 font-semibold uppercase tracking-[0.12em] text-brand-ink/60 text-xs sm:text-sm">
                {project.metricLabel}
              </span>
            </div>
            <p className="font-display text-lg font-semibold italic leading-relaxed text-brand-ink/90 sm:text-xl">
              “{project.quote}”
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-ink/20">
            <div>
              <p className="font-display text-sm font-black text-brand-ink">{project.client}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink/60">{project.role}</p>
            </div>
            <Button
              asChild
              className="focus-ring h-11 rounded-none border-[3px] border-brand-ink bg-brand-gold px-5 font-display font-black uppercase text-brand-ink brutalist-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-brand-gold hover:shadow-none"
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
  )
}
