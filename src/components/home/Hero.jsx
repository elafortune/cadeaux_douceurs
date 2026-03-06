import { Images, Send, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-center"
    >
      {/* Fond dégradé inspiré du logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-dark via-sky-light to-rose" />

      {/* Logo en fond transparent */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/logo_cadeaux_douceurs.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.13,
          mixBlendMode: 'luminosity',
        }}
      />

      {/* Cercles décoratifs flottants */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-white/10 animate-float" />
        <div
          className="absolute bottom-10 -left-24 w-72 h-72 rounded-full bg-rose-light/20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-white/8 animate-float"
          style={{ animationDelay: '1s' }}
        />
        {/* Grille de points */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-0">
        {/* Nom de marque principal */}
        <h1
          className="font-serif text-5xl md:text-7xl text-white leading-tight mb-3 animate-fade-in-up"
          style={{ animationDelay: '0.3s', textShadow: '0 2px 30px rgba(0,0,0,0.2)' }}
        >
          Cadeaux{' '}
          <span
            className="italic"
            style={{
              background: 'linear-gradient(90deg, #fff 0%, #FFD6E5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Douceurs
          </span>
        </h1>

        {/* Eyebrow */}
        <p
          className="font-sans text-xs tracking-[0.25em] uppercase text-white/80 mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          Artisanat textile &amp; personnalisation
        </p>

        {/* Ligne décorative */}
        <div
          className="h-px bg-white/30 line-hero-draw mx-auto mb-6"
          style={{ width: '60px' }}
        />

        {/* Sous-titre broderie */}
        <h2
          className="font-serif text-2xl md:text-3xl text-white/90 leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.55s', textShadow: '0 2px 20px rgba(0,0,0,0.15)' }}
        >
          La broderie artisanale{' '}
          <span className="italic text-white/75">a votre image</span>
        </h2>

        {/* Sous-titre */}
        <p
          className="font-sans text-base md:text-lg text-white/85 leading-relaxed mb-10 max-w-xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Creations uniques realisees avec passion et savoir-faire.
          <br className="hidden md:block" />
          Pour vos cadeaux, evenements et projets d'entreprise.
        </p>

        {/* Boutons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.75s' }}
        >
          <Button href="#galerie" variant="outline">
            <Images size={16} />
            Voir nos realisations
          </Button>
          <Button href="#contact" variant="outline">
            <Send size={15} />
            Nous contacter
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#presentation"
        aria-label="Defiler vers le bas"
        className="absolute bottom-8 left-1/2 text-white/60 hover:text-white transition-colors animate-bounce-slow"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
