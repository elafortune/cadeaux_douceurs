import { useState, useEffect, useCallback } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight, Plus, Layers, Scissors } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { photos, photosSublimation } from '../../data/siteData'

const STEP = 12

// Dossiers source par onglet
const SOURCE = {
  broderie:     '/photo/broderie/',
  sublimation:  '/photo/sublimation/',
}

/* ── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ src, index, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  let startX = 0
  const onTouchStart = (e) => { startX = e.changedTouches[0].clientX }
  const onTouchEnd   = (e) => {
    const dx = e.changedTouches[0].clientX - startX
    if (Math.abs(dx) > 50) dx < 0 ? onNext() : onPrev()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 bg-onyx/93 backdrop-blur-md" onClick={onClose} />

      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white hover:bg-rose hover:border-rose transition-all"
      >
        <X size={18} />
      </button>
      <button
        onClick={onPrev}
        aria-label="Precedente"
        className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white hover:bg-sky hover:border-sky transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={onNext}
        aria-label="Suivante"
        className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white hover:bg-sky hover:border-sky transition-all"
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 flex flex-col items-center gap-3 px-16 max-w-5xl w-full">
        <img
          key={src}
          src={src}
          alt={`Photo ${index + 1}`}
          className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
        />
        <p className="font-sans text-xs text-white/45 tracking-widest">{index + 1} / {total}</p>
      </div>
    </div>
  )
}

/* ── Item galerie ─────────────────────────────────────────── */
function GalleryItem({ src, index, total, onOpen, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm card-lift`}
      onClick={() => onOpen(index)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(index)}
      tabIndex={0}
      role="button"
      aria-label={`Voir photo ${index + 1} sur ${total}`}
    >
      <img
        src={src}
        alt={`Photo ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 card-img"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-sky/55 to-rose/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <ZoomIn size={26} className="text-white scale-75 group-hover:scale-100 transition-transform duration-300" />
      </div>
    </div>
  )
}

/* ── Grille paginée ───────────────────────────────────────── */
function PhotoGrid({ fileList, folder }) {
  const [visible,     setVisible]     = useState(STEP)
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const openLightbox  = useCallback((i) => setLightboxIdx(i), [])
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const prevPhoto     = useCallback(() => setLightboxIdx((i) => (i - 1 + fileList.length) % fileList.length), [fileList])
  const nextPhoto     = useCallback(() => setLightboxIdx((i) => (i + 1) % fileList.length), [fileList])

  // Réinitialiser la pagination si la liste change (changement d'onglet)
  useEffect(() => { setVisible(STEP); setLightboxIdx(null) }, [fileList])

  if (fileList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-stone/50">
        <Layers size={40} className="opacity-30" />
        <p className="font-sans text-sm text-center max-w-xs">
          Les photos seront affichees ici.<br />
          Deposez vos fichiers dans <code className="text-xs bg-sky-xlight text-sky-dark px-1.5 py-0.5 rounded">public/photo/sublimation/</code><br />
          puis ajoutez leurs noms dans <code className="text-xs bg-sky-xlight text-sky-dark px-1.5 py-0.5 rounded">src/data/siteData.js</code>
        </p>
      </div>
    )
  }

  const visibleFiles = fileList.slice(0, visible)

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-10">
        {visibleFiles.map((filename, i) => (
          <GalleryItem
            key={filename}
            src={`${folder}${filename}`}
            index={i}
            total={fileList.length}
            onOpen={openLightbox}
            delay={(i % 6) + 1}
          />
        ))}
      </div>

      {visible < fileList.length && (
        <div className="text-center">
          <button
            onClick={() => setVisible((v) => Math.min(v + STEP, fileList.length))}
            className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-sky to-rose text-white px-8 py-3 rounded-full font-sans text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <Plus size={16} />
            Voir plus ({fileList.length - visible} restantes)
          </button>
        </div>
      )}

      {lightboxIdx !== null && (
        <Lightbox
          src={`${folder}${fileList[lightboxIdx]}`}
          index={lightboxIdx}
          total={fileList.length}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  )
}

/* ── Section galerie principale ───────────────────────────── */
const TABS = [
  { id: 'broderie',    label: 'Broderie',    Icon: Scissors, data: photos,            folder: SOURCE.broderie    },
  { id: 'sublimation', label: 'Sublimation', Icon: Layers,   data: photosSublimation, folder: SOURCE.sublimation },
]

export default function Galerie() {
  const [activeTab, setActiveTab] = useState('broderie')
  const headRef = useScrollReveal()

  const currentTab = TABS.find((t) => t.id === activeTab)

  const subtitles = {
    broderie:    `${photos.length} realisations en broderie sur textile.`,
    sublimation: photosSublimation.length
      ? `${photosSublimation.length} realisations en sublimation.`
      : 'Photos de sublimation bientot disponibles.',
  }

  return (
    <section id="galerie" className="py-24 bg-linen">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tete */}
        <div ref={headRef} className="reveal">
          <SectionHeading
            tag="Nos creations"
            title="Galerie photo"
            subtitle={subtitles[activeTab]}
          />
        </div>

        {/* Onglets */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 p-1.5 bg-white rounded-full shadow-sm border border-sky-xlight/60">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-bold transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-sky to-rose text-white shadow-md'
                    : 'text-slate hover:text-charcoal hover:bg-sky-xlight/60'
                }`}
              >
                <Icon size={15} />
                {label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-normal ${
                    activeTab === id ? 'bg-white/20' : 'bg-sky-xlight text-sky-dark'
                  }`}
                >
                  {id === 'broderie' ? photos.length : photosSublimation.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille active */}
        <PhotoGrid
          key={activeTab}
          fileList={currentTab.data}
          folder={currentTab.folder}
        />
      </div>
    </section>
  )
}
