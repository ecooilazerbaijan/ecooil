'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealVariant = 'up' | 'scale' | 'left' | 'right' | 'fade'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  variant?: RevealVariant
}

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal',
  scale: 'reveal-scale',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
}

export function Reveal({ children, as, className = '', delay = 0, variant = 'up' }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${variantClass[variant]} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
