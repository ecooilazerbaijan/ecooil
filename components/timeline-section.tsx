import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { timeline } from '@/lib/site-data'

export function TimelineSection() {
  return (
    <section id="timeline" className="bg-forest py-20 text-white sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
            Project Timeline
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Milestones so far
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/75 text-pretty">
            A record of the confirmed milestones EcoOil has reached.
          </p>
        </Reveal>

        <Reveal as="div" className="relative mt-12 flex flex-col gap-8 pl-8">
          <ol className="contents">
          <span
            aria-hidden="true"
            className="timeline-line absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-mint/60 via-mint/30 to-transparent"
          />
          {timeline.map((item, i) => (
            <Reveal as="li" key={`${item.year}-${item.title}`} delay={200 + i * 120} className="relative">
              <span
                className="absolute -left-8 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-mint bg-forest transition-transform duration-300 hover:scale-125"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">
                {item.year}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{item.description}</p>
            </Reveal>
          ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
