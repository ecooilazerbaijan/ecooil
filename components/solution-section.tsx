import { CheckCircle2, FlaskConical, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const stages = [
  {
    icon: CheckCircle2,
    tag: 'Existing prototype',
    description:
      'A working physical prototype that brings together solar concentration, temperature monitoring and active cooling.',
  },
  {
    icon: FlaskConical,
    tag: 'Demonstrated concept',
    description:
      'The concept has been demonstrated in a controlled prototype setting to show the engineering approach.',
  },
  {
    icon: Rocket,
    tag: 'Future development',
    description:
      'The design can be refined further, with real measurements and iteration guiding the next steps.',
  },
]

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
            The Solution
          </span>
          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            A prototype that concentrates light, watches temperature, and cools on demand
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/75 text-pretty">
            EcoOil combines a Fresnel lens, temperature monitoring and an active cooling loop into a
            single prototype. We present it honestly across three clear stages.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {stages.map((stage, i) => (
            <Reveal
              key={stage.tag}
              delay={i * 90}
              className="group flex flex-col gap-4 rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-mint/30 hover:bg-white/[0.09]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-forest transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <stage.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold">{stage.tag}</h3>
              <p className="text-sm leading-relaxed text-white/75">{stage.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
