/**
 * Hero minimaliste pour les pages dédiées (hors Accueil).
 * Compense la hauteur de la Navbar fixe et donne un identifiant visuel cohérent.
 */
export default function PageHeader({ tag, title, subtitle }) {
  return (
    <section className="relative pt-32 pb-16 text-white text-center overflow-hidden">
      {/* Fond dégradé identique au Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-dark via-sky-light to-rose" />

      {/* Grille de points décorative */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {tag && (
          <span className="inline-block text-xs tracking-[0.22em] uppercase font-sans font-bold mb-4 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm">
            {tag}
          </span>
        )}
        <h1
          className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.15)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
