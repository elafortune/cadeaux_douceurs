import Hero from '../components/home/Hero'
import Presentation from '../components/home/Presentation'
import Supports from '../components/home/Supports'
import Activites from '../components/home/Activites'
import Galerie from '../components/home/Galerie'
import Faq from '../components/home/Faq'
import Contact from '../components/home/Contact'

export default function HomePage() {
  return (
    <>
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
