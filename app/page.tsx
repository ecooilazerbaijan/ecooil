import { LightboxProvider } from '@/components/lightbox'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { PrototypeSection } from '@/components/prototype-section'
import { ComponentGallery } from '@/components/component-gallery'
import { TechnologySection } from '@/components/technology-section'
import { HowItWorks } from '@/components/how-it-works'
import { TechSpecs } from '@/components/tech-specs'
import { TestingSection } from '@/components/testing-section'
import { AchievementsSection } from '@/components/achievements-section'
import { TimelineSection } from '@/components/timeline-section'
import { TeamSection } from '@/components/team-section'
import { VideoSection } from '@/components/video-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LightboxProvider>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <PrototypeSection />
        <ComponentGallery />
        <TechnologySection />
        <HowItWorks />
        <TechSpecs />
        <TestingSection />
        <AchievementsSection />
        <TimelineSection />
        <TeamSection />
        <VideoSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </LightboxProvider>
  )
}
