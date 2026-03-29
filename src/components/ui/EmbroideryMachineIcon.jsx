export default function EmbroideryMachineIcon({ size = 40, className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Bobines de fil sur le dessus */}
      <ellipse cx="10" cy="5"  rx="3.5" ry="2" />
      <ellipse cx="10" cy="9"  rx="3.5" ry="2" />
      <line x1="6.5" y1="5" x2="6.5" y2="9" />
      <line x1="13.5" y1="5" x2="13.5" y2="9" />

      <ellipse cx="20" cy="5"  rx="3.5" ry="2" />
      <ellipse cx="20" cy="9"  rx="3.5" ry="2" />
      <line x1="16.5" y1="5" x2="16.5" y2="9" />
      <line x1="23.5" y1="5" x2="23.5" y2="9" />

      {/* Corps principal de la machine (bloc gauche) */}
      <rect x="2" y="9" width="14" height="30" rx="2" />

      {/* Bras horizontal */}
      <rect x="2" y="9" width="44" height="9" rx="2" />

      {/* Tête à aiguilles (extrémité droite du bras) */}
      <rect x="36" y="18" width="9" height="10" rx="1.5" />

      {/* Aiguilles (3 barres) */}
      <line x1="38.5" y1="28" x2="38.5" y2="37" strokeWidth="1.5" />
      <line x1="40.5" y1="28" x2="40.5" y2="37" strokeWidth="1.5" />
      <line x1="42.5" y1="28" x2="42.5" y2="37" strokeWidth="1.5" />

      {/* Pied presseur */}
      <line x1="36.5" y1="37" x2="44.5" y2="37" strokeWidth="2" />

      {/* Tambour de broderie (cercle + cercle intérieur) */}
      <circle cx="40.5" cy="43" r="4.5" />
      <circle cx="40.5" cy="43" r="2" />

      {/* Plateau / base */}
      <line x1="2" y1="39" x2="34" y2="39" />
      <rect x="2" y="39" width="32" height="3" rx="1" />
      <line x1="5"  y1="42" x2="5"  y2="46" />
      <line x1="30" y1="42" x2="30" y2="46" />
      <line x1="3"  y1="46" x2="32" y2="46" />
    </svg>
  )
}
