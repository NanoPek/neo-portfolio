import React from 'react';
import Header from '../component/templates/Header';
import WorkBox from '../component/molecules/WorkBox';
import Footer from '../component/templates/Footer';

import moonalisaImage from '../assets/WorkBoxImages/moonalisa.png';
import hi7hautImage from '../assets/WorkBoxImages/hi7hautApp.png';
import hi7hautWeb from '../assets/WorkBoxImages/hi7hautWeb.png';
import portfolio from '../assets/WorkBoxImages/portfolio.png';
import kuri from '../assets/WorkBoxImages/kuri.png';
import tournesol from '../assets/WorkBoxImages/tournesol.png';
import lunabeeStudio from '../assets/WorkBoxImages/lunabeeStudio.png';
import N7CLogo from '../assets/WorkBoxImages/N7CLogo.png';

function MyWork() {
  return (
    <div className="flex flex-col ">
      <Header textColor="text-black" logoColor="#000" />
      <div className="bg-light flex flex-col items-center mt-[10vh] pb-6 2xl:items-center bg-png min-h-[90vh]">
        <div className="flex flex-col w-5/6 py-6 gap-9 items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3 2xl:w-screen 2xl:px-60  ">
          <WorkBox
            image={tournesol}
            title="Tournesol Nano 🌻"
            description={`My first own app! Tournesol Nano is an iOS application for the open-source and collaborative Tournesol project.
            You can search for and watch recommended videos directly in the app (ad-free) or via the YouTube app, and then compare them right within the app!
            
            You can also:
            - View each video’s score across all criteria 🌻
            - Filter videos by release date, language, and favorite criteria 🌎
            - Access and edit your “Compare Later” list 👀
            - View your recommendation history 📖`}
            link="https://tournesol.app/"
            appStore="https://apps.apple.com/fr/app/tournesol-nano/id6737498377"
            github="https://github.com/NanoPek/Tournesol-Nano-iOS"
            date={new Date(2024, 10, 4)}
            color="#FFE259"
          />
          <WorkBox
            image={lunabeeStudio}
            title="iOS Developer @ Lunabee Studio"
            description={`Participation in the development of iOS applications:
             - 🏃RunMotion (SwiftUI, UIKit) | Running Coach App
             - Development of the new version
             - Refactoring of the existing codebase, transitioning to clean architecture + data structures
             - Migration from UIKit navigation to SwiftUI for iOS 16+
             
             - 🎮 Karmine Corp, 🧑‍🎓ISIC France, 🏨 B&B Hotels
             - Development of Widgets using WidgetKit
             - Integration of Kotlin Multiplatform
             -Bug fixes & various features
             Agile teamwork: PRs, ticketing, participation in tech meetings...`}
            link="https://www.lunabee.studio/"
            appStore="https://apps.apple.com/fr/app/runmotion-coach-running/id1370327708"
            date={new Date(2024, 7, 31)}
            color="#8E69D8"
          />
          <WorkBox
            image={N7CLogo}
            title="Mobile freelancer for N7 Consulting"
            description={`Development of a mobile application for an electric vehicle rental company, for internal use.
            - 🚗🔋Design and implementation of the database to manage vehicles, charging stations, and users.
            - 🤖⛽️Development of advanced algorithms for optimizing electric vehicle charging, taking into account vehicle specifications and the capacities of AC/DC charging stations.
            - 📲Development of a functional mobile interface in React Native for internal use by the teams.`}
            link="https://n7consulting.fr/"
            date={new Date(2024, 1, 10)}
            color="#4488CA"
          />
          <WorkBox
            image={kuri}
            title="Kuri App"
            description="Climate-friendly recipes, personalized to your cooking level, diet and lifestyle!
            Kuri makes it incredibly easy to eat more seasonal, more local meals."
            link="https://apps.apple.com/us/app/kuri-recipes-meal-planning/id1510387870"
            appStore="https://apps.apple.com/us/app/kuri-recipes-meal-planning/id1510387870"
            date={new Date(2023, 2, 20)}
            color="#9ad2ac"
          />
          <WorkBox
            image={moonalisaImage}
            title="moonalisa App (private beta)"
            description="I am working on the frontend with React Native and the backend with Firebase for the entire app development of a French startup in the health field."
            link="https://moonalisa.co"
            figma="https://www.figma.com/file/LwTFuqp0aKhcEz62kLsRSc/moonalisa-Sketch?node-id=0%3A1&t=awjlHnumlw3EqMmK-1"
            date={new Date(2023, 0, 1)}
            color="#ff7644"
          />
          <WorkBox
            image={portfolio}
            title="This Portfolio !"
            description="This portfolio is made with ReactJS and TailwindCSS. Wanted to try a neo memphis design, hope you like it :)"
            link="https://jecarrez.tech"
            github="https://github.com/NanoPek/neo-portfolio"
            date={new Date(2023, 0, 1)}
          />
          <WorkBox
            image={hi7hautImage}
            title="Coin Game PWA"
            description="A simple coin reward web app to build customer loyalty made with VueJS & Strapi. "
            link="https://pieces.hi7haut.fr/"
            date={new Date(2022, 4, 1)}
            color="#FFE259"
          />
          <WorkBox
            image={hi7hautWeb}
            title="BDE Portfolio"
            description="A portfolio for a french student association made with VueJS."
            link="https://github.com/NanoPek/hi7haut-vitrine"
            github="https://github.com/NanoPek/hi7haut-vitrine"
            date={new Date(2022, 2, 20)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyWork;
