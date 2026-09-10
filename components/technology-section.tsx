import { Sun, Aperture, Grid2x2, Thermometer, Cpu, Fan, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const flow = [
  { label: 'Sunlight', icon: Sun },
  { label: 'Fresnel Lens', icon: Aperture },
  { label: 'Solar Panel', icon: Grid2x2 },
  { label: 'Temperature Monitoring', icon: Thermometer },
  { label: 'Cooling Control', icon: Cpu },
  { label: 'Cooling System', icon: Fan },
  { label: 'Thermal Management', icon: ShieldCheck },
]

export function TechnologySection() {
  return (
    <section id="technology" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Technology"
        title="How energy flows through EcoOil"
        description="From sunlight to thermal management, each stage connects to the next in a single continuous chain."
        align="center"
      />

      <div className="mx-auto mt-14 max-w-4xl">
        <ol className="relative flex flex-col gap-3">
          {/* vertical connecting line */}
          <span
            aria-hidden="true"
            className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-primary/30 to-primary/10 sm:left-1/2 sm:-translate-x-1/2"
          />
          {flow.map((stage, i) => (
            <Reveal
              as="li"
              key={stage.label}
              delay={i * 70}
              className={`relative flex items-center gap-4 sm:w-1/2 ${
                i % 2 === 1 ? 'sm:ml-auto sm:flex-row' : 'sm:mr-auto sm:flex-row-reverse sm:text-right'
              }`}
            >
              <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-card text-primary shadow-sm">
                <stage.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div
                className={`flex-1 rounded-xl border border-border bg-card px-4 py-3 shadow-sm ${
                  i % 2 === 1 ? '' : 'sm:text-right'
                }`}
              >
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Stage {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-display text-base font-semibold text-foreground">
                  {stage.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
