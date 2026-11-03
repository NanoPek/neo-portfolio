const resources = {
  en: {
    translation: {
      Router: {
        home: 'Home',
        myWork: 'My work',
        skillsAndTools: 'Skills & tools',
        myLinkedin: 'My LinkedIn',
        navigation: 'Navigation',
        contactMe: 'Contact',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      Footer: {
        copyright: '© {{year}} Jérémie Carrez',
        source: 'Source on GitHub',
      },
      HomePage: {
        title: 'Mobile software engineer',
        intro: "I'm Jérémie Carrez. I build 360Learning's iOS and Android apps, with the shared core in Kotlin Multiplatform",
        facts: {
          nowLabel: 'Now',
          now: 'One KMP codebase, shipped as ~100 white-label apps',
          beforeLabel: 'Before',
          before: 'iOS at Lunabee Studio in Lyon, full stack at Gena.co in Seoul',
        },
      },
      MySkills: {
        title: 'Skills & tools',
        search: 'Search skills',
        ai: {
          lines: {
            prompt: 'claude "add my new job to my portfolio, make it neat"',
            working: '✻ Reading 42 files… writing code… running tests… ✓',
            bug: '✻ Done. Also fixed a bug that was stacking your timers',
            push: 'git push   # my main skill in 2026',
          },
          toggleLabel: 'Who writes the code?',
          past: '2022 · me',
          now: '2026 · Claude',
          stamp: 'by Claude',
          captionNow: 'I prompt, review and ship. Claude types everything below',
          captionPast: 'Hand-typed, one semicolon at a time',
        },
        noSkills: 'No skills match “{{query}}”',
        categories: {
          mobileTools: 'Mobile tools',
          webTools: 'Web tools',
          backendTools: 'Backend tools',
          otherTools: 'Other tools',
        },
      },
      MyWork: {
        title: 'My work',
        summary: '{{count}} projects since {{year}}',
        project: 'from-{{startDate}}-to-{{endDate}}-project.{{extension}}',
        ongoing: 'from-{{startDate}}-ongoing.{{extension}}',
        viewProject: 'View project',
        locations: {
          remoteFrance: 'Remote · France',
          seoul: 'Seoul, South Korea',
          lyon: 'Lyon, France',
          paris: 'Paris, France',
        },
        workBoxes: {
          learning360: {
            title: 'Mobile software engineer @ 360Learning',
            description: `Development of 360Learning's iOS and Android apps, full remote from France (and sometimes South Korea)
                - Kotlin Multiplatform (KMP) to share core logic across both platforms, with native UIs
                - One shared codebase shipped as ~100 white-label apps for 360Learning's customers
                - Unit, snapshot and end-to-end tests, code reviews and releases with a cross-functional team
                - Leading AI-assisted development in the mobile team: tooling, workflows and usage guidelines`,
          },
          tournesol: {
            title: 'Tournesol Nano',
            description: `My own iOS app for Tournesol, the open-source and collaborative video recommendation project. Search and watch recommended videos in the app, ad-free, or in the YouTube app, then compare them in the app.

                You can also:
                - See each video's score across all criteria
                - Filter videos by release date, language and favorite criteria
                - Open and edit your “Compare later” list
                - See your recommendation history

                Feedback welcome`,
          },
          gena: {
            title: 'Full stack engineer @ Gena.co',
            description: `Full stack engineer on Gena's product websites
                - GenaSQL: designed and built the interactive product website and demo
                - Integrated the AI models into the product
                - UI/UX work for performance and accessibility
                - Worked with the backend engineer on the integration
                - Next.js, TypeScript, Tailwind CSS`,
          },
          lunabeeStudio: {
            title: 'iOS developer @ Lunabee Studio',
            description: `iOS apps for Lunabee Studio's clients

              RunMotion (SwiftUI, UIKit), a running coach app
              - Built the new version
              - Refactored the codebase toward clean architecture
              - Migrated navigation from UIKit to SwiftUI for iOS 16+

              OneSafe (SwiftUI), a password manager
              - New features
              - Cryptography with Swift CryptoKit

              Karmine Corp, ISIC France, B&B Hotels
              - Widgets with WidgetKit
              - Kotlin Multiplatform integration
              - Bug fixes and features

              Agile teamwork: PRs, tickets, tech meetings`,
          },
          N7C: {
            title: 'N7 Consulting',
            description: `Internal mobile app for an electric vehicle rental company
              - Designed and built the database for vehicles, charging stations and users
              - Charging optimization algorithms that account for each vehicle's specs and each AC/DC station's capacity
              - The React Native app the teams use day to day`,
          },
          kuri: {
            title: 'Kuri app',
            description: `Climate-friendly recipes, personalized to your cooking level, diet and lifestyle.
                Kuri makes it easy to eat more seasonal, more local meals.`,
          },
          moonalisa: {
            title: 'moona.health app (formerly moonalisa)',
            description: `Built the Android and iOS apps in React Native, end to end
                  - Backend on Firebase
                  - Admin panel on Retool
                  - CI/CD`,
          },
          portfolio: {
            title: 'This portfolio',
            description: 'Made with React, TypeScript and Tailwind CSS, in a neo-memphis style',
          },
          hi7haut: {
            title: 'Coin game PWA',
            description: 'A coin reward web app to build customer loyalty, made with Vue and Strapi',
          },
          hi7hautWeb: {
            title: "Student council's portfolio",
            description: 'A portfolio for a French student association, made with Vue',
          },
        },
      },
    },
  },
  fr: {
    translation: {
      Router: {
        home: 'Accueil',
        myWork: 'Mon travail',
        skillsAndTools: 'Compétences & outils',
        myLinkedin: 'Mon LinkedIn',
        navigation: 'Navigation',
        contactMe: 'Contact',
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
      },
      Footer: {
        copyright: '© {{year}} Jérémie Carrez',
        source: 'Code source sur GitHub',
      },
      HomePage: {
        title: 'Ingénieur logiciel mobile',
        intro: 'Je suis Jérémie Carrez. Je développe les apps iOS et Android de 360Learning, avec un cœur partagé en Kotlin Multiplatform',
        facts: {
          nowLabel: 'Aujourd’hui',
          now: 'Une base de code KMP, livrée en ~100 apps en marque blanche',
          beforeLabel: 'Avant',
          before: 'iOS chez Lunabee Studio à Lyon, full stack chez Gena.co à Séoul',
        },
      },
      MySkills: {
        title: 'Compétences & outils',
        search: 'Rechercher une compétence',
        ai: {
          lines: {
            prompt: 'claude "ajoute mon nouveau job à mon portfolio, fais ça proprement"',
            working: '✻ Lecture de 42 fichiers… écriture du code… lancement des tests… ✓',
            bug: "✻ Terminé. J'ai aussi corrigé un bug qui empilait tes timers",
            push: 'git push   # ma compétence n°1 en 2026',
          },
          toggleLabel: 'Qui écrit le code ?',
          past: '2022 · moi',
          now: '2026 · Claude',
          stamp: 'par Claude',
          captionNow: 'Je prompte, je relis et je livre. Claude tape tout ce qui suit',
          captionPast: 'Tapé à la main, un point-virgule à la fois',
        },
        noSkills: 'Aucune compétence ne correspond à « {{query}} »',
        categories: {
          mobileTools: 'Outils mobiles',
          webTools: 'Outils web',
          backendTools: 'Outils backend',
          otherTools: 'Autres outils',
        },
      },
      MyWork: {
        title: 'Mon travail',
        summary: '{{count}} projets depuis {{year}}',
        project: 'du-{{startDate}}-au-{{endDate}}-projet.{{extension}}',
        ongoing: 'du-{{startDate}}-en-cours-projet.{{extension}}',
        viewProject: 'Voir le projet',
        locations: {
          remoteFrance: 'Télétravail · France',
          seoul: 'Séoul, Corée du Sud',
          lyon: 'Lyon, France',
          paris: 'Paris, France',
        },
        workBoxes: {
          learning360: {
            title: 'Ingénieur logiciel mobile @ 360Learning',
            description: `Développement des applications iOS et Android de 360Learning, en full remote depuis la France (et parfois la Corée du Sud)
          - Kotlin Multiplatform (KMP) pour partager la logique métier entre les deux plateformes, avec des UI natives
          - Une base de code commune déclinée en ~100 applications en marque blanche pour les clients de 360Learning
          - Tests unitaires, snapshot et end-to-end, revues de code et mises en production avec une équipe pluridisciplinaire
          - Pilotage de l'usage de l'IA dans l'équipe mobile : outils, workflows et bonnes pratiques`,
          },
          tournesol: {
            title: 'Tournesol Nano',
            description: `Mon application iOS pour Tournesol, le projet open-source et collaboratif de recommandation de vidéos. Recherchez et regardez les vidéos recommandées dans l'application, sans publicité, ou dans l'application YouTube, puis comparez-les dans l'application.

          Vous pouvez aussi :
          - Voir le score de chaque vidéo sur tous les critères
          - Filtrer les vidéos par date de sortie, langue et critères favoris
          - Ouvrir et modifier votre liste « Comparer plus tard »
          - Voir votre historique de recommandations

          Vos retours sont les bienvenus`,
          },
          gena: {
            title: 'Ingénieur full stack @ Gena.co',
            description: `Ingénieur full stack sur les sites produits de Gena
          - GenaSQL : conception et développement du site produit interactif et de la démo
          - Intégration des modèles d'IA dans le produit
          - Travail d'UI/UX pour la performance et l'accessibilité
          - Intégration en binôme avec l'ingénieur backend
          - Next.js, TypeScript, Tailwind CSS`,
          },
          lunabeeStudio: {
            title: 'Développeur iOS @ Lunabee Studio',
            description: `Applications iOS pour les clients de Lunabee Studio

        RunMotion (SwiftUI, UIKit), une app de coach de course
        - Développement de la nouvelle version
        - Refactorisation vers une architecture propre
        - Migration de la navigation UIKit vers SwiftUI pour iOS 16+

        OneSafe (SwiftUI), un gestionnaire de mots de passe
        - Nouvelles fonctionnalités
        - Cryptographie avec Swift CryptoKit

        Karmine Corp, ISIC France, B&B Hotels
        - Widgets avec WidgetKit
        - Intégration de Kotlin Multiplatform
        - Corrections de bugs et fonctionnalités

        Travail Agile : PRs, tickets, réunions techniques`,
          },
          N7C: {
            title: 'N7 Consulting',
            description: `Application mobile interne pour une entreprise de location de véhicules électriques
        - Conception et développement de la base de données des véhicules, stations de recharge et utilisateurs
        - Algorithmes d'optimisation de la recharge selon les caractéristiques de chaque véhicule et la capacité de chaque borne AC/DC
        - L'application React Native utilisée au quotidien par les équipes`,
          },
          kuri: {
            title: 'Kuri app',
            description: `Des recettes respectueuses du climat, personnalisées selon votre niveau de cuisine, votre régime alimentaire et votre mode de vie.
          Kuri facilite la préparation de repas plus saisonniers et plus locaux.`,
          },
          moonalisa: {
            title: 'App moona.health (anciennement moonalisa)',
            description: `Développement complet des applications Android et iOS en React Native
            - Backend sur Firebase
            - Panneau d'administration sur Retool
            - CI/CD`,
          },
          portfolio: {
            title: 'Ce portfolio',
            description: 'Réalisé avec React, TypeScript et Tailwind CSS, dans un style néo-memphis',
          },
          hi7haut: {
            title: 'Coin game PWA',
            description: 'Une application web de récompense en pièces pour fidéliser les clients, réalisée avec Vue et Strapi',
          },
          hi7hautWeb: {
            title: 'Portfolio du BDE',
            description: 'Un portfolio pour une association étudiante française, réalisé avec Vue',
          },
        },
      },
    },
  },
  ko: {
    translation: {
      Router: {
        home: '홈',
        myWork: '내 작업',
        skillsAndTools: '기술 & 도구',
        myLinkedin: '내 LinkedIn',
        navigation: '메뉴',
        contactMe: '연락처',
        openMenu: '메뉴 열기',
        closeMenu: '메뉴 닫기',
      },
      Footer: {
        copyright: '© {{year}} Jérémie Carrez',
        source: 'GitHub에서 소스 보기',
      },
      HomePage: {
        title: '모바일 소프트웨어 엔지니어',
        intro: '제레미 카레즈입니다. Kotlin Multiplatform으로 핵심 로직을 공유하며 360Learning의 iOS·Android 앱을 만듭니다',
        facts: {
          nowLabel: '현재',
          now: '하나의 KMP 코드베이스로 약 100개의 화이트 라벨 앱 배포',
          beforeLabel: '이전',
          before: '리옹 Lunabee Studio에서 iOS, 서울 Gena.co에서 풀스택',
        },
      },
      MySkills: {
        title: '기술 & 도구',
        search: '기술 검색',
        ai: {
          lines: {
            prompt: 'claude "내 포트폴리오에 새 직장 추가해줘, 깔끔하게"',
            working: '✻ 파일 42개 읽는 중… 코드 작성 중… 테스트 실행 중… ✓',
            bug: '✻ 완료. 타이머가 쌓이던 버그도 고쳤어요',
            push: 'git push   # 2026년 나의 주력 스킬',
          },
          toggleLabel: '코드는 누가 쓰나요?',
          past: '2022 · 나',
          now: '2026 · Claude',
          stamp: 'Claude 작성',
          captionNow: '저는 프롬프트하고, 리뷰하고, 배포합니다. 아래는 전부 Claude가 타이핑',
          captionPast: '세미콜론 하나하나 직접 타이핑',
        },
        noSkills: '“{{query}}”와 일치하는 기술이 없습니다',
        categories: {
          mobileTools: '모바일 도구',
          webTools: '웹 도구',
          backendTools: '백엔드 도구',
          otherTools: '기타 도구',
        },
      },
      MyWork: {
        title: '내 작업',
        summary: '{{year}}년부터 {{count}}개 프로젝트',
        project: '{{startDate}}에서-{{endDate}}까지-프로젝트.{{extension}}',
        ongoing: '{{startDate}}부터-진행-중-프로젝트.{{extension}}',
        viewProject: '프로젝트 보기',
        locations: {
          remoteFrance: '원격 근무 · 프랑스',
          seoul: '대한민국 서울',
          lyon: '프랑스 리옹',
          paris: '프랑스 파리',
        },
        workBoxes: {
          learning360: {
            title: '모바일 소프트웨어 엔지니어 @ 360Learning',
            description: `프랑스(그리고 가끔은 한국)에서 풀 리모트로 360Learning의 iOS 및 Android 앱 개발
                - Kotlin Multiplatform(KMP)으로 두 플랫폼 간 핵심 로직 공유, UI는 네이티브로 구현
                - 하나의 공통 코드베이스로 360Learning 고객사를 위한 약 100개의 화이트 라벨 앱 배포
                - 크로스펑셔널 팀과 함께 단위·스냅샷·E2E 테스트, 코드 리뷰 및 릴리스 진행
                - 모바일 팀의 AI 활용 주도: 도구, 워크플로 및 사용 가이드라인 수립`,
          },
          tournesol: {
            title: 'Tournesol Nano',
            description: `오픈 소스 협업 동영상 추천 프로젝트 Tournesol을 위해 직접 만든 iOS 앱입니다. 추천 동영상을 앱에서 광고 없이 또는 YouTube 앱에서 검색하고 시청한 뒤, 앱에서 비교할 수 있습니다.

                또한:
                - 모든 기준에서 각 동영상의 점수 확인
                - 출시일, 언어 및 선호 기준으로 동영상 필터링
                - "나중에 비교하기" 목록 열기 및 편집
                - 추천 기록 보기

                피드백 환영합니다`,
          },
          gena: {
            title: '풀스택 엔지니어 @ Gena.co',
            description: `Gena 제품 웹사이트를 담당한 풀스택 엔지니어
                - GenaSQL: 인터랙티브 제품 웹사이트 및 데모 설계·개발
                - AI 모델을 제품에 통합
                - 성능과 접근성을 위한 UI/UX 작업
                - 백엔드 엔지니어와 함께 통합 작업
                - Next.js, TypeScript, Tailwind CSS`,
          },
          lunabeeStudio: {
            title: 'iOS 개발자 @ Lunabee Studio',
            description: `Lunabee Studio 고객사를 위한 iOS 앱

              RunMotion (SwiftUI, UIKit), 러닝 코치 앱
              - 새 버전 개발
              - 클린 아키텍처로 코드베이스 리팩토링
              - iOS 16+를 위해 UIKit 네비게이션을 SwiftUI로 마이그레이션

              OneSafe (SwiftUI), 비밀번호 관리자
              - 새 기능 개발
              - Swift CryptoKit을 사용한 암호화

              Karmine Corp, ISIC France, B&B Hotels
              - WidgetKit 위젯 개발
              - Kotlin Multiplatform 통합
              - 버그 수정 및 기능 개발

              Agile 팀워크: PR, 티켓, 기술 회의`,
          },
          N7C: {
            title: 'N7 Consulting',
            description: `전기차 렌탈 회사를 위한 내부용 모바일 앱
              - 차량, 충전소, 사용자 데이터베이스 설계 및 구현
              - 차량 사양과 AC/DC 충전소 용량을 고려한 충전 최적화 알고리즘
              - 팀이 매일 사용하는 React Native 앱`,
          },
          kuri: {
            title: 'Kuri 앱',
            description: `요리 수준, 식단 및 라이프스타일에 맞춘 친환경 요리법.
                Kuri는 더 계절적이고 지역적인 식사를 쉽게 준비할 수 있도록 도와줍니다.`,
          },
          moonalisa: {
            title: 'moona.health 앱 (구 moonalisa)',
            description: `React Native로 Android 및 iOS 앱 전체 개발
                - Firebase 백엔드
                - Retool 관리자 패널
                - CI/CD`,
          },
          portfolio: {
            title: '이 포트폴리오',
            description: 'React, TypeScript, Tailwind CSS로 만든 네오 멤피스 스타일 포트폴리오',
          },
          hi7haut: {
            title: '코인 게임 PWA',
            description: 'Vue와 Strapi로 만든 고객 충성도를 위한 코인 보상 웹 앱',
          },
          hi7hautWeb: {
            title: '학생회 포트폴리오',
            description: 'Vue로 만든 프랑스 학생회 포트폴리오',
          },
        },
      },
    },
  },
};

export default resources;
