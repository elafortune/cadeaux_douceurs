// ─── Liens sociaux ────────────────────────────────────────────────────────────
// Mettez a jour ces valeurs avec vos vraies coordonnees
export const socialLinks = {
  phone:     'tel:+33663960615',
  instagram: 'https://www.instagram.com/cadeaux_douceurs34/',
  tiktok:    'https://www.tiktok.com/@cadeaux_douceurs',
}

// ─── Presentation ─────────────────────────────────────────────────────────────
export const presentationItems = [
  {
    icon: 'Heart',
    title: 'Notre histoire',
    text: "Nee d'une passion profonde pour le textile et l'artisanat, Cadeaux Douceurs est une boutique dediee a l'art de la broderie personnalisee. Depuis nos debuts, nous mettons notre savoir-faire au service de vos envies les plus precieuses.",
  },
  {
    icon: 'Sparkles',
    title: 'Notre specialite',
    text: "La broderie sur textile dans toute sa splendeur : prenoms, monogrammes, logos, motifs floraux… Chaque realisation est unique et realisee avec soin, sur tous types de supports textiles.",
  },
  {
    icon: 'Scissors',
    title: 'Savoir-faire artisanal',
    text: "Un savoir-faire acquis avec les annees, alliant techniques traditionnelles et materiel moderne. La qualite de nos broderies est notre fierte et notre engagement envers chaque client.",
  },
  {
    icon: 'UserCheck',
    title: 'Service personnalise',
    text: "Chaque projet est unique comme vous. Nous vous accompagnons de la creation du motif jusqu'a la livraison, avec des conseils adaptes a vos besoins et votre budget.",
  },
]

// ─── Textiles avec tailles (serviettes + peignoirs) ──────────────────────────
export const featuredTextiles = [
  {
    emoji: '🛁',
    title: 'Serviettes & draps de bain',
    desc: 'De la serviette invitee au grand drap de bain — tous brodables a votre image.',
    sizes: [
      { label: '30×50 cm',   name: 'Serviette invitee' },
      { label: '50×100 cm',  name: 'Serviette de toilette' },
      { label: '70×140 cm',  name: 'Drap de douche' },
      { label: '100×150 cm', name: 'Drap de bain' },
    ],
  },
  {
    emoji: '🧖',
    title: 'Peignoirs adultes',
    desc: 'Peignoirs de bain luxueux brodes de votre prenom, initiales ou logo.',
    sizes: [
      { label: 'S' },
      { label: 'M' },
      { label: 'L' },
      { label: 'XL' },
      { label: 'XXL' },
    ],
  },
  {
    emoji: '🧒',
    title: 'Peignoirs enfants',
    desc: 'Des peignoirs doux et personnalises pour les tout-petits jusqu\'aux ados.',
    sizes: [
      { label: '2 ans' },
      { label: '4 ans' },
      { label: '8 — 14 ans' },
    ],
  },
]

// ─── Autres supports textiles ─────────────────────────────────────────────────
export const supportsItems = [
  {
    emoji: '👜',
    title: 'Sacs & tote bags',
    desc: 'Sacs en tissu personnalises : cadeaux utiles et originaux.',
  },
  {
    emoji: '👕',
    title: 'Vetements',
    desc: 'T-shirts, polos, vestes, blouses, uniformes... Tous vos vetements.',
  },
  {
    emoji: '🛏️',
    title: 'Linge de maison',
    desc: "Draps, taies d'oreiller, nappes, torchons... Le linge du quotidien sublime.",
  },
  {
    emoji: '🎁',
    title: 'Cadeaux personnalises',
    desc: 'Trousseau de naissance, cadeau de mariage, anniversaire... Idees uniques.',
  },
  {
    emoji: '👶',
    title: 'Layette & bebe',
    desc: 'Bodies, pyjamas, bavoirs, doudous... Des creations douces pour les tout-petits.',
  },
  {
    emoji: '🧢',
    title: 'Accessoires',
    desc: 'Casquettes, bonnets, echarpes, pochettes... La touche finale.',
  },
]

