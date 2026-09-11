'use client'

import { useEffect, useState } from 'react'
import { Sun, Aperture, Grid2x2, Fan, ShieldCheck } from 'lucide-react'

const stages = [
  {
    icon: Sun,
    label: 'Sunlight',
    detail: 'Raw sunlight reaches the concentrator.',
    temp: 32,
  },
  {
    icon: Aperture,
    label: 'Fresnel Lens',
    detail: 'The lens focuses sunlight onto the panel.',
    temp: 58,
  },
  {
    icon: Grid2x2,
    label: 'Solar Panel',
    detail: 'Concentrated light heats the panel — temperature climbs.',
    temp: 84,
  },
  {
    icon: Fan,
    label: 'Active Cooling',
    detail: 'The pump and fan kick in to bring the heat down.',
    temp: 68,
  },
  {
    icon: ShieldCheck,
    label: 'Protected',
    detail: 'Panel settles back into a safe operating range.',
    temp: 51,
  },
]

export function PrototypeVisual() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 2400)
    return () => clearInterval(id)
  }, [paused])

  const stage = stages[active]
  const tempColor =
    stage.temp >= 78 ? 'text-orange-500' : stage.temp >= 60 ? 'text-mint-foreground' : 'text-primary'

  return (
    <div
      className="relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card via-card to-mint/50 p-5 shadow-xl shadow-primary/5 sm:p-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      {/* dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* top row: live badge + temp readout */}
      <div className="relative flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-card/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-mint-foreground shadow-sm backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live simulation
        </span>

        <div className="text-right">
          <div className={`font-display text-2xl font-semibold leading-none transition-colors duration-500 ${tempColor}`}>
            {stage.temp}°C
          </div>
          <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            Panel temp
          </div>
        </div>
      </div>

      {/* center: animated flow diagram */}
      <div className="relative mt-2">
        <div className="relative">
          <div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-border" />
          <div
            className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)] transition-all duration-700 ease-in-out"
            style={{
              left: `calc(10% + ${(active / (stages.length - 1)) * 80}% - 5px)`,
            }}
            aria-hidden="true"
          />
          <div className="relative flex items-center justify-between">
            {stages.map((s, i) => {
              const isActive = i === active
              const Icon = s.icon
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={s.label}
                  className="group flex flex-col items-center gap-1 focus-visible:outline-none"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-12 sm:w-12 ${
                      isActive
                        ? 'scale-110 border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                        : 'border-border bg-card text-muted-foreground group-hover:border-primary/40 group-hover:text-primary'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${s.label === 'Active Cooling' ? 'animate-spin-slow' : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* bottom: active stage detail */}
      <div className="relative flex flex-col gap-1.5">
        <span className="font-display text-base font-semibold text-foreground sm:text-lg">
          {stage.label}
        </span>
        <p className="min-h-[2.5em] text-sm leading-snug text-muted-foreground">{stage.detail}</p>
        <a
          href="#prototype"
          className="group/link mt-1 inline-flex w-fit items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-forest"
        >
          See the real prototype photos
          <span className="transition-transform duration-300 group-hover/link:translate-y-0.5">↓</span>
        </a>
      </div>
    </div>
  )
}
