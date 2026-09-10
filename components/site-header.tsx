'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-background/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="EcoOil home"
        >
          <img
            src="/ecooil-logo.png"
            alt="EcoOil logo"
            className="h-16 w-16 rounded-lg object-contain transition-transform duration-500 group-hover:rotate-3 sm:h-20 sm:w-20"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            EcoOil
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-forest hover:shadow-md hover:shadow-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors duration-300 hover:bg-mint/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <Menu
            className={`absolute h-5 w-5 transition-all duration-300 ${open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
          />
          <X
            className={`absolute h-5 w-5 transition-all duration-300 ${open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
          />
        </button>
      </nav>

      <div className={`mobile-nav-panel border-border bg-background/95 backdrop-blur-md lg:hidden ${open ? 'is-open border-t' : ''}`}>
        <div>
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className="transition-all duration-300"
                style={{
                  transitionDelay: open ? `${i * 40}ms` : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateY(-6px)',
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-mint/60 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-full bg-primary px-3 py-2.5 text-center text-sm font-medium text-primary-foreground transition-transform duration-300 active:scale-95"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
