const baseFaq = [
  {
    q: 'Proposez-vous un diagnostic avant intervention ?',
    a: 'Oui : contrôle électronique, inspection rapide et conseil clair avant de commencer.',
  },
  {
    q: 'Sur quelles marques intervenez-vous ?',
    a: 'Nous travaillons sur les marques premium et sportives selon le besoin, le moteur et la faisabilité technique.',
  },
]

function detail(partial) {
  return {
    stats: [
      { label: 'Projets', value: 200, suffix: '+' },
      { label: 'Satisfaction', value: 98, suffix: '%' },
    ],
    faq: baseFaq,
    ...partial,
  }
}

export const TUNING_MODULES = [
  {
    id: 'launch',
    title: 'Départ optimisé',
    description: 'Départ plus net, paramétré selon la transmission et le niveau d’adhérence.',
  },
  {
    id: 'pops',
    title: 'Sonorité sportive',
    description: 'Son plus expressif, réglé proprement pour rester cohérent avec la ligne.',
  },
  {
    id: 'rev',
    title: 'Coupure sportive',
    description: 'Coupure plus sportive et comportement moteur plus vivant en haut régime.',
  },
  {
    id: 'nls',
    title: 'Passage rapide',
    description: 'Passages plus rapides sur les configurations compatibles.',
  },
  {
    id: 'multimap',
    title: 'Cartographies multiples',
    description: 'Plusieurs modes possibles : quotidien, sport, valet ou configuration spéciale.',
  },
  {
    id: 'ssoff',
    title: 'Start/Stop désactivé',
    description: 'Démarrage plus agréable au quotidien, sans automatisme gênant.',
  },
  {
    id: 's1',
    title: 'Stage 1',
    description: 'Gain de couple et de réactivité avec configuration d’origine.',
  },
  {
    id: 's2',
    title: 'Stage 2',
    description: 'Réglage plus poussé pour une voiture déjà équipée et mieux libérée.',
  },
  {
    id: 's3',
    title: 'Stage 3',
    description: 'Projet avancé avec pièces, carburant et calibration suivis ensemble.',
  },
]

