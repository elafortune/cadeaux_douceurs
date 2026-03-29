import { Phone, Instagram, Mail } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import TikTokIcon from '../ui/TikTokIcon'
import { socialLinks } from '../../data/siteData'

const contactCards = [
  {
    href:    socialLinks.phone,
    icon:    Phone,
    label:   'Appelez-nous',
    sub:     '+33 6 63 96 06 15',
    bg:      'from-emerald-400/20 to-emerald-500/20',
    iconBg:  'bg-emerald-400/25',
    hoverBg: 'hover:bg-emerald-400/10',
    target:  '_self',
  },
  {
    href:    'mailto:rosarita.lafortune@gmail.com',
    icon:    Mail,
    label:   'Email',
    sub:     'rosarita.lafortune@gmail.com',
    bg:      'from-violet-400/20 to-violet-500/20',
    iconBg:  'bg-violet-400/25',
    hoverBg: 'hover:bg-violet-400/10',
    target:  '_self',
  },
  {
    href:    socialLinks.instagram,
    icon:    Instagram,
    label:   'Instagram',
    sub:     'Envoyez-nous un message',
    bg:      'from-rose/20 to-rose-dark/20',
    iconBg:  'bg-rose/25',
    hoverBg: 'hover:bg-rose/10',
    target:  '_blank',
  },
  {
    href:    socialLinks.tiktok,
    isTiktok: true,
    label:   'TikTok',
    sub:     'Suivez nos creations',
    bg:      'from-sky/20 to-sky-dark/20',
    iconBg:  'bg-sky/25',
    hoverBg: 'hover:bg-sky/10',
    target:  '_blank',
  },
]

function ContactCard({ card, delay }) {
  const ref = useScrollReveal()
  const Icon = card.icon

  return (
    <a
      ref={ref}
      href={card.href}
      target={card.target}
      rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`reveal reveal-delay-${delay} flex items-center gap-5 px-7 py-6 rounded-2xl bg-white/12 border border-white/20 backdrop-blur-sm text-white transition-all duration-300 ${card.hoverBg} hover:border-white/40 hover:-translate-y-1.5 hover:shadow-xl flex-1 min-w-[240px] max-w-xs`}
    >
      <div className={`w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110`}>
        {card.isTiktok
          ? <TikTokIcon className="w-6 h-6" />
          : <Icon size={24} />
        }
      </div>
      <div>
        <span className="block font-serif text-lg text-white">{card.label}</span>
        <span className="block font-sans text-xs text-white/65 mt-0.5">{card.sub}</span>
      </div>
    </a>
  )
}

export default function Contact() {
  const headRef = useScrollReveal()

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3A7CA5 0%, #C45578 100%)' }}
    >
      {/* Halo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-white/8 animate-float" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/6 animate-float" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div ref={headRef} className="reveal">
          <SectionHeading
            tag="Nous joindre"
            title={<>Contactez<span className="italic">-nous</span></>}
            subtitle="Nous sommes disponibles pour tous vos projets de broderie personnalisee. N'hesitez pas, nous repondons rapidement."
            light
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 flex-wrap">
          {contactCards.map((card, i) => (
            <ContactCard key={card.label} card={card} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
