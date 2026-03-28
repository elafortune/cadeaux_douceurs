import { useState } from 'react'
import { Plus } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import { faqItems } from '../../data/siteData'

function FaqItem({ item, isOpen, onToggle, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} border rounded-2xl overflow-hidden transition-[box-shadow,border-color] duration-300 ${
        isOpen
          ? 'border-sky-light shadow-md bg-white'
          : 'border-sky-xlight/60 bg-white shadow-sm'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
          isOpen ? 'bg-gradient-to-r from-ivory to-linen' : 'hover:bg-ivory'
        }`}
        aria-expanded={isOpen}
      >
        <h3 className="font-sans font-bold text-charcoal text-base leading-snug">
          {item.question}
        </h3>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-gradient-to-br from-sky to-rose text-white rotate-45'
              : 'bg-sky-xlight text-sky-dark'
          }`}
        >
          <Plus size={16} />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="font-sans text-sm text-slate leading-relaxed px-6 pt-3 pb-6 border-t border-sky-xlight/50">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)
  const headRef = useScrollReveal()

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="py-24 bg-ivory">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headRef} className="reveal">
          <SectionHeading
            tag="Questions frequentes"
            title="Vos questions, nos reponses"
            subtitle="Retrouvez les reponses aux questions les plus posees par nos clients."
          />
        </div>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              delay={(i % 5) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
