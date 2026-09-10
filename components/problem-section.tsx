import { ThermometerSun, ShieldAlert, Sun } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const points = [
  {
    icon: Sun,
    title: 'High-temperature environments',
    description:
      'Solar panels often operate in hot conditions where heat build-up can affect the photovoltaic surface.',
  },
  {
    icon: ThermometerSun,
    title: 'Thermal stress',
    description:
      'Rising temperatures place thermal stress on the panel and the surrounding system during operation.',
  },
  {
    icon: ShieldAlert,
    title: 'Protection matters',
    description:
      'Managing heat is important for keeping a solar panel in a healthier operating condition over time.',
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="The Problem"
        title="Solar panels face heat where energy matters most"
        description="EcoOil starts from a simple engineering observation: in high-temperature settings, managing the heat around a solar panel is a real and practical challenge worth exploring."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {points.map((point, i) => (
          <Reveal
            key={point.title}
            delay={i * 90}
            className="hover-lift group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <point.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground">{point.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
