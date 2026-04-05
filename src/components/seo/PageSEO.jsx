import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.cadeaux-douceurs.com'

/**
 * Gestion dynamique des balises <head> par page.
 * @param {string}  title       - Balise <title> (max 60 car.)
 * @param {string}  description - Meta description (max 155 car.)
 * @param {string}  canonical   - Chemin relatif, ex: "/galerie"
 * @param {string}  [image]     - Chemin relatif vers l'image OG
 * @param {object}  [schema]    - Objet JSON-LD ou tableau d'objets
 */
export default function PageSEO({ title, description, canonical, image, schema }) {
  const fullUrl   = `${SITE_URL}${canonical}`
  const fullImage = image ? `${SITE_URL}${image}` : `${SITE_URL}/logo_cadeaux_douceurs.png`

  const schemaArray = Array.isArray(schema) ? schema : schema ? [schema] : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description"        content={description} />
      <meta name="robots"             content="index, follow" />
      <link rel="canonical"           href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={fullImage} />
      <meta property="og:url"         content={fullUrl} />
      <meta property="og:type"        content="website" />
      <meta property="og:locale"      content="fr_FR" />
      <meta property="og:site_name"   content="Cadeaux Douceurs" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={fullImage} />

      {/* JSON-LD */}
      {schemaArray.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