// ─── Coloris disponibles ──────────────────────────────────────────────────────
export const availableColors = [
  { name: 'Blanc',      hex: '#FFFFFF', light: true  },
  { name: 'Ecru',       hex: '#F5ECD7', light: true  },
  { name: 'Ficelle',    hex: '#C8B87A', light: true  },
  { name: 'Gris perle', hex: '#D0CCC7', light: true  },
  { name: 'Ciel',       hex: '#87CEEB', light: true  },
  { name: 'Corail',     hex: '#F07C6C', light: false },
  { name: 'Safran',     hex: '#E8970A', light: false },
  { name: 'Taupe',      hex: '#A08C80', light: false },
  { name: 'Anthracite', hex: '#454545', light: false },
  { name: 'Marine',     hex: '#1B2A6B', light: false },
  { name: 'Noir',       hex: '#1A1A1A', light: false },
]

// ─── Activites ────────────────────────────────────────────────────────────────
export const activitesItems = [
  {
    icon: 'Pen',
    title: 'Broderie personnalisee',
    desc: "Prenoms, monogrammes, dates, messages... Offrez un cadeau unique et inoubliable grave dans les fils. Chaque detail est soigne pour un resultat parfait.",
  },
  {
    icon: 'PartyPopper',
    title: 'Broderie evenementielle',
    desc: "Mariages, baptemes, anniversaires, fetes... Nous creeons des souvenirs textiles exceptionnels pour tous vos moments de vie importants.",
  },
  {
    icon: 'Building2',
    title: 'Broderie pour entreprises',
    desc: "Uniformes, tenues de travail, cadeaux d'entreprise avec votre logo... Renforcez votre image de marque avec des textiles professionnels et elegants.",
  },
  {
    icon: 'Gift',
    title: 'Cadeaux personnalises',
    desc: "Naissance, mariage, anniversaire... Nous concevons des cadeaux textiles qui touchent le coeur et restent dans les memoires. 100% sur-mesure.",
  },
  {
    icon: 'Paintbrush',
    title: 'Personnalisation textile',
    desc: "Apportez votre propre tissu ou choisissez parmi notre selection. Nous brodons selon votre motif, votre police, vos couleurs de fil.",
  },
  {
    icon: 'Layers',
    title: 'Sublimation',
    desc: "Impression haute definition sur polyester et textiles mixtes. Couleurs eclatantes, rendu photographique, ideal pour les logos et visuels complexes.",
    featured: true,
  },
]

// ─── Photos galerie broderie ──────────────────────────────────────────────────
export const photos = [
  '20200711_185956.jpg',
  '20200731_191747.jpg',
  '20201214_122343.jpg',
  '20201219_103726.jpg',
  '20210219_121350.jpg',
  '20210306_220534.jpg',
  '20210306_220609.jpg',
  '20220601_165840.jpg',
  'brod%20mylene.jpg',
  'FB_IMG_1614553707049.jpg',
  'FB_IMG_1644954966089.jpg',
  'FB_IMG_1644955005475.jpg',
  'FB_IMG_1644955260349.jpg',
  'FB_IMG_1644955268544.jpg',
  'FB_IMG_1644955278170.jpg',
  'FB_IMG_1644955288066(1).jpg',
  'FB_IMG_1644955288066.jpg',
  'FB_IMG_1644955297491.jpg',
  'FB_IMG_1644955316799.jpg',
  'FB_IMG_1644955334020.jpg',
  'FB_IMG_1644955347457.jpg',
  'FB_IMG_1644956201150.jpg',
  'FB_IMG_1644956218803.jpg',
  'FB_IMG_1644956460429.jpg',
  'FB_IMG_1644956501790.jpg',
  'FB_IMG_1644956565476.jpg',
  'FB_IMG_1644956735265.jpg',
  'FB_IMG_1644956778354.jpg',
  'FB_IMG_1644956882097.jpg',
  'FB_IMG_1644956907088.jpg',
  'FB_IMG_1644956924523.jpg',
  'FB_IMG_1644956932272.jpg',
  'FB_IMG_1644956947643.jpg',
  'FB_IMG_1644956965273.jpg',
  'FB_IMG_1644957136394.jpg',
  'FB_IMG_1651703329987.jpg',
  'FB_IMG_1651703346659.jpg',
  'IMG_20220505_111338(1).jpg',
  'IMG_20220505_111338(2).jpg',
  'IMG_20220505_111338.jpg',
  'IMG_20221111_120117(1).jpg',
  'IMG_20231001_170744.jpg',
  'IMG-20151018-WA0006.jpg',
  'IMG-20151018-WA0007.jpg',
  'IMG-20151018-WA0008.jpg',
  'IMG-20151125-WA0000.jpg',
  'IMG-20151125-WA0001.jpg',
  'IMG-20151125-WA0002.jpg',
  'IMG-20151125-WA0003.jpg',
  'IMG-20151125-WA0004.jpg',
  'IMG-20151125-WA0005.jpg',
  'IMG-20151125-WA0006.jpg',
  'IMG-20151125-WA0007.jpg',
  'IMG-20220215-WA0003.jpg',
  'IMG-20220215-WA0005.jpg',
  'IMG-20220215-WA0012.jpg',
  'IMG-20220215-WA0014.jpg',
]

