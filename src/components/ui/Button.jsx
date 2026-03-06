export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
  ...props
}) {
  const base =
    'btn-shimmer inline-flex items-center gap-2 font-sans font-bold text-sm tracking-wide rounded-full px-7 py-3 transition-all duration-300'

  const variants = {
    primary:
      'bg-gradient-to-r from-sky to-rose text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:brightness-105',
    outline:
      'bg-transparent text-white border-2 border-white/60 hover:bg-white/15 hover:border-white hover:-translate-y-0.5 backdrop-blur-sm',
    'outline-dark':
      'bg-transparent text-sky-dark border-2 border-sky hover:bg-sky hover:text-white hover:-translate-y-0.5',
  }

  const cls = `${base} ${variants[variant] ?? ''} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  )
}
