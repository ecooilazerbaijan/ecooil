import { LineChart, Sunrise, Sun, Sunset } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { testingAreas } from '@/lib/site-data'

function TemperatureChart() {
  // Scale: 0-100°C
  const scale = 100
  const uncooled = { from: 69, to: 84 }
  const cooled = { from: 47, to: 55 }
  return (
    <div className="mt-auto flex flex-col gap-3 rounded-xl border border-border bg-mint/20 p-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
          <span>Without cooling</span>
          <span className="font-semibold text-foreground">69–84°C</span>
        </div>
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute inset-y-0 rounded-full bg-orange-400"
            style={{
              left: `${(uncooled.from / scale) * 100}%`,
              width: `${((uncooled.to - uncooled.from) / scale) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
          <span>With active cooling</span>
          <span className="font-semibold text-primary">47–55°C</span>
        </div>
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute inset-y-0 rounded-full bg-primary"
            style={{
              left: `${(cooled.from / scale) * 100}%`,
              width: `${((cooled.to - cooled.from) / scale) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground/70">
        <span>0°C</span>
        <span>50°C</span>
        <span>100°C</span>
      </div>
    </div>
  )
}

function PerformanceChart() {
  const from = 30
  const to = 97
  return (
    <div className="mt-auto flex flex-col gap-3 rounded-xl border border-border bg-mint/20 p-4">
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute inset-y-0 rounded-full bg-gradient-to-r from-orange-400 via-mint-foreground to-primary"
          style={{ left: `${from}%`, width: `${to - from}%` }}
        />
      </div>
      <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
        <span>
          Low <span className="font-semibold text-foreground">30%</span>
        </span>
        <span>
          High <span className="font-semibold text-primary">97%</span>
        </span>
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground/80">
        Depends on Fresnel lens focus, panel condition, and weather.
      </p>
    </div>
  )
}

function OperatingConditionsPanel() {
  const points = [
    { icon: Sunrise, label: 'Morning' },
    { icon: Sun, label: 'Midday' },
    { icon: Sunset, label: 'Afternoon' },
  ]
  return (
    <div className="mt-auto flex flex-col gap-3 rounded-xl border border-border bg-mint/20 p-4">
      <div className="flex items-center justify-between">
        {points.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint text-primary">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-[10px] font-medium text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground/80">
        High-intensity summer sunlight, tested throughout the full course of the day.
      </p>
    </div>
  )
}

export function TestingSection() {
  return (
    <section id="testing" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testing / Results"
          title="Prototype testing"
          description="Measurements recorded during prototype testing sessions."
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
              {area.title === 'Temperature' && <TemperatureChart />}
              {area.title === 'Performance' && <PerformanceChart />}
              {area.title === 'Operating Conditions' && <OperatingConditionsPanel />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