// ─── Photos sublimation ───────────────────────────────────────────────────────
// Ajoutez ici les noms de fichiers places dans public/photo/sublimation/
export const photosSublimation = [
  'IMG_20231004_135611.jpg',
  'IMG_20231004_135631.jpg',
  'IMG_20231004_135644.jpg',
  'IMG_20231004_135700.jpg',
  'IMG_20231004_135827.jpg',
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqItems = [
  {
    question: 'Combien coute une broderie ?',
    answer:
      "Le tarif depend de la complexite du motif, du nombre de points et du support textile. Un prenom simple commence a partir de quelques euros. Contactez-nous pour un devis personnalise et sans engagement.",
  },
  {
    question: 'Quels textiles peuvent etre brodes ?',
    answer:
      "Nous brodons sur pratiquement tous les supports textiles : coton, lin, polyester, fleece, jean, velours... Serviettes, peignoirs, vetements, sacs, linge de maison, layette bebe et bien plus encore.",
  },
  {
    question: 'Quel est le delai de realisation ?',
    answer:
      "En general, comptez entre 3 et 7 jours ouvrables pour une commande standard. Pour des commandes en quantite ou des projets complexes, le delai peut varier. Nous faisons notre possible pour nous adapter a vos urgences.",
  },
  {
    question: 'Peut-on broder un prenom ou un texte personnalise ?',
    answer:
      "Absolument ! C'est meme notre specialite. Prenoms, initiales, monogrammes, dates, citations, messages... Vous choisissez la police, la taille, la couleur du fil, et nous realisons une broderie unique a votre image.",
  },
  {
    question: 'Faites-vous des commandes pour les entreprises ?',
    answer:
      "Oui, nous travaillons regulierement avec des entreprises pour la broderie de logos sur des uniformes, tenues de travail, vetements publicitaires ou cadeaux d'affaires. Des tarifs degressifs sont possibles selon les quantites.",
  },
  {
    question: 'Peut-on apporter son propre textile a broder ?',
    answer:
      "Bien sur ! Vous pouvez tout a fait nous apporter vos propres articles a personnaliser. Assurez-vous simplement que le tissu est en bon etat et adapte a la broderie. Nous vous conseillerons si necessaire.",
  },
  {
    question: 'Proposez-vous des cadeaux pour les naissances et mariages ?',
    answer:
      "Oui ! Nous adorons creer des cadeaux uniques pour les grandes occasions : coffrets naissance brodes, linge de bain personnalise pour les maries, coussins, doudous... Contactez-nous pour en discuter.",
  },
]
