import { Link }     from 'react-router-dom'
import PageSEO      from '../components/seo/PageSEO'
import PageHeader  from '../components/ui/PageHeader'
import PageCTA     from '../components/ui/PageCTA'
import Galerie     from '../components/home/Galerie'
import { localBusinessSchema } from '../data/schemas'

// Prénoms populaires en France — enrichit le contenu textuel indexé par Google
// sans créer 500 pages. Google indexe ce texte statique + mots-clés de contexte.
const PRENOMS_POPULAIRES = [
  'Emma', 'Léa', 'Chloé', 'Inès', 'Jade', 'Lina', 'Mia', 'Lucie', 'Alice', 'Manon',
  'Zoé', 'Eva', 'Camille', 'Sarah', 'Clara', 'Anaïs', 'Marie', 'Julie', 'Laura', 'Léonie',
  'Lucas', 'Nathan', 'Tom', 'Théo', 'Hugo', 'Liam', 'Noah', 'Ethan', 'Mathis', 'Louis',
  'Gabriel', 'Raphael', 'Arthur', 'Jules', 'Adam', 'Axel', 'Dylan', 'Romain', 'Maxime', 'Alexis',
  'Yasmine', 'Imane', 'Amina', 'Sofia', 'Léa', 'Nora', 'Rayan', 'Ilyes', 'Enzo', 'Mohamed',
]

export default function GaleriePage() {
  return (
    <>
      <PageSEO
        title="Galerie Broderies Personnalisées — Réalisations Uniques | Montpellier"
        description="Découvrez nos créations brodées : serviettes prénom, peignoirs personnalisés, cadeaux naissance et mariage. Réalisations artisanales uniques à Montpellier, Hérault."
        canonical="/galerie"
        schema={localBusinessSchema}
      />

      <PageHeader
        tag="Nos créations"
        title="Galerie de réalisations"
        subtitle="Broderies et sublimations artisanales — chaque pièce est unique, faite avec passion à Montpellier."
      />

      {/* Galerie photos avec onglets broderie / sublimation */}
      <Galerie />

      {/* ── Section Prénoms populaires ─────────────────────────────────────────
          Stratégie SEO longue traîne : indexation sur "[Objet] brodé + [Prénom]"
          sans créer de pages individuelles.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-sky-xlight/30" aria-label="Broderie sur prénom — prénoms populaires">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs tracking-[0.2em] uppercase font-sans font-bold mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-xlight to-rose-xlight text-sky-dark border border-rose-light/50">
              Broderie sur prénom
            </span>
            <h2 className="font-serif text-3xl text-charcoal mb-3">
              Votre prénom brodé sur mesure
            </h2>
            <p className="font-sans text-base text-slate max-w-2xl mx-auto leading-relaxed">
              Nous brodons tous les prénoms sur{' '}
              <strong>peignoir brodé personnalisé</strong>,{' '}
              <strong>serviette brodée au prénom</strong>,{' '}
              <strong>cadeau naissance brodé</strong> ou tout autre support textile.
              Choisissez votre prénom, votre police et vos couleurs de fil.
            </p>
          </div>

          {/* Nuage de prénoms — contenu textuel indexable par Google */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-8"
            aria-label="Prénoms fréquemment brodés à Montpellier"
          >
            {PRENOMS_POPULAIRES.map((prenom) => (
              <span
                key={prenom}
                className="px-3 py-1.5 bg-gradient-to-r from-sky-xlight to-rose-xlight border border-rose-light/40 text-sky-dark rounded-full text-sm font-sans cursor-default hover:shadow-sm transition-shadow"
                title={`Broderie personnalisée prénom ${prenom} — Cadeaux Douceurs Montpellier`}
              >
                {prenom}
              </span>
            ))}
          </div>

          <div className="text-center">
            <p className="font-sans text-sm text-slate mb-5">
              Votre prénom n'est pas dans la liste ?{' '}
              <strong>Aucun problème</strong> — nous brodons{' '}
              <strong>tous les prénoms</strong> : français, arabes, hébraïques,
              composés, avec accents...
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/prestations"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky to-rose text-white px-6 py-3 rounded-full font-sans text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Commander une broderie prénom →
              </Link>
              <a
                href="tel:+33663960615"
                className="inline-flex items-center gap-2 border-2 border-sky text-sky-dark px-6 py-3 rounded-full font-sans text-sm font-bold hover:bg-sky hover:text-white transition-all"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageCTA page="galerie" />
    </>
  )
}
