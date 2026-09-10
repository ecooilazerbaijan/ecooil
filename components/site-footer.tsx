import { Mail, Link2, PlayCircle } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="group flex items-center gap-2.5">
              <img
                src="/ecooil-logo.png"
                alt="EcoOil logo"
                className="h-20 w-20 rounded-lg object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
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
                    className="group/link relative inline-block text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
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
                  className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <Link2 className="h-4 w-4" aria-hidden="true" />
                  <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                  <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">YouTube</span>
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