export const SERVICES = [
  {
    slug: 'reprogrammation-moteur',
    title: 'Reprogrammation Moteur',
    excerpt: 'Cartographie moteur sur mesure pour plus de couple, de réponse et de plaisir.',
    image: '/services/reprogrammation-moteur.jfif',
    detail: detail({
      tag: 'ECU',
      heroSub: 'Votre moteur ajusté avec méthode, pas avec hasard.',
      body: [
        'Nous adaptons la cartographie à votre usage : quotidien, route, sport ou projet plus poussé.',
        'Lecture, sauvegarde, relevés et vérification : chaque étape est contrôlée avant la livraison.',
      ],
      features: ['Lecture sécurisée', 'Relevés de contrôle', 'Réglage personnalisé', 'Suivi après intervention'],
      specs: [
        { label: 'Durée', value: '3h - 1j' },
        { label: 'Validation', value: 'Route + relevés' },
      ],
      gains: [
        { label: 'Couple', value: '+8%', unit: ' typ.*' },
        { label: 'Réponse', value: 'Plus vive', unit: '' },
      ],
      tuningIds: ['s1', 's2', 'multimap', 'ssoff'],
      previewVideo: 'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4',
    }),
  },
  {
    slug: 'systeme-echappement',
    title: "Système d'Échappement",
    excerpt: 'Son plus propre, meilleure respiration et finitions adaptées à votre voiture.',
    image: '/services/systeme-echappement.jfif',
    detail: detail({
      tag: 'Échappement',
      heroSub: 'Une signature sonore plus présente, sans perdre la maîtrise.',
      body: [
        'Lignes inox ou titane, valves, embouts et adaptation selon votre objectif sonore.',
        'Nous soignons les fixations, les alignements et les contrôles pour un montage fiable.',
      ],
      features: ['Valves', 'Embouts premium', 'Contrôle des fuites', 'Réglage sonore'],
      specs: [
        { label: 'Matériaux', value: 'Inox / Titane' },
        { label: 'Commande', value: 'Origine / Télécommande' },
      ],
      gains: [
        { label: 'Respiration', value: 'Optimisée', unit: '' },
      ],
      sounds: [
        { title: 'Valve fermée', src: import.meta.env.VITE_SOUND_CLOSED || '' },
        { title: 'Valve ouverte', src: import.meta.env.VITE_SOUND_OPEN || '' },
      ],
      previewVideo: 'https://videos.pexels.com/video-files/15412989/15412989-hd_1920_1080_30fps.mp4',
    }),
  },
  {
    slug: 'carrosserie-accessoires',
    title: 'Carrosserie & Accessoires',
    excerpt: 'Pièces, kits et détails extérieurs posés avec alignement et rendu propre.',
    image: '/services/carrosserie-accessoires.jfif',
    detail: detail({
      tag: 'Carrosserie',
      heroSub: 'Un style plus affirmé, avec des lignes nettes.',
      body: [
        'Pare-chocs, spoilers, lames, accessoires carbone ou éléments de personnalisation : chaque pièce est ajustée avant validation.',
      ],
      features: ['Ajustage précis', 'Pose accessoires', 'Protection possible', 'Contrôle final'],
      specs: [
        { label: 'Type', value: 'Origine / Aftermarket' },
        { label: 'Finitions', value: 'Mat / brillant' },
      ],
      gains: [{ label: 'Rendu', value: 'Atelier', unit: '' }],
    }),
  },
  {
    slug: 'retrofit-interieur',
    title: "Retrofit d'Intérieur",
    excerpt: 'Habitacle modernisé : accessoires, détails, confort et touches sportives.',
    image: '/services/retrofit-interieur.jfif',
    detail: detail({
      tag: 'Intérieur',
      heroSub: 'Un intérieur plus moderne, plus confortable, plus personnel.',
      body: [
        'Volants, palettes, éclairage, sellerie, inserts ou accessoires : nous adaptons l’habitacle à votre style.',
      ],
      features: ['Sur mesure', 'Contrôle qualité', 'Compatibilité', 'Finitions propres'],
      specs: [
        { label: 'Délai', value: '5 - 15 jours' },
        { label: 'Matériaux', value: 'Alcantara / Nappa' },
      ],
      gains: [{ label: 'Confort', value: 'Amélioré', unit: '' }],
    }),
  },
  {
    slug: 'diagnostic-avance',
    title: 'Diagnostic Avancé',
    excerpt: 'Lecture complète, contrôles ciblés et explication claire des défauts.',
    image: '/services/diagnostic-avance.jfif',
    detail: detail({
      tag: 'Diagnostic',
      heroSub: 'Comprendre avant de remplacer.',
      body: [
        'Nous analysons les défauts, les valeurs et les symptômes pour proposer une direction fiable.',
      ],
      features: ['Lecture complète', 'Tests actuateurs', 'Essai routier', 'Rapport clair'],
      specs: [
        { label: 'Constructeurs', value: 'Premium' },
        { label: 'Livrable', value: 'Compte rendu' },
      ],
      gains: [{ label: 'Décision', value: 'Plus claire', unit: '' }],
    }),
  },
  {
    slug: 'detailing-lustrage',
    title: 'Detailing & Lustrage',
    excerpt: 'Correction peinture, brillance profonde et préparation esthétique soignée.',
    image: '/services/detailing-lustrage.jfif',
    detail: detail({
      tag: 'Detailing',
      heroSub: 'Redonner de la profondeur à la peinture.',
      body: [
        'Décontamination, polissage et protection selon l’état du vernis et le niveau de rendu souhaité.',
      ],
      features: ['Polissage multi-étapes', 'Inspection LED', 'Protection finale', 'Photos avant/après'],
      specs: [
        { label: 'Durée', value: '1 - 3 jours' },
        { label: 'Niveau', value: 'Quotidien / Exposition' },
      ],
      gains: [{ label: 'Brillance', value: 'Renforcée', unit: '' }],
    }),
  },
  {
    slug: 'entretien-vidange',
    title: 'Entretien & Vidange',
    excerpt: 'Maintenance propre, fluides adaptés et contrôle des points importants.',
    image: '/services/entretien-vidange.jfif',
    detail: detail({
      tag: 'Entretien',
      heroSub: 'Entretenir aujourd’hui pour éviter les surprises demain.',
      body: [
        'Vidange moteur, boîte, pont, filtres et contrôles rapides selon votre kilométrage et votre usage.',
      ],
      features: ['Fluides adaptés', 'Liste de contrôle', 'Historique', 'Conseils entretien'],
      specs: [
        { label: 'Créneaux', value: 'Sur rendez-vous' },
        { label: 'Garantie', value: 'Pièces & main' },
      ],
      gains: [{ label: 'Fiabilité', value: 'Préservée', unit: '' }],
    }),
  },
  {
    slug: 'covering-relooking',
    title: 'Covering & Relooking',
    excerpt: 'Changement de style, chrome delete et personnalisation avec finitions nettes.',
    image: '/services/covering-relooking.jfif',
    detail: detail({
      tag: 'Covering',
      heroSub: 'Changer le look sans perdre la précision.',
      body: [
        'Film cast, PPF possible, découpes propres et finitions contrôlées à la lumière.',
      ],
      features: ['PPF / covering', 'Découpe propre', 'Garantie film', 'Finitions propres'],
      specs: [
        { label: 'Finitions', value: 'Satin / Mat / Brillant' },
        { label: 'Garantie', value: 'Constructeur' },
      ],
      gains: [{ label: 'Style', value: 'Personnalisé', unit: '' }],
    }),
  },
  {
    slug: 'protection-ceramique',
    title: 'Protection Céramique',
    excerpt: 'Protection hydrophobe, brillance durable et entretien plus simple.',
    image: '/services/protection-ceramique.jfif',
    detail: detail({
      tag: 'Céramique',
      heroSub: 'Une peinture protégée après une vraie préparation.',
      body: [
        'Préparation detailing, pose contrôlée et conseils pour garder le rendu dans le temps.',
      ],
      features: ['Multi-couches', 'Jantes & vitres', 'Traitement plastiques', 'Suivi annuel'],
      specs: [
        { label: 'Durée', value: '24 - 60 mois' },
        { label: 'Couches', value: '2 - 3' },
      ],
      gains: [{ label: 'Protection', value: 'Renforcée', unit: '' }],
    }),
  },
]

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug)
}

export function tuningFor(ids = []) {
  return TUNING_MODULES.filter((m) => ids.includes(m.id))
}
