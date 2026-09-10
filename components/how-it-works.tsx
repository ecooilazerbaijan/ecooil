import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { howItWorksSteps } from '@/lib/site-data'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="Five steps from capture to protection"
          description="A simple, honest walkthrough of what happens inside the prototype during operation."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorksSteps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 80}
              className="hover-lift group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="font-display text-3xl font-semibold text-primary/30 transition-all duration-300 group-hover:text-primary/60">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
