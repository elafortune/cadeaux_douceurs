import PageSEO      from '../components/seo/PageSEO'
import PageHeader  from '../components/ui/PageHeader'
import PageCTA     from '../components/ui/PageCTA'
import Faq         from '../components/home/Faq'
import { buildFaqSchema } from '../data/schemas'
import { faqItems }       from '../data/siteData'

export default function FaqPage() {
  return (
    <>
      <PageSEO
        title="FAQ Broderie Personnalisée — Prix, Délais & Conseils | Montpellier"
        description="Combien coûte une broderie ? Quel délai ? Puis-je apporter mon textile ? Toutes les réponses sur la broderie personnalisée à Montpellier. Résultats enrichis Google."
        canonical="/faq"
        schema={buildFaqSchema(faqItems)}
      />

      <PageHeader
        tag="Questions fréquentes"
        title="Vos questions, nos réponses"
        subtitle="Tout ce que vous devez savoir sur la broderie personnalisée et la sublimation."
      />

      <Faq />

      <PageCTA page="faq" />
    </>
  )
}
