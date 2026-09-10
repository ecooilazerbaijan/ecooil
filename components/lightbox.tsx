'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { X, ZoomIn, ZoomOut } from 'lucide-react'

type LightboxImage = { src: string; alt: string }

type LightboxContextValue = {
  open: (image: LightboxImage) => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null)
  const [zoomed, setZoomed] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const open = useCallback((img: LightboxImage) => {
    setImage(img)
    setZoomed(false)
  }, [])

  const close = useCallback(() => {
    setImage(null)
    setZoomed(false)
  }, [])

  useEffect(() => {
    if (!image) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = original
    }
  }, [image, close])

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${image.alt} — enlarged view`}
          className="fixed inset-0 z-[100] flex flex-col bg-forest/92 backdrop-blur-sm animate-overlay-in"
          onClick={close}
        >
          <div className="flex items-center justify-end gap-2 p-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setZoomed((z) => !z)
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
            >
              {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                close()
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close enlarged view"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center overflow-auto p-4 pt-0 sm:p-8 sm:pt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              onClick={(e) => {
                e.stopPropagation()
                setZoomed((z) => !z)
              }}
              className={`animate-modal-scale-in rounded-lg shadow-2xl transition-transform duration-300 ${
                zoomed
                  ? 'max-w-none scale-100 cursor-zoom-out sm:w-auto'
                  : 'max-h-full max-w-full cursor-zoom-in object-contain'
              }`}
              style={zoomed ? { width: 'min(1600px, 150%)' } : undefined}
            />
          </div>
          <p className="pb-6 text-center text-sm text-white/70">{image.alt}</p>
        </div>
      )}
    </LightboxContext.Provider>
  )
}
