import { useCallback } from 'react'
import { LanguageProvider } from '@/i18n/LanguageContext'
import { MotionConfig } from 'motion/react'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { ContactSection } from '@/components/sections/contact-section'
import { HeroSection } from '@/components/sections/hero-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { NoRestSection } from '@/components/sections/norest-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { TooltipProvider } from '@/components/ui/tooltip'

function App() {
  const focusContact = useCallback(() => {
    window.requestAnimationFrame(() => {
      document.getElementById('contact-name')?.focus()
    })
  }, [])

  return (
    <LanguageProvider>
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <a href="#contenido" className="focus-ring sr-only fixed left-4 top-4 z-[100] bg-brand-gold px-4 py-3 font-display font-black text-brand-ink focus:not-sr-only">
          Saltar al contenido
        </a>
        <SiteHeader onContactClick={focusContact} />
        <main id="contenido">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <NoRestSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </TooltipProvider>
    </MotionConfig>
    </LanguageProvider>
  )
}

export default App
