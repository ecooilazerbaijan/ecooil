import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { MediaSlot } from '@/components/media-slot'
import { prototypeComponents } from '@/lib/site-data'

export function ComponentGallery() {
  return (
    <section id="components" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Prototype Components"
          title="What the prototype is made of"
          description="Each part of the EcoOil prototype has a clear role. Individual images can be added for every component."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {prototypeComponents.map((component, i) => (
            <Reveal
              key={component.id}
              delay={(i % 3) * 80}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <MediaSlot
                src={component.image}
                alt={component.name}
                label={component.name}
                className="aspect-[4/3] rounded-none border-0 border-b border-border"
              />
              <div className="flex flex-col gap-1.5 p-5">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {component.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {component.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
