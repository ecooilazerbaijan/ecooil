import { Mail, Link2, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CONTACT } from '@/lib/site-data'

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch with EcoOil"
        description="Reach out by email or connect with the project on LinkedIn."
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-primary">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Email EcoOil</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-1 inline-block break-all text-sm text-muted-foreground underline-offset-4 transition hover:text-primary hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-md hover:shadow-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Email EcoOil
            <Mail className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal
          delay={90}
          className="hover-lift group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Link2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              EcoOil Azerbaijan on LinkedIn
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Follow the project and its updates on LinkedIn.
            </p>
          </div>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-mint/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Visit LinkedIn
            <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
