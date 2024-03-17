export interface Course {
  titre: string;
  description: string;
}

export interface Matiere {
  color: string;
  name: string;
  content: Course[];
}

export interface Classe {
  grade: string;
  matieres: Matiere[];
}

const classes: Classe[] = [
  {
    grade: "Sixième",
    matieres: [
      {
        color: "blue",
        name: "maths",
        content: [
          {
            titre: "Nombres et calculs",
            description:
              "Introduction aux concepts de base des nombres et aux opérations fondamentales.",
          },
          {
            titre: "Géométrie",
            description:
              "Exploration des formes, des espaces et des relations géométriques.",
          },
          {
            titre: "Grandeurs et mesures",
            description:
              "Étude des unités de mesure et de leurs applications dans divers contextes.",
          },
          {
            titre: "Organisation et gestion de données",
            description:
              "Initiation à la collecte, l'organisation et l'analyse des données.",
          },
        ],
      },
      {
        color: "orange",
        name: "Physique Chimie",
        content: [
          {
            titre: "Introduction à la physique et la chimie",
            description:
              "Fondements des sciences physiques et chimiques, explorant les matériaux, leurs propriétés et les réactions.",
          },
          {
            titre: "L'air qui nous entoure",
            description:
              "Étude de la composition de l'air et de son importance pour la vie sur Terre.",
          },
          {
            titre: "L'eau dans notre environnement",
            description:
              "Exploration des propriétés de l'eau et de son cycle dans l'environnement.",
          },
          {
            titre: "Les circuits électriques simples",
            description:
              "Initiation aux concepts de base de l'électricité et aux circuits simples.",
          },
        ],
      },
      {
        color: "green",
        name: "Informatique",
        content: [
          {
            titre: "Initiation à l'informatique",
            description:
              "Découverte des bases de l'informatique et de l'utilisation des ordinateurs.",
          },
          {
            titre: "Utilisation de l'ordinateur",
            description:
              "Apprentissage des compétences pratiques pour utiliser efficacement un ordinateur.",
          },
          {
            titre: "Initiation à la programmation",
            description:
              "Premiers pas dans le monde de la programmation à l'aide de langages simples.",
          },
        ],
      },
    ],
  },

  {
    grade: "Cinquième",
    matieres: [
      {
        color: "blue",
        name: "maths",
        content: [
          {
            titre: "Nombres et calculs",
            description:
              "Approfondissement des connaissances en calcul et en théorie des nombres.",
          },
          {
            titre: "Géométrie",
            description:
              "Étude avancée des figures géométriques et de leurs propriétés.",
          },
          {
            titre: "Grandeurs et mesures",
            description:
              "Mesures de volumes, de masses et de temps avec des unités complexes.",
          },
          {
            titre: "Organisation et gestion de données",
            description:
              "Techniques avancées de gestion et d'analyse de données.",
          },
          {
            titre: "Fonctions",
            description: "Introduction aux fonctions mathématiques simples.",
          },
        ],
      },
      {
        color: "orange",
        name: "Physique Chimie",
        content: [
          {
            titre: "Les mélanges et solutions",
            description:
              "Étude des mélanges, des solutions, et des méthodes de séparation.",
          },
          {
            titre: "La lumière et les ombres",
            description:
              "Exploration de la nature de la lumière et la formation des ombres.",
          },
          {
            titre: "Les forces et les mouvements",
            description:
              "Compréhension des principes fondamentaux des forces et du mouvement.",
          },
          {
            titre: "Les réactions chimiques simples",
            description:
              "Initiation aux réactions chimiques et à la stœchiométrie.",
          },
        ],
      },
      {
        color: "green",
        name: "Informatique",
        content: [
          {
            titre: "Programmation visuelle",
            description:
              "Création de projets visuels et interactifs pour introduire la logique de programmation.",
          },
          {
            titre: "Sécurité sur internet",
            description:
              "Apprentissage des bonnes pratiques pour naviguer en sécurité sur internet.",
          },
          {
            titre: "Traitement de texte avancé",
            description:
              "Techniques avancées de mise en page et de traitement de texte.",
          },
        ],
      },
    ],
  },

  {
    grade: "Quatrième",
    matieres: [
      {
        color: "blue",
        name: "maths",
        content: [
          {
            titre: "Nombres et calculs",
            description:
              "Approfondissement des concepts numériques et des opérations mathématiques.",
          },
          {
            titre: "Géométrie",
            description:
              "Étude avancée des propriétés et des relations des figures géométriques.",
          },
          {
            titre: "Grandeurs et mesures",
            description:
              "Mesure des grandeurs physiques et conversion entre différentes unités de mesure.",
          },
          {
            titre: "Organisation et gestion de données",
            description:
              "Analyse et interprétation de données à travers des graphiques et des statistiques.",
          },
          {
            titre: "Fonctions",
            description:
              "Introduction aux fonctions et à leur représentation graphique.",
          },
          {
            titre: "Statistiques et probabilités",
            description:
              "Étude des méthodes de statistique et des principes de base des probabilités.",
          },
        ],
      },
      {
        color: "orange",
        name: "Physique Chimie",
        content: [
          {
            titre: "L'énergie et ses transformations",
            description:
              "Exploration des différentes formes d'énergie et de leur conversion d'une forme à une autre.",
          },
          {
            titre: "La chimie de la vie quotidienne",
            description:
              "Étude de la chimie derrière les produits et les processus quotidiens.",
          },
          {
            titre: "Les signaux sonores",
            description: "Introduction à l'acoustique et à la science du son.",
          },
          {
            titre: "Les forces gravitationnelles",
            description:
              "Compréhension de la gravité et de son impact sur le mouvement des objets.",
          },
        ],
      },
      {
        color: "green",
        name: "Informatique",
        content: [
          {
            titre: "Programmation en Scratch",
            description:
              "Création de projets interactifs en utilisant le langage de programmation visuel Scratch.",
          },
          {
            titre: "Introduction au HTML",
            description:
              "Apprentissage des bases de la création de pages web en utilisant HTML.",
          },
          {
            titre: "Création de sites web simples",
            description:
              "Utilisation des compétences en HTML pour développer des sites web fonctionnels.",
          },
        ],
      },
    ],
  },

  {
    grade: "Troisième",
    matieres: [
      {
        color: "blue",
        name: "maths",
        content: [
          {
            titre: "Nombres et calculs",
            description:
              "Consolidation des connaissances sur les opérations fondamentales et l'utilisation des nombres dans divers contextes mathématiques.",
          },
          {
            titre: "Géométrie",
            description:
              "Compréhension approfondie des figures géométriques, des théorèmes fondamentaux et de leur application.",
          },
          {
            titre: "Grandeurs et mesures",
            description:
              "Étude avancée sur la mesure des grandeurs, y compris le volume, la surface et d'autres mesures complexes.",
          },
          {
            titre: "Organisation et gestion de données",
            description:
              "Techniques avancées pour organiser, représenter et analyser les données statistiques.",
          },
          {
            titre: "Fonctions",
            description:
              "Exploration des différentes types de fonctions, de leurs propriétés et de leur utilisation en mathématiques.",
          },
          {
            titre: "Statistiques et probabilités",
            description:
              "Étude approfondie des probabilités et des statistiques, incluant l'interprétation des résultats et leur application pratique.",
          },
        ],
      },
      {
        color: "orange",
        name: "Physique Chimie",
        content: [
          {
            titre: "L'électricité et le magnétisme",
            description:
              "Introduction aux concepts de l'électricité et du magnétisme, et à leur importance dans le monde physique.",
          },
          {
            titre: "La chimie organique introduction",
            description:
              "Premiers pas dans l'étude de la chimie organique, incluant la structure des molécules et les réactions chimiques de base.",
          },
          {
            titre: "Les ondes et la lumière",
            description:
              "Étude des ondes, y compris les ondes lumineuses, leurs propriétés et applications.",
          },
          {
            titre: "Les impacts environnementaux de la chimie",
            description:
              "Examen de l'impact de la chimie sur l'environnement et exploration des solutions pour réduire la pollution.",
          },
        ],
      },
      {
        color: "green",
        name: "Informatique",
        content: [
          {
            titre: "Introduction à Python",
            description:
              "Apprentissage des bases de la programmation en Python, un langage polyvalent et largement utilisé.",
          },
          {
            titre: "Projets de programmation",
            description:
              "Réalisation de projets individuels ou de groupe pour appliquer les compétences de programmation acquises.",
          },
          {
            titre: "Concepts de base des réseaux",
            description:
              "Introduction aux principes fondamentaux des réseaux informatiques et à leur fonctionnement.",
          },
        ],
      },
    ],
  },

  {
    grade: "Seconde",
    matieres: [
      {
        color: "blue",
        name: "maths",
        content: [
          {
            titre: "Fonctions",
            description:
              "Étude détaillée des fonctions, y compris les fonctions linéaires, quadratiques et plus complexes.",
          },
          {
            titre: "Géométrie",
            description:
              "Exploration avancée de la géométrie, incluant la géométrie analytique et les vecteurs.",
          },
          {
            titre: "Trigonométrie",
            description:
              "Introduction à la trigonométrie, étude des relations dans les triangles et applications.",
          },
          {
            titre: "Statistiques et probabilités",
            description:
              "Approfondissement des connaissances en statistiques et probabilités, y compris l'analyse de données et l'interprétation des résultats.",
          },
          {
            titre: "Suites numériques",
            description:
              "Étude des suites arithmétiques et géométriques, et de leur comportement.",
          },
        ],
      },
      {
        color: "orange",
        name: "Physique Chimie",
        content: [
          {
            titre: "La lumière et les ondes",
            description:
              "Étude des propriétés de la lumière et des autres types d'ondes.",
          },
          {
            titre: "L'énergie et ses conversions",
            description:
              "Exploration des différentes formes d'énergie et des lois de conservation de l'énergie.",
          },
          {
            titre: "La dynamique et les forces",
            description:
              "Compréhension des lois du mouvement de Newton et application à divers problèmes.",
          },
          {
            titre: "L'univers",
            description:
              "Introduction à l'astronomie et à l'étude de l'univers, des étoiles et des galaxies.",
          },
          {
            titre: "Les éléments chimiques et le tableau périodique",
            description:
              "Exploration du tableau périodique et des propriétés des éléments chimiques.",
          },
          {
            titre: "Les molécules et les liaisons chimiques",
            description:
              "Étude des différents types de liaisons chimiques et de la formation des molécules.",
          },
          {
            titre: "Les solutions et les réactions chimiques",
            description:
              "Compréhension des solutions, des réactions chimiques et des équilibres chimiques.",
          },
          {
            titre: "La chimie organique",
            description:
              "Introduction aux composés organiques et à leur réactivité.",
          },
        ],
      },
      {
        color: "green",
        name: "Informatique",
        content: [
          {
            titre: "Programmation Python avancée",
            description:
              "Perfectionnement des compétences en Python, avec un focus sur des projets plus complexes et des structures de données.",
          },
          {
            titre: "Introduction aux bases de données",
            description:
              "Fondamentaux des bases de données, y compris le modèle relationnel et le langage SQL.",
          },
          {
            titre: "Développement web",
            description:
              "Introduction au développement web, incluant HTML, CSS, et les bases de JavaScript.",
          },
        ],
      },
    ],
  },

  {
    grade: "Première",
    matieres: [
      {
        color: "blue",
        name: "maths",
        content: [
          {
            titre: "Fonctions",
            description:
              "Examen approfondi des différentes catégories de fonctions, y compris exponentielles et logarithmiques.",
          },
          {
            titre: "Dérivation",
            description:
              "Étude des taux de variation et des applications des dérivées dans divers contextes.",
          },
          {
            titre: "Géométrie analytique",
            description:
              "Analyse des figures géométriques dans le plan et l'espace à l'aide d'équations.",
          },
          {
            titre: "Suites numériques",
            description:
              "Exploration approfondie des suites, y compris les suites arithmétiques et géométriques.",
          },
          {
            titre: "Statistiques et probabilités",
            description:
              "Approfondissement des méthodes statistiques et étude des probabilités.",
          },
          {
            titre: "Intégration",
            description:
              "Introduction aux techniques d'intégration et à leurs applications.",
          },
        ],
      },
      {
        color: "orange",
        name: "Physique Chimie",
        content: [
          {
            titre: "La thermochimie",
            description:
              "Étude des réactions chimiques en termes d'absorption ou de dégagement de chaleur.",
          },
          {
            titre: "Les mouvements et forces avancés",
            description:
              "Analyse des mouvements dans des cadres de référence variés et étude des forces en action.",
          },
          {
            titre: "La chimie en solution",
            description:
              "Exploration des réactions en solution aqueuse, y compris les réactions d'acido-basiques et de précipitation.",
          },
          {
            titre: "Introduction à la physique quantique",
            description:
              "Présentation des principes de base de la mécanique quantique et de ses applications.",
          },
        ],
      },
      {
        color: "green",
        name: "Informatique",
        content: [
          {
            titre: "Algorithmique",
            description:
              "Étude approfondie des algorithmes, y compris leur conception, analyse et implémentation.",
          },
          {
            titre: "Structures de données",
            description:
              "Introduction aux structures de données fondamentales, telles que les listes, piles, files d'attente et arbres.",
          },
          {
            titre: "Développement d'applications",
            description:
              "Conception et développement d'applications informatiques, en mettant l'accent sur les bonnes pratiques de programmation.",
          },
        ],
      },
    ],
  },

  {
    grade: "Terminale",
    matieres: [
      {
        color: "blue",
        name: "maths",
        content: [
          {
            titre: "Fonctions",
            description:
              "Étude avancée des fonctions, y compris l'analyse des fonctions exponentielles, logarithmiques et trigonométriques.",
          },
          {
            titre: "Dérivation",
            description:
              "Application approfondie des techniques de dérivation et d'étude des fonctions dérivées.",
          },
          {
            titre: "Équations et inéquations",
            description:
              "Résolution complexe d'équations et d'inéquations, y compris les systèmes d'équations.",
          },
          {
            titre: "Géométrie dans l'espace",
            description:
              "Analyse géométrique dans l'espace, étude des vecteurs et des positions relatives.",
          },
          {
            titre: "Probabilités et statistiques",
            description:
              "Étude avancée des probabilités, incluant les variables aléatoires et les distributions.",
          },
          {
            titre: "Suites et séries numériques",
            description:
              "Approfondissement des suites numériques, étude des séries et des critères de convergence.",
          },
          {
            titre: "Intégration",
            description:
              "Techniques d'intégration avancées et applications des intégrales définies et indéfinies.",
          },
        ],
      },
      {
        color: "orange",
        name: "Physique Chimie",
        content: [
          {
            titre: "Les réactions d'oxydo-réduction",
            description:
              "Étude des réactions d'oxydation et de réduction, et leur importance en chimie.",
          },
          {
            titre: "Les lois de la thermodynamique",
            description:
              "Compréhension des principes fondamentaux de la thermodynamique et de leurs applications.",
          },
          {
            titre: "La chimie organique avancée",
            description:
              "Approfondissement des connaissances en chimie organique, étude des mécanismes réactionnels.",
          },
          {
            titre: "La relativité restreinte",
            description:
              "Introduction aux concepts de la relativité restreinte et à ses implications physiques.",
          },
        ],
      },
      {
        color: "green",
        name: "Informatique",
        content: [
          {
            titre: "Projets informatiques complexes",
            description:
              "Réalisation de projets de programmation avancés, mettant en œuvre des compétences en développement logiciel.",
          },
          {
            titre: "Intelligence artificielle - une introduction",
            description:
              "Introduction aux concepts de l'intelligence artificielle et à ses applications pratiques.",
          },
          {
            titre: "Cybersécurité",
            description:
              "Sensibilisation aux enjeux de la sécurité informatique et aux techniques de protection des données.",
          },
        ],
      },
    ],
  },
];

export default classes;
