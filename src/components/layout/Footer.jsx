import { Instagram, Phone } from 'lucide-react'
import TikTokIcon from '../ui/TikTokIcon'
import { socialLinks } from '../../data/siteData'

const navLinks = [
  { label: 'Accueil',       href: '#accueil' },
  { label: 'Notre histoire', href: '#presentation' },
  { label: 'Supports',      href: '#supports' },
  { label: 'Prestations',   href: '#activites' },
  { label: 'Galerie',       href: '#galerie' },
  { label: 'FAQ',           href: '#faq' },
  { label: 'Contact',       href: '#contact' },
]

const horaires = [
  { jour: 'Lundi — Vendredi', heure: '9h — 18h' },
  { jour: 'Samedi',           heure: '10h — 17h' },
  { jour: 'Dimanche',         heure: 'Ferme' },
]

export default function Footer() {
  return (
    <footer className="bg-onyx text-stone relative overflow-hidden">
      {/* Halo décoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,_rgba(91,170,210,0.08)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_80%,_rgba(232,121,155,0.06)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">

          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <a href="#accueil" className="flex items-center gap-3">
              <img
                src="/logo_cadeaux_douceurs.png"
                alt="Cadeaux Douceurs"
                className="w-14 h-14 rounded-full object-cover shadow-lg"
              />
            </a>
            <span className="font-serif text-xl tracking-wide text-white/90">
              Cadeaux <span className="gradient-text">Douceurs</span>
            </span>
            <p className="font-sans text-sm leading-relaxed text-stone/55 max-w-xs">
              Broderie artisanale sur tous supports textiles.
              Personnalisation unique pour chaque occasion.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-4 h-px bg-rose/40" />
              <span className="font-sans text-xs text-stone/30 tracking-widest uppercase">Artisan brodeur</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-stone/50 hover:text-rose hover:border-rose/40 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-stone/50 hover:text-sky hover:border-sky/40 transition-all"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.phone}
                aria-label="Telephone"
                className="w-9 h-9 rounded-full bg-white/8 border border-white/12 flex items-center justify-center text-stone/50 hover:text-warm hover:border-warm/40 transition-all"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-rose/80 mb-1">
              Navigation
            </span>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-sm text-stone/50 hover:text-white transition-colors w-fit"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Horaires */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-rose/80 mb-1">
              Horaires
            </span>
            {horaires.map(({ jour, heure }) => (
              <div key={jour} className="flex justify-between gap-4 text-sm">
                <span className="text-stone/45">{jour}</span>
                <span className={`font-semibold ${heure === 'Ferme' ? 'text-stone/30' : 'text-white/80'}`}>
                  {heure}
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-rose/80 mb-1">
              Nous joindre
            </span>
            <a
              href={socialLinks.phone}
              className="flex items-center gap-2 text-stone/50 hover:text-white transition-colors text-sm"
            >
              <Phone size={16} className="text-warm/70" />
              <span>Par telephone</span>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone/50 hover:text-white transition-colors text-sm"
            >
              <Instagram size={16} className="text-rose/70" />
              <span>Instagram</span>
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone/50 hover:text-white transition-colors text-sm"
            >
              <TikTokIcon className="w-4 h-4 text-sky/70" />
              <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs tracking-widest uppercase text-stone/25">
            &copy; {new Date().getFullYear()} Cadeaux Douceurs
          </p>
          <p className="font-sans text-xs text-stone/20 italic">
            Broderie artisanale &bull; Personnalisation textile
          </p>
        </div>
      </div>
    </footer>
  )
}
