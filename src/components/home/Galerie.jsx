import { useState, useEffect, useCallback } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { photos } from '../../data/siteData'

const STEP = 12

/* ── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ index, onClose, onPrev, onNext }) {
  // Verrouillage du scroll quand ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Navigation clavier + fermeture Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  // Swipe tactile
  let touchStartX = 0
  const onTouchStart = (e) => { touchStartX = e.changedTouches[0].clientX }
  const onTouchEnd   = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(dx) > 50) dx < 0 ? onNext() : onPrev()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-onyx/92 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Fermer */}
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white hover:bg-rose hover:border-rose transition-all"
      >
        <X size={18} />
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        aria-label="Photo precedente"
        className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white hover:bg-sky hover:border-sky transition-all"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        aria-label="Photo suivante"
        className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white hover:bg-sky hover:border-sky transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Image */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-16 max-w-5xl w-full">
        <img
          key={index}
          src={`/photos_cadeaux_douceurs/${photos[index]}`}
          alt={`Realisation Cadeaux Douceurs ${index + 1}`}
          className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
        />
        <p className="font-sans text-xs text-white/50 tracking-widest">
          {index + 1} / {photos.length}
        </p>
      </div>
    </div>
  )
}

/* ── Photo item ───────────────────────────────────────────── */
function GalleryItem({ filename, index, onOpen, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm card-lift`}
      onClick={() => onOpen(index)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(index)}
      tabIndex={0}
      role="button"
      aria-label={`Voir la photo ${index + 1}`}
    >
      <img
        src={`/photos_cadeaux_douceurs/${filename}`}
        alt={`Broderie Cadeaux Douceurs - photo ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 card-img"
      />
      {/* Overlay hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky/55 to-rose/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <ZoomIn size={28} className="text-white scale-75 group-hover:scale-100 transition-transform duration-300" />
      </div>
    </div>
  )
}

/* ── Galerie principale ───────────────────────────────────── */
export default function Galerie() {
  const [visible,    setVisible]    = useState(STEP)
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const headRef = useScrollReveal()

  const openLightbox  = useCallback((idx) => setLightboxIdx(idx), [])
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const prevPhoto     = useCallback(() => setLightboxIdx((i) => (i - 1 + photos.length) % photos.length), [])
  const nextPhoto     = useCallback(() => setLightboxIdx((i) => (i + 1) % photos.length), [])

  const loadMore = () => setVisible((v) => Math.min(v + STEP, photos.length))

  return (
    <section id="galerie" className="py-24 bg-linen">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className="reveal">
          <SectionHeading
            tag="Nos creations"
            title="Galerie photo"
            subtitle="Decouvrez quelques-unes de nos realisations en broderie sur textile."
          />
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {photos.slice(0, visible).map((filename, i) => (
            <GalleryItem
              key={filename}
              filename={filename}
              index={i}
              onOpen={openLightbox}
              delay={(i % 6) + 1}
            />
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        {visible < photos.length && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-sky to-rose text-white px-8 py-3 rounded-full font-sans text-sm tracking-wide font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Plus size={16} />
              Voir plus de creations ({photos.length - visible} restantes)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}
