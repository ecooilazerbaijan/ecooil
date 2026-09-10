import { ArrowRight, Award } from 'lucide-react'
import { MediaSlot } from '@/components/media-slot'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* soft ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 55% at 80% 0%, color-mix(in oklch, var(--mint) 70%, transparent), transparent 70%), radial-gradient(50% 45% at 0% 20%, color-mix(in oklch, var(--accent) 60%, transparent), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-[8%] -z-10 h-40 w-40 rounded-full bg-mint/40 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[4%] -z-10 h-56 w-56 rounded-full bg-accent/50 blur-3xl animate-float-slow-reverse"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-6">
          <Reveal variant="fade">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-mint-foreground shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Clean Energy Engineering Project
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.4rem]">
              Innovative Use and Protection of Solar Panels in Oil Production
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              EcoOil explores a practical approach to solar energy protection and thermal management
              through solar concentration, temperature monitoring and active cooling.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technology"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-lg hover:shadow-primary/25 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore the Technology
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#achievements"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-mint/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Award
                className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12"
                aria-hidden="true"
              />
              View Achievements
            </a>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-3xl bg-mint/50 blur-xl"
          />
          <MediaSlot
            src="/images/prototype/ecooil-prototype-hero.jpg"
            alt="The complete EcoOil prototype"
            label="EcoOil Prototype"
            eager
            className="aspect-[4/3] shadow-xl shadow-primary/5"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-mint-foreground shadow-sm backdrop-blur">
            Physical engineering prototype
          </span>
        </Reveal>
      </div>
    </section>
  )
}
