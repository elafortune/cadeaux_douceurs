import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { supportsItems } from '../../data/siteData'

function SupportCard({ item, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} group bg-white rounded-2xl p-6 text-center border border-rose-light/30 shadow-sm card-hover cursor-default`}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-xlight to-rose-xlight flex items-center justify-center mx-auto mb-4 text-2xl transition-all duration-300 group-hover:from-sky group-hover:to-rose group-hover:scale-110">
        {item.emoji}
      </div>
      <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
      <p className="font-sans text-xs text-stone leading-relaxed">{item.desc}</p>
    </div>
  )
}

export default function Supports() {
  const headRef = useScrollReveal()

  return (
    <section id="supports" className="py-24 bg-linen">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headRef} className="reveal">
          <SectionHeading
            tag="Ce que nous brodons"
            title="Nos supports textiles"
            subtitle="La broderie s'adapte a une grande variete de supports. Voici nos specialites :"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {supportsItems.map((item, i) => (
            <SupportCard key={item.title} item={item} delay={(i % 6) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
