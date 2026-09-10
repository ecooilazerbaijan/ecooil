import { Mail, Link2, PlayCircle } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/ecooil-logo.png"
                alt="EcoOil logo"
                className="h-14 w-14 rounded-lg object-contain"
              />
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                EcoOil
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              Innovative Use and Protection of Solar Panels in Oil Production.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Link2 className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EcoOil. Clean-energy engineering project.
          </p>
          <p className="text-xs text-muted-foreground">Prototype project — not a commercial product.</p>
        </div>
      </div>
    </footer>
  )
}
