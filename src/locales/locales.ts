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
        project: 'from-{{startDate}}-to-{{endDate}}-project.{{extension}}',
        ongoing: 'from-{{startDate}}-ongoing.{{extension}}',
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
                - View your recommendation history 📖
                
                Check it out and let me know what you think!
                I’d love to hear your feedback!`,
          },
          lunabeeStudio: {
            title: 'iOS Developer @ Lunabee Studio',
            description: `Participation in the development of iOS applications:
              - 🏃RunMotion (SwiftUI, UIKit) | Running Coach App
              - Development of the new version
              - Refactoring of the existing codebase, transitioning to clean architecture + data structures
              - Migration from UIKit navigation to SwiftUI for iOS 16+
              
              - 🔐OneSafe (SwiftUI) | Password Manager
              - Development of new features
              - Introduction to cryptography technologies using Swift CryptoKit
              
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
            description: 'This portfolio is made with ReactJS and TailwindCSS. Wanted to try a neo-memphis design, hope you\'ll like it :)',
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
        project: 'du-{{startDate}}-au-{{endDate}}-projet.{{extension}}',
        ongoing: 'du-{{startDate}}-en-cours-projet.{{extension}}',
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
          - Voir votre historique de recommandations 📖
          
          Jetez-y un œil et dites-moi ce que vous en pensez !
          J’adorerais avoir vos retours !`,
          },
          lunabeeStudio: {
            title: 'Développeur iOS @ Lunabee Studio',
            description: `Participation au développement d'applications iOS :
        - 🏃RunMotion (SwiftUI, UIKit) | Application de coach de course
        - Développement de la nouvelle version
        - Refactorisation de la base de code existante, passage à une architecture propre + structures de données
        - Migration de la navigation UIKit à SwiftUI pour iOS 16+
        
        - 🔐OneSafe (SwiftUI) | Gestionnaire de mots de passe
        - Développement de nouvelles fonctionnalités
        - Introduction aux technologies de cryptographie avec Swift CryptoKit
        
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
            description: 'Ce portfolio est créé avec ReactJS et TailwindCSS. J\'ai voulu essayer un design néo-memphis, j\'espère qu\'il vous plaîra :)',
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
  ko: {
    translation: {
      Router: {
        home: '홈',
        myWork: '내 작업 👨‍💻',
        skillsAndTools: '기술 🤹 & 도구 🛠️',
        myResume: '내 이력서 📄',
        contactMe: '문의하기',
      },
      Footer: {
        copyright: '© Jérémie Carrez 2024 - 여기서 저장소를 확인하세요:',
      },
      HomePage: {
        title: '풀스택 및 모바일 개발자.',
        hi: '안녕하세요, 저는',
        name: '제레미 카레즈입니다',
        description: '견고하고, 안전하며 고성능 애플리케이션을 만듭니다.',
        quotes: {
          1: '새로운 기술을 배우고, 소프트웨어 개발의 최신 도구와 트렌드를 꾸준히 업데이트합니다.',
          2: '디자인과 개발, 혁신 및 창의적인 디지털 솔루션 배포에 열정이 있습니다.',
        },
      },
      MySkills: {
        search: '특정 기술 검색',
        noSkills: '기술을 찾을 수 없습니다',
        categories: {
          mobileTools: '모바일 도구',
          webTools: '웹 도구',
          backendTools: '백엔드 도구',
          otherTools: '기타 도구',
        },
      },
      MyWork: {
        project: '{{startDate}}에서-{{endDate}}까지-프로젝트.{{extension}}',
        ongoing: '{{startDate}}부터-진행-중-프로젝트.{{extension}}',
        viewProject: '프로젝트 보기',
        workBoxes: {
          tournesol: {
            title: 'Tournesol Nano 🌻',
            description: `저의 첫 번째 자체 앱! Tournesol Nano는 오픈 소스 및 협업 Tournesol 프로젝트를 위한 iOS 애플리케이션입니다.
                앱에서 바로 추천 동영상을 검색하고 시청하거나 YouTube 앱을 통해 보고 앱에서 바로 비교할 수 있습니다!
                
                또한:
                - 모든 기준에서 각 동영상의 점수 확인 🌻
                - 출시일, 언어 및 선호 기준으로 동영상 필터링 🌎
                - "나중에 비교하기" 목록에 액세스하고 편집 👀
                - 추천 기록 보기 📖
                
                한번 확인해보시고 어떤지 알려주세요!
                피드백을 듣고 싶습니다!`,
          },
          lunabeeStudio: {
            title: 'iOS 개발자 @ Lunabee Studio',
            description: `iOS 애플리케이션 개발 참여:
              - 🏃RunMotion (SwiftUI, UIKit) | 러닝 코치 앱
              - 새로운 버전 개발
              - 기존 코드베이스 리팩토링, 클린 아키텍처 및 데이터 구조로 전환
              - iOS 16+를 위한 UIKit 네비게이션에서 SwiftUI로 마이그레이션
              
              - 🔐OneSafe (SwiftUI) | 비밀번호 관리자
              - 새로운 기능 개발
              - Swift CryptoKit을 사용한 암호화 기술 소개
              
              - 🎮 Karmine Corp, 🧑‍🎓ISIC France, 🏨 B&B Hotels
              - WidgetKit을 사용한 위젯 개발
              - Kotlin Multiplatform 통합
              - 버그 수정 및 다양한 기능
              Agile 팀워크: PR, 티켓 관리, 기술 회의 참여...`,
          },
          N7C: {
            title: 'N7 Consulting',
            description: `전기차 렌탈 회사를 위한 내부용 모바일 애플리케이션 개발.
              - 🚗🔋차량, 충전소, 사용자를 관리하기 위한 데이터베이스 설계 및 구현.
              - 🤖⛽️차량 사양과 AC/DC 충전소 용량을 고려한 전기차 충전 최적화를 위한 고급 알고리즘 개발.
              - 📲팀 내부에서 사용할 수 있는 React Native로 기능적인 모바일 인터페이스 개발.`,
          },
          kuri: {
            title: 'Kuri App',
            description: `요리 수준, 식단 및 라이프스타일에 맞춘 친환경 요리법!
                Kuri는 더 계절적이고 지역적인 식사를 쉽게 준비할 수 있도록 도와줍니다.`,
          },
          moonalisa: {
            title: 'moona.health 앱 (구 moonalisa)',
            description: `ReactNative를 사용하여 Android 및 iOS 앱 전체 개발
                Firebase를 사용한 백엔드 구현, Retool을 사용한 관리자 패널 구현.
                CI/CD.`,
          },
          portfolio: {
            title: '이 포트폴리오!',
            description: '이 포트폴리오는 ReactJS와 TailwindCSS로 제작되었습니다. 네오 멤피스 디자인을 시도해 보았습니다. 마음에 드셨으면 좋겠습니다 :)',
          },
          hi7haut: {
            title: '코인 게임 PWA',
            description: 'VueJS 및 Strapi로 제작된 고객 충성도를 구축하기 위한 간단한 코인 보상 웹 애플리케이션.',
          },
          hi7hautWeb: {
            title: '학생회 포트폴리오',
            description: 'VueJS로 제작된 프랑스 학생회용 포트폴리오.',
          },
        },
      },
    },
  },
};

export default resources;
