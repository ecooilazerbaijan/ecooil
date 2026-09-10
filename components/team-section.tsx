'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { team, type TeamMember } from '@/lib/site-data'

function TeamAvatar({ member }: { member: TeamMember }) {
  const [loaded, setLoaded] = useState(false)
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="group relative h-20 w-20 overflow-hidden rounded-2xl border border-border bg-mint transition-transform duration-300 hover:scale-[1.03]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={member.image || '/placeholder.svg'}
        alt={`${member.name}, ${member.role}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!loaded && (
        <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-semibold text-mint-foreground">
          {initials}
        </span>
      )}
    </div>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Team"
        title="The people behind EcoOil"
        description="A small, focused team responsible for the engineering, communication and operational side of the project."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {team.map((member, i) => (
          <Reveal
            key={member.name}
            delay={i * 90}
            className="hover-lift flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <TeamAvatar member={member} />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              {member.org && (
                <p className="mt-0.5 text-xs text-muted-foreground">{member.org}</p>
              )}
            </div>
            <ul className="flex flex-col gap-2">
              {member.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
