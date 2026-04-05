import { useState, useEffect } from 'react'
import { NavLink, Link }       from 'react-router-dom'
import { Instagram, Menu, X, Phone } from 'lucide-react'
import TikTokIcon from '../ui/TikTokIcon'
import { socialLinks } from '../../data/siteData'

const navLinks = [
  { label: 'Accueil',        to: '/' },
  { label: 'Notre histoire', to: '/notre-histoire' },
  { label: 'Prestations',   to: '/prestations' },
  { label: 'Galerie',        to: '/galerie' },
  { label: 'FAQ',            to: '/faq' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (!e.target.closest('nav')) setOpen(false) }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [open])

  const handleNavClick = () => setOpen(false)

  const linkClass = ({ isActive }) =>
    `nav-link font-sans text-[13px] tracking-[0.16em] uppercase transition-colors duration-200 ${
      isActive
        ? scrolled ? 'text-rose font-bold' : 'text-white font-bold underline underline-offset-4 decoration-white/50'
        : scrolled ? 'text-charcoal/80 hover:text-rose' : 'text-white/90 hover:text-white'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `font-sans text-sm tracking-[0.2em] uppercase transition-colors ${
      isActive ? 'text-rose' : 'text-stone/70 hover:text-white'
    }`

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-xl shadow-sm border-b border-sky-xlight'
          : open
          ? 'bg-onyx/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={handleNavClick}
        >
          <img
            src="/logo_cadeaux_douceurs.png"
            alt="Cadeaux Douceurs — Broderie artisanale Montpellier"
            className="w-14 h-14 rounded-2xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`font-serif text-lg tracking-wide transition-all duration-500 ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
          >
            Cadeaux <span className={scrolled ? 'gradient-text' : 'text-white/90'}>Douceurs</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}

          {/* Icônes sociales */}
          <div
            className={`flex items-center gap-3 pl-4 ml-1 border-l transition-colors ${
              scrolled ? 'border-charcoal/15' : 'border-white/20'
            }`}
          >
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cadeaux Douceurs"
              className={`transition-colors ${scrolled ? 'text-charcoal/60 hover:text-rose' : 'text-white/75 hover:text-white'}`}
            >
              <Instagram size={18} />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Cadeaux Douceurs"
              className={`transition-colors ${scrolled ? 'text-charcoal/60 hover:text-rose' : 'text-white/75 hover:text-white'}`}
            >
              <TikTokIcon className="w-[18px] h-[18px]" />
            </a>
          </div>

          {/* CTA téléphone */}
          <a
            href={socialLinks.phone}
            className="btn-shimmer flex items-center gap-2 bg-gradient-to-r from-sky to-rose text-white px-5 py-2 rounded-full font-sans text-xs tracking-[0.15em] uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={13} />
            Nous contacter
          </a>
        </div>

        {/* Toggle mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`md:hidden transition-colors ${
            scrolled ? 'text-charcoal/80 hover:text-charcoal' : 'text-white/85 hover:text-white'
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-onyx/97 backdrop-blur-xl border-t border-white/10 animate-fade-in-down">
          <div className="flex flex-col items-center gap-6 py-10">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={mobileLinkClass}
                onClick={handleNavClick}
              >
                {label}
              </NavLink>
            ))}

            <a
              href={socialLinks.phone}
              onClick={handleNavClick}
              className="btn-shimmer flex items-center gap-2 bg-gradient-to-r from-sky to-rose text-white px-8 py-3 rounded-full font-sans text-xs tracking-[0.2em] uppercase shadow-md mt-2"
            >
              <Phone size={13} />
              Nous contacter
            </a>

            <div className="flex items-center gap-6 pt-3 border-t border-white/10 w-20 justify-center">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone/50 hover:text-rose transition-colors">
                <Instagram size={20} />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-stone/50 hover:text-rose transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
