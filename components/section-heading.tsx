import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-mint/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-mint-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
