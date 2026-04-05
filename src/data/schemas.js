const siteUrl = 'https://www.cadeaux-douceurs.com'

// ── LocalBusiness — Atelier Montpellier ───────────────────────────────────────
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#atelier`,
  name: 'Cadeaux Douceurs',
  description:
    'Atelier de broderie personnalisée artisanale à Montpellier (Hérault). Broderie sur peignoirs, serviettes, layette bébé, linge de maison, vêtements et accessoires.',
  url: siteUrl,
  telephone: '+33663960615',
  email: 'rosarita.lafortune@gmail.com',
  image: `${siteUrl}/logo_cadeaux_douceurs.png`,
  logo: `${siteUrl}/logo_cadeaux_douceurs.png`,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Virement bancaire',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Montpellier',
    postalCode: '34000',
    addressRegion: 'Hérault',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '43.6108',
    longitude: '3.8767',
  },
  areaServed: [
    { '@type': 'City', name: 'Montpellier' },
    { '@type': 'AdministrativeArea', name: 'Hérault' },
    { '@type': 'Country', name: 'France' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/cadeaux_douceurs34/',
    'https://www.tiktok.com/@cadeaux_douceurs',
  ],
}

// ── Service : Broderie personnalisée ──────────────────────────────────────────
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Broderie Personnalisée',
  description:
    'Service de broderie artisanale sur mesure à Montpellier : prénoms, monogrammes, logos sur peignoirs, serviettes, layette bébé, linge de maison et vêtements.',
  provider: { '@id': `${siteUrl}/#atelier` },
  areaServed: [
    { '@type': 'City', name: 'Montpellier' },
    { '@type': 'Country', name: 'France' },
  ],
  serviceType: 'Broderie sur textile',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '3',
    highPrice: '30',
    offerCount: '10',
  },
}

// ── FAQ Schema (généré depuis les données) ────────────────────────────────────
export const buildFaqSchema = (faqItems) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
})

// ── BreadcrumbList ────────────────────────────────────────────────────────────
export const buildBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, url }, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${siteUrl}${url}`,
  })),
})
