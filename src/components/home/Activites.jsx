import { Pen, PartyPopper, Building2, Gift, Paintbrush } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { activitesItems } from '../../data/siteData'

const iconMap = { Pen, PartyPopper, Building2, Gift, Paintbrush }

function ActiviteCard({ item, index, delay }) {
  const ref = useScrollReveal()
  const Icon = iconMap[item.icon] ?? Gift

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} flex gap-5 bg-white rounded-2xl p-6 border border-sky-xlight/60 shadow-sm card-hover group`}
    >
      {/* Numero */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky to-rose flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <span className="font-serif text-white text-lg font-bold">{index + 1}</span>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Icon size={16} className="text-rose icon-micro" />
          <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
        </div>
        <p className="font-sans text-sm text-slate leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Activites() {
  const headRef = useScrollReveal()

  return (
    <section id="activites" className="py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className="reveal">
          <SectionHeading
            tag="Nos prestations"
            title="Nos activites de broderie"
            subtitle="Du projet individuel aux commandes en serie, nous repondons a toutes vos demandes."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activitesItems.map((item, i) => (
            <ActiviteCard key={item.title} item={item} index={i} delay={(i % 5) + 1} />
          ))}
        </div>

        {/* Petites photos */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            '/photos_cadeaux_douceurs/IMG_20231004_135611.jpg',
            '/photos_cadeaux_douceurs/IMG_20231004_135631.jpg',
            '/photos_cadeaux_douceurs/IMG_20231004_135644.jpg',
            '/photos_cadeaux_douceurs/IMG_20231004_135700.jpg',
            '/photos_cadeaux_douceurs/IMG_20231004_135827.jpg',
          ].map((src, i) => (
            <div
              key={i}
              className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-sky-xlight shadow-md flex-shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img src={src} alt={`activite broderie ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
