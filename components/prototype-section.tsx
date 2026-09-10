import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { MediaSlot } from '@/components/media-slot'

export function PrototypeSection() {
  return (
    <section id="prototype" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="The Prototype"
        title="The EcoOil Prototype"
        description="A physical prototype developed to demonstrate the EcoOil concept and its engineering approach."
      />
      <Reveal className="mt-10">
        <MediaSlot
          src="/images/prototype/ecooil-prototype-full.jpg"
          alt="Complete EcoOil prototype"
          label="Complete EcoOil Prototype"
          className="aspect-[16/9] shadow-xl shadow-primary/5"
        />
      </Reveal>
    </section>
  )
}
