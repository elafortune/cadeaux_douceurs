import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { featuredTextiles, supportsItems, availableColors } from '../../data/siteData'

/* ── Carte textile avec tailles ─────────────────────────── */
function TextileCard({ item, image, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} bg-white rounded-2xl p-6 border border-sky-xlight/70 shadow-sm card-hover`}
    >
      {/* Top bar */}
      <div className="h-1 w-10 rounded-full bg-gradient-to-r from-sky to-rose mb-5 line-draw" />

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-sky-xlight shadow-sm flex-shrink-0">
          <img src={image} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-serif text-lg text-charcoal leading-snug">{item.title}</h3>
          <p className="font-sans text-xs text-stone mt-1 leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {/* Tailles / dimensions */}
      <div className="mt-4">
        <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-stone/60 mb-2">
          Tailles disponibles
        </p>
        <div className="flex flex-wrap gap-2">
          {item.sizes.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-sky-xlight to-rose-xlight border border-sky-xlight text-sky-dark font-sans font-bold text-xs whitespace-nowrap">
                {s.label}
              </span>
              {s.name && (
                <span className="font-sans text-[9px] text-stone/55 mt-0.5 text-center max-w-[80px]">
                  {s.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Carte support simple ────────────────────────────────── */
function SupportCard({ item, image, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} group bg-white rounded-2xl p-5 text-center border border-rose-light/30 shadow-sm card-hover cursor-default`}
    >
      <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 border-2 border-sky-xlight shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
        <img src={image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-serif text-base text-charcoal mb-1">{item.title}</h3>
      <p className="font-sans text-xs text-stone leading-relaxed">{item.desc}</p>
    </div>
  )
}

/* ── Palette de coloris ──────────────────────────────────── */
function ColorPalette() {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal mt-16 bg-white rounded-2xl p-8 border border-sky-xlight/50 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🎨</span>
        <div>
          <h3 className="font-serif text-xl text-charcoal">Nos coloris disponibles</h3>
          <p className="font-sans text-xs text-stone mt-0.5">
            Disponibles sur serviettes, peignoirs et linge de maison — et bien d'autres encore.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {availableColors.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-1.5 group cursor-default">
            <div
              className="w-10 h-10 rounded-full border-2 shadow-sm transition-transform duration-200 group-hover:scale-110 group-hover:shadow-md"
              style={{
                backgroundColor: c.hex,
                borderColor: c.light ? '#D6EFFA' : 'transparent',
                outline: c.name === 'Blanc' ? '1px solid #e5e7eb' : 'none',
              }}
              title={c.name}
            />
            <span className="font-sans text-[10px] text-stone/70 text-center leading-none max-w-[52px]">
              {c.name}
            </span>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1.5">
          <div
            className="w-10 h-10 rounded-full border-2 border-dashed border-sky/40 flex items-center justify-center shadow-sm"
            title="Et bien d'autres"
          >
            <span className="text-sky font-bold text-xs">+</span>
          </div>
          <span className="font-sans text-[10px] text-stone/50 text-center leading-none max-w-[52px]">
            Et plus...
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Section principale ──────────────────────────────────── */
export default function Supports() {
  const headRef = useScrollReveal()
  const bannerRef = useScrollReveal()

  return (
    <section id="supports" className="py-24 bg-linen">
      <div className="max-w-6xl mx-auto px-6">

        {/* En-tete */}
        <div ref={headRef} className="reveal">
          <SectionHeading
            tag="Broderie & Sublimation"
            title="Nos supports textiles"
            subtitle="Nous brodons sur tout support tissu — et proposons egalement la sublimation pour les impressions haute definition."
          />
        </div>

        {/* Banniere "tout support tissu" */}
        <div
          ref={bannerRef}
          className="reveal mb-10 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center gap-4 text-white"
          style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #E8799B 100%)' }}
        >
          <div className="text-4xl flex-shrink-0">🪡</div>
          <div>
            <p className="font-serif text-lg font-semibold leading-snug">
              Broderie sur <span className="italic">tout support tissu</span>
            </p>
            <p className="font-sans text-sm text-white/80 mt-1">
              Coton, lin, polyester, velours, jean, fleece... Si c'est du tissu, nous le brodons.
              Apportez vos propres articles ou choisissez parmi nos references.
            </p>
          </div>
        </div>

        {/* Cartes textiles avec tailles (serviettes + peignoirs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {featuredTextiles.map((item, i) => (
            <TextileCard key={item.title} item={item} image={item.image} delay={i + 1} />
          ))}
        </div>

        {/* Autres supports */}
        <p className="font-sans text-xs tracking-[0.18em] uppercase text-stone/50 mb-4 text-center">
          Autres supports
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {supportsItems.map((item, i) => (
            <SupportCard key={item.title} item={item} image={item.image} delay={(i % 6) + 1} />
          ))}
        </div>

        {/* Palette de coloris */}
        <ColorPalette />
      </div>
    </section>
  )
}
