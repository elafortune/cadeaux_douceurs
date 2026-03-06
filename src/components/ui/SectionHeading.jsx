export default function SectionHeading({ tag, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-14 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {tag && (
        <span
          className={`inline-block text-xs tracking-[0.2em] uppercase font-sans font-bold mb-3 px-4 py-1.5 rounded-full border ${
            light
              ? 'bg-white/15 text-white/90 border-white/25 backdrop-blur-sm'
              : 'bg-gradient-to-r from-sky-xlight to-rose-xlight text-sky-dark border-rose-light/50'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl leading-snug mb-4 ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-base leading-relaxed ${
            light ? 'text-white/75' : 'text-slate'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
