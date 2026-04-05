import { categoryAlts } from '../../data/photoAlts'

/**
 * Image optimisée : WebP avec fallback JPG/PNG, lazy-load natif.
 * @param {string}  src       - Chemin vers le fichier source (jpg/png)
 * @param {string}  [alt]     - Texte alternatif SEO
 * @param {string}  [category] - "broderie" | "sublimation" (pour alt auto)
 * @param {string}  [className]
 * @param {number}  [width]
 * @param {number}  [height]
 * @param {boolean} [eager]   - true uniquement pour les images above-the-fold
 */
export default function OptimizedImage({
  src,
  alt,
  category = 'broderie',
  className = '',
  width,
  height,
  eager = false,
}) {
  // Remplace l'extension par .webp en gérant l'encodage URL (%20 → espace dans le nom)
  const webpSrc = src
    .replace(/%20/g, ' ')              // décode les espaces encodés
    .replace(/\.(jpg|jpeg|png)$/i, '.webp')
    .replace(/ /g, '%20')             // ré-encode pour l'URL
  const resolvedAlt = alt ?? categoryAlts[category] ?? 'Broderie personnalisée — Cadeaux Douceurs Montpellier'

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={resolvedAlt}
        className={className}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  )
}
