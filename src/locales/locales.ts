const resources = {
  en: {
    translation: {
      Router: {
        home: 'Home',
        myWork: 'My Work 👨‍💻',
        skillsAndTools: 'Skills 🤹 & Tools 🛠️',
        myResume: 'My Résumé 📄',
        contactMe: 'CONTACT ME',
      },
      Footer: {
        copyright: '© Jérémie Carrez 2024 - check the repo here :',
      },
      HomePage: {
        title: 'Full Stack and Mobile Developer.',
        hi: "Hi, I'm",
        name: 'Jeremie Carrez',
        description: 'I craft robust, secure, and high-performing applications.',
        quotes: {
          1: 'Eager to learn new tech, consistently staying up to date with latest tools & trends in software dev.',
          2: 'I have a great passion for designing & developing, innovating & deploying creative digital solutions.',
        },
      },
      MySkills: {
        search: 'Search for a specific skill',
        noSkills: 'No skills found',
        categories: {
          mobileTools: 'Mobile Tools',
          webTools: 'Web Tools',
          backendTools: 'Backend Tools',
          otherTools: 'Other Tools',
        },
      },
      MyWork: {
        project: 'project',
        myProject: 'my-project',
        viewProject: 'View Project',
        workBoxes: {
          tournesol: {
            title: 'Tournesol Nano 🌻',
            description: `My first own app! Tournesol Nano is an iOS application for the open-source and collaborative Tournesol project.
                You can search for and watch recommended videos directly in the app (ad-free) or via the YouTube app, and then compare them right within the app!
                
                You can also:
                - View each video’s score across all criteria 🌻
                - Filter videos by release date, language, and favorite criteria 🌎
                - Access and edit your “Compare Later” list 👀
                - View your recommendation history 📖`,
          },
          lunabeeStudio: {
            title: 'iOS Developer @ Lunabee Studio',
            description: `Participation in the development of iOS applications:
              - 🏃RunMotion (SwiftUI, UIKit) | Running Coach App
              - Development of the new version
              - Refactoring of the existing codebase, transitioning to clean architecture + data structures
              - Migration from UIKit navigation to SwiftUI for iOS 16+
              
              - 🎮 Karmine Corp, 🧑‍🎓ISIC France, 🏨 B&B Hotels
              - Development of Widgets using WidgetKit
              - Integration of Kotlin Multiplatform
              -Bug fixes & various features
              Agile teamwork: PRs, ticketing, participation in tech meetings...`,
          },
          N7C: {
            title: 'N7 Consulting',
            description: `Development of a mobile application for an electric vehicle rental company, for internal use.
              - 🚗🔋Design and implementation of the database to manage vehicles, charging stations, and users.
              - 🤖⛽️Development of advanced algorithms for optimizing electric vehicle charging, taking into account vehicle specifications and the capacities of AC/DC charging stations.
              - 📲Development of a functional mobile interface in React Native for internal use by the teams.`,
          },
          kuri: {
            title: 'Kuri App',
            description: `Climate-friendly recipes, personalized to your cooking level, diet and lifestyle!
                Kuri makes it incredibly easy to eat more seasonal, more local meals.`,
          },
          moonalisa: {
            title: 'moona.health App (Ex. moonalisa)',
            description: `Full development of Android & iOS apps using ReactNative\n
                  Backend implementation with Firebase, Admin Panel implementation with Retool.\n
                  CI / CD.`,
          },
          portfolio: {
            title: 'This Portfolio!',
            description: 'This portfolio is made with ReactJS and TailwindCSS. Wanted to try a neo memphis design, hope you like it :)',
          },
          hi7haut: {
            title: 'Coin Game PWA',
            description: 'A simple coin reward web app to build customer loyalty made with VueJS & Strapi.',
          },
          hi7hautWeb: {
            title: "Student Council's Portfolio",
            description: 'A portfolio for a french student association made with VueJS.',
          },
        },
      },
    },
  },
  fr: {
    translation: {
      Router: {
        home: 'Accueil',
        myWork: 'Mon Travail 👨‍💻',
        skillsAndTools: 'Compétences 🤹 & Outils 🛠️',
        myResume: 'Mon CV 📄',
        contactMe: 'ME CONTACTER',
      },
      Footer: {
        copyright: '© Jérémie Carrez 2024 - jetez un oeil au repo ici 👀 :',
      },
      HomePage: {
        title: 'Développeur Full Stack et Mobile.',
        hi: 'Salut, je suis',
        name: 'Jérémie Carrez',
        description: 'Je crée des applications robustes, sécurisées et performantes.',
        quotes: {
          1: 'Désireux d’apprendre de nouvelles technologies, restant constamment à jour avec les derniers outils et tendances en développement logiciel.',
          2: 'J’ai une grande passion pour la conception et le développement, l’innovation et le déploiement de solutions numériques créatives',
        },
      },
      MySkills: {
        title: 'Compétences & Outils',
        search: 'Rechercher une compétence spécifique',
        noSkills: 'Aucune compétence trouvée',
        categories: {
          mobileTools: 'Outils Mobiles',
          webTools: 'Outils Web',
          backendTools: 'Outils Backend',
          otherTools: 'Autres Outils',
        },
      },
      MyWork: {
        project: 'projet',
        myProject: 'mon-projet',
        viewProject: 'Voir le Projet',
        workBoxes: {
          tournesol: {
            title: 'Tournesol Nano 🌻',
            description: `Mon application personnelle ! Tournesol Nano est une application iOS pour le projet open-source et collaboratif Tournesol.
          Vous pouvez rechercher et regarder des vidéos recommandées directement dans l'application (sans publicité) ou via l'application YouTube, puis les comparer directement dans l'application !
          
          Vous pouvez aussi :
          - Voir le score de chaque vidéo sur tous les critères 🌻
          - Filtrer les vidéos par date de sortie, langue et critères favoris 🌎
          - Accéder et modifier votre liste « Comparer plus tard » 👀
          - Voir votre historique de recommandations 📖`,
          },
          lunabeeStudio: {
            title: 'Développeur iOS @ Lunabee Studio',
            description: `Participation au développement d'applications iOS :
        - 🏃RunMotion (SwiftUI, UIKit) | Application de coach de course
        - Développement de la nouvelle version
        - Refactorisation de la base de code existante, passage à une architecture propre + structures de données
        - Migration de la navigation UIKit à SwiftUI pour iOS 16+
        
        - 🎮 Karmine Corp, 🧑‍🎓ISIC France, 🏨 B&B Hotels
        - Développement de widgets avec WidgetKit
        - Intégration de Kotlin Multiplatform
        - Corrections de bugs & diverses fonctionnalités
        Travail Agile : PRs, gestion des tickets, participation aux réunions techniques...`,
          },
          N7C: {
            title: 'N7 Consulting',
            description: `Développement d'une application mobile pour une entreprise de location de véhicules électriques, à usage interne.
        - 🚗🔋Conception et mise en œuvre de la base de données pour gérer les véhicules, les stations de recharge et les utilisateurs.
        - 🤖⛽️Développement d'algorithmes avancés pour optimiser la recharge des véhicules électriques, en prenant en compte les spécifications des véhicules et les capacités des stations de recharge AC/DC.
        - 📲Développement d'une interface mobile fonctionnelle en React Native pour un usage interne par les équipes.`,
          },
          kuri: {
            title: 'Kuri App',
            description: `Des recettes respectueuses du climat, personnalisées selon votre niveau de cuisine, votre régime alimentaire et votre mode de vie !
          Kuri facilite incroyablement la préparation de repas plus saisonniers et locaux.`,
          },
          moonalisa: {
            title: 'moona.health App (Ex. moonalisa)',
            description: `Développement complet des applications Android et iOS avec ReactNative
            Mise en œuvre du backend avec Firebase, du panneau d'administration avec Retool.
            CI / CD.`,
          },
          portfolio: {
            title: 'Ce Portfolio !',
            description: 'Ce portfolio est créé avec ReactJS et TailwindCSS. J\'ai voulu essayer un design néo-mémoire, j\'espère qu\'il vous plaît :)',
          },
          hi7haut: {
            title: 'Coin Game PWA',
            description: 'Une simple application web de récompense en pièces pour fidéliser les clients, réalisée avec VueJS & Strapi.',
          },
          hi7hautWeb: {
            title: 'Portfolio du BDE',
            description: 'Un portfolio pour une association étudiante française réalisé avec VueJS.',
          },
        },
      },
    },
  },
};

export default resources;
