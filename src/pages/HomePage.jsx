import PageSEO      from '../components/seo/PageSEO'
import Hero         from '../components/home/Hero'
import Presentation from '../components/home/Presentation'
import Supports     from '../components/home/Supports'
import Activites    from '../components/home/Activites'
import Galerie      from '../components/home/Galerie'
import Faq          from '../components/home/Faq'
import Contact      from '../components/home/Contact'
import { localBusinessSchema, serviceSchema } from '../data/schemas'

export default function HomePage() {
  return (
    <>
      <PageSEO
        title="Cadeaux Douceurs — Broderie Artisanale Personnalisée | Montpellier (34)"
        description="Offrez un cadeau unique et inoubliable : broderie personnalisée sur peignoirs, serviettes, layette bébé et linge de maison. Artisan passionné à Montpellier, Hérault (34)."
        canonical="/"
        schema={[localBusinessSchema, serviceSchema]}
      />
      <Hero />
      <Presentation />
      <Supports />
      <Activites />
      <Galerie />
      <Faq />
      <Contact />
    </>
  )
}
