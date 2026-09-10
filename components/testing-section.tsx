import { LineChart } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { testingAreas } from '@/lib/site-data'

export function TestingSection() {
  return (
    <section id="testing" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testing / Results"
          title="Prototype testing"
          description="Real measurements will be added here as they are recorded. These areas are prepared to hold genuine data — no numbers are shown until they are measured."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testingAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 90}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-primary">
                  <LineChart className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">{area.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              <div className="mt-auto flex h-28 items-center justify-center rounded-xl border border-dashed border-primary/25 bg-mint/25">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-mint-foreground">
                  Real data can be added
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
