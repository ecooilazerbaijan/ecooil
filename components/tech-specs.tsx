import { Info } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { specifications } from '@/lib/site-data'

export function TechSpecs() {
  return (
    <section id="specifications" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Technical Specifications"
        title="Current prototype configuration"
        description="Only known, confirmed details about the prototype are listed here."
      />

      <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <dl className="divide-y divide-border">
          {specifications.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col gap-1 px-6 py-4 transition-colors duration-200 hover:bg-mint/25 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <dt className="font-display text-sm font-semibold text-foreground">{spec.label}</dt>
              <dd className="text-sm text-muted-foreground sm:text-right">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-5 flex items-start gap-3 rounded-xl border border-primary/15 bg-mint/40 px-4 py-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-mint-foreground">
          These specifications describe the current prototype configuration and may change during
          further development.
        </p>
      </Reveal>
    </section>
  )
}
