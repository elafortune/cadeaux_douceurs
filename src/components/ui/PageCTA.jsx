import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

const ctas = {
  galerie: {
    text: 'Une réalisation vous plaît ?',
    links: [
      { to: '/prestations', label: 'Voir nos prestations', primary: true },
      { href: 'tel:+33663960615', label: 'Nous appeler', primary: false },
    ],
  },
  prestations: {
    text: "Besoin d'inspiration avant de commander ?",
    links: [
      { to: '/galerie', label: 'Parcourir la galerie', primary: true },
      { href: 'tel:+33663960615', label: 'Demander un devis gratuit', primary: false },
    ],
  },
  faq: {
    text: 'Prêt à lancer votre projet ?',
    links: [
      { to: '/prestations', label: 'Voir nos prestations', primary: true },
      { to: '/galerie',     label: 'Voir la galerie',     primary: false },
    ],
  },
  histoire: {
    text: 'Découvrez notre savoir-faire en images',
    links: [
      { to: '/galerie',     label: 'Voir nos réalisations', primary: true },
      { to: '/prestations', label: 'Nos prestations',       primary: false },
    ],
  },
}

export default function PageCTA({ page }) {
  const { text, links } = ctas[page] ?? ctas.galerie

  return (
    <section className="py-16 bg-white border-t border-sky-xlight/40">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="font-serif text-2xl md:text-3xl text-charcoal mb-8">{text}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map(({ to, href, label, primary }) =>
            to ? (
              <Link
                key={label}
                to={to}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-sans text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  primary
                    ? 'bg-gradient-to-r from-sky to-rose text-white shadow-md'
                    : 'border-2 border-sky text-sky-dark hover:bg-sky hover:text-white'
                }`}
              >
                {label}
                <ArrowRight size={14} />
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-sans text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                  primary
                    ? 'bg-gradient-to-r from-sky to-rose text-white shadow-md hover:shadow-lg'
                    : 'border-2 border-sky text-sky-dark hover:bg-sky hover:text-white'
                }`}
              >
                <Phone size={14} />
                {label}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  )
}
