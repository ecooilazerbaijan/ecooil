'use client'

import { useState } from 'react'
import { Maximize2, ImageIcon } from 'lucide-react'
import { useLightbox } from '@/components/lightbox'

type MediaSlotProps = {
  src: string
  alt: string
  label?: string
  className?: string
  imageClassName?: string
  openable?: boolean
  eager?: boolean
}

export function MediaSlot({
  src,
  alt,
  label,
  className = '',
  imageClassName = 'object-cover',
  openable = true,
  eager = false,
}: MediaSlotProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const { open } = useLightbox()

  const canOpen = openable && status === 'loaded'

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border bg-secondary transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10 ${className}`}
    >
      {/* The real image. When the file is added at its path it loads automatically. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || '/placeholder.svg'}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-full w-full transition-all duration-700 ease-out ${imageClassName} ${
          status === 'loaded' ? 'opacity-100 group-hover:scale-[1.05]' : 'opacity-0'
        }`}
      />

      {/* Designed frame shown until the real image is present. */}
      {status !== 'loaded' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary to-mint/50 px-4 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card text-primary/70">
            <ImageIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          {label && (
            <span className="max-w-[85%] font-display text-sm font-medium text-mint-foreground text-balance">
              {label}
            </span>
          )}
          <span className="h-px w-10 bg-primary/20" aria-hidden="true" />
        </div>
      )}

      {/* Fullscreen trigger, only when a real image is loaded. */}
      {canOpen && (
        <button
          type="button"
          onClick={() => open({ src, alt })}
          className="absolute inset-0 flex items-end justify-end p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`View ${alt} fullscreen`}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest/80 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  )
}
