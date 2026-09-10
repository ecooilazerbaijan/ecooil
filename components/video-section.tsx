'use client'

import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { CONTACT } from '@/lib/site-data'

export function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="video" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mb-10 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-mint/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-mint-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Project Video
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            See EcoOil in Action
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            Watch the full project explanation and learn how the EcoOil system works.
          </p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
          <div className="relative aspect-video w-full bg-forest">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${CONTACT.youtubeId}?autoplay=1&rel=0`}
                title="EcoOil — full project explanation"
                allow="accelerated-download; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 flex flex-col items-center justify-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
                aria-label="Play the EcoOil project video"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '26px 26px',
                  }}
                />
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-mint text-forest shadow-lg transition group-hover:scale-105">
                  <Play className="h-8 w-8 translate-x-0.5" aria-hidden="true" />
                </span>
                <span className="relative font-display text-base font-medium text-white/90">
                  Watch the full project explanation
                </span>
              </button>
            )}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center">
          <a
            href={CONTACT.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Watch the Full Project
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
