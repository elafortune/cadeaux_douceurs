import PageSEO      from '../components/seo/PageSEO'
import PageHeader  from '../components/ui/PageHeader'
import PageCTA     from '../components/ui/PageCTA'
import Supports    from '../components/home/Supports'
import Activites   from '../components/home/Activites'
import { localBusinessSchema, serviceSchema } from '../data/schemas'

export default function PrestationsPage() {
  return (
    <>
      <PageSEO
        title="Broderie sur Mesure : Bébé, Mariage, Linge de Maison | Montpellier"
        description="Broderie bébé, mariage, uniformes et linge de maison personnalisé à Montpellier. Prénoms, monogrammes, logos sur tous supports textiles. Devis gratuit — livraison France."
        canonical="/prestations"
        schema={[localBusinessSchema, serviceSchema]}
      />

      <PageHeader
        tag="Nos prestations"
        title="Broderie & Sublimation sur mesure"
        subtitle="Peignoirs, serviettes, layette, linge de maison, vêtements... Nous brodons sur tous supports textiles à Montpellier."
      />

      <Supports />
      <Activites />

      <PageCTA page="prestations" />
    </>
  )
}
