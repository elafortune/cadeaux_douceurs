import PageSEO        from '../components/seo/PageSEO'
import PageHeader    from '../components/ui/PageHeader'
import PageCTA       from '../components/ui/PageCTA'
import Presentation  from '../components/home/Presentation'
import { localBusinessSchema } from '../data/schemas'

export default function HistoirePage() {
  return (
    <>
      <PageSEO
        title="Notre Histoire — L'Atelier Cadeaux Douceurs à Montpellier"
        description="Née d'une passion pour le textile artisanal, Cadeaux Douceurs vous propose une broderie personnalisée authentique, réalisée avec soin depuis Montpellier (Hérault)."
        canonical="/notre-histoire"
        schema={localBusinessSchema}
      />

      <PageHeader
        tag="Notre histoire"
        title="Un atelier né d'une passion"
        subtitle="Savoir-faire artisanal et broderie personnalisée depuis Montpellier, Hérault."
      />

      <Presentation />

      <PageCTA page="histoire" />
    </>
  )
}
