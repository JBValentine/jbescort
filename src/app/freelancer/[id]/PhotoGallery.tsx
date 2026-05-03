'use client'

import { useState, useEffect, useCallback } from 'react'

interface Props {
  photos: string[]
  name: string
  serviceIcon: string
  serviceLabel: string
}

export default function PhotoGallery({ photos, name, serviceIcon, serviceLabel }: Props) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = useCallback(() => setCurrent(i => (i - 1 + photos.length) % photos.length), [photos.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % photos.length), [photos.length])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  if (!photos?.length) return null

  return (
    <>
      {/* Main photo */}
      <div
        className="relative w-full aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden mb-3 shadow-md cursor-zoom-in"
        onClick={() => setLightbox(true)}
      >
        <img
          src={photos[current]}
          alt={`${name} ${current + 1}`}
          className="w-full h-full object-cover object-top transition-opacity duration-200"
        />
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          {serviceIcon} {serviceLabel}
        </span>
        {photos.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full pointer-events-none">
            {current + 1} / {photos.length}
          </span>
        )}
        {/* zoom hint */}
        <span className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full pointer-events-none">
          🔍 点击放大
        </span>
      </div>

      {/* Thumbnail strip */}
      {photos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden bg-gray-200 ring-2 transition-all ${
                i === current ? 'ring-[#0088cc]' : 'ring-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={photo}
                alt={`${name} ${i + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none z-10"
            onClick={() => setLightbox(false)}
          >
            ✕
          </button>

          {/* Counter */}
          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {current + 1} / {photos.length}
          </span>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-xl z-10"
              onClick={e => { e.stopPropagation(); prev() }}
            >
              ‹
            </button>
          )}

          {/* Image */}
          <img
            src={photos[current]}
            alt={`${name} ${current + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg select-none"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          {photos.length > 1 && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-xl z-10"
              onClick={e => { e.stopPropagation(); next() }}
            >
              ›
            </button>
          )}

          {/* Dot indicators */}
          {photos.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setCurrent(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current ? 'bg-white w-3' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
