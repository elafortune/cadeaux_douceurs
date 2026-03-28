import { useMemo } from 'react'
import { Heart, Sparkles, Scissors, UserCheck } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { presentationItems } from '../../data/siteData'

const ALL_PHOTOS = [
  '/photo/broderie/FB_IMG_1644955288066.jpg',
  '/photo/broderie/FB_IMG_1644955297491.jpg',
  '/photo/broderie/FB_IMG_1644955316799.jpg',
  '/photo/broderie/FB_IMG_1644955334020.jpg',
  '/photo/broderie/FB_IMG_1644955347457.jpg',
  '/photo/broderie/FB_IMG_1644956201150.jpg',
  '/photo/broderie/FB_IMG_1644956218803.jpg',
  '/photo/broderie/FB_IMG_1644956460429.jpg',
  '/photo/broderie/FB_IMG_1644956501790.jpg',
  '/photo/broderie/FB_IMG_1644956565476.jpg',
  '/photo/broderie/FB_IMG_1644956735265.jpg',
  '/photo/broderie/FB_IMG_1644956778354.jpg',
  '/photo/broderie/FB_IMG_1644956882097.jpg',
  '/photo/broderie/FB_IMG_1644956907088.jpg',
  '/photo/broderie/FB_IMG_1644956924523.jpg',
  '/photo/broderie/FB_IMG_1644956932272.jpg',
  '/photo/broderie/FB_IMG_1644956947643.jpg',
  '/photo/broderie/FB_IMG_1644956965273.jpg',
  '/photo/broderie/FB_IMG_1644957136394.jpg',
  '/photo/broderie/FB_IMG_1651703329987.jpg',
  '/photo/broderie/FB_IMG_1651703346659.jpg',
  '/photo/broderie/IMG_20231004_135611.jpg',
  '/photo/broderie/IMG_20231004_135631.jpg',
  '/photo/broderie/IMG_20231004_135644.jpg',
  '/photo/broderie/IMG_20231004_135700.jpg',
  '/photo/broderie/IMG_20231004_135827.jpg',
  '/photo/broderie/IMG_20231001_170744.jpg',
]

function pickRandom(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

const iconMap = { Heart, Sparkles, Scissors, UserCheck }

function PresCard({ item, delay }) {
  const ref = useScrollReveal()
  const Icon = iconMap[item.icon] ?? Heart

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} card-hover bg-white rounded-2xl p-7 border border-sky-xlight/60 shadow-sm group`}
    >
      {/* Top bar */}
      <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky to-rose mb-5 line-draw" />

      {/* Icone */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-xlight to-rose-xlight flex items-center justify-center mb-5 transition-all duration-300 group-hover:from-sky group-hover:to-rose">
        <Icon
          size={22}
          className="text-sky-dark transition-colors duration-300 group-hover:text-white icon-micro"
        />
      </div>

      <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
      <p className="font-sans text-sm text-slate leading-relaxed">{item.text}</p>
    </div>
  )
}

export default function Presentation() {
  const photos = useMemo(() => pickRandom(ALL_PHOTOS, 5), [])

  return (
    <section id="presentation" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal" ref={useScrollReveal()}>
          <SectionHeading
            tag="Notre histoire"
            title={<>L'art de la broderie<br />a votre service</>}
            subtitle="Une passion transmise, un savoir-faire authentique, un service sur-mesure."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {presentationItems.map((item, i) => (
            <PresCard key={item.title} item={item} delay={i + 1} />
          ))}
        </div>

        {/* Petites photos */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {photos.map((src, i) => (
            <div
              key={i}
              className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-sky-xlight shadow-md flex-shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img src={src} alt={`broderie ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
