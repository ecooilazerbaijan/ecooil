import { Trophy, Calendar, Tag } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { MediaSlot } from '@/components/media-slot'
import { achievements } from '@/lib/achievements'

export function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition and milestones"
        description="EcoOil has taken part in competitions and clean-energy programs, earning recognition along the way."
      />

      <div className="mt-12 flex flex-col gap-8">
        {achievements.map((achievement, index) => {
          return (
            <Reveal
              key={achievement.id}
              delay={index * 60}
              className="hover-lift grid grid-cols-1 gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="flex flex-col gap-4">
                {achievement.placement && (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                    <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                    {achievement.placement}
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold leading-tight text-foreground text-balance">
                  {achievement.title}
                </h3>
                {achievement.competition && (
                  <p className="text-sm font-medium text-mint-foreground">
                    {achievement.competition}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {achievement.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {achievement.year}
                  </span>
                  {achievement.category && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      <Tag className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      {achievement.category}
                    </span>
                  )}
                </div>
              </div>

              <MediaSlot
                src={achievement.coverImage}
                alt={achievement.title}
                openable={false}
                imageClassName="object-cover"
                className="aspect-[4/3] bg-secondary sm:aspect-auto sm:h-full"
              />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
