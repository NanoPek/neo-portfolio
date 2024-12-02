import React from 'react';
import { useTranslation } from 'react-i18next';
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
import { SkillsDetails } from '../component/atoms/Skills';

function MyWork() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col ">
      <Header textColor="text-black" logoColor="#000" />
      <div className="bg-light flex flex-col items-center mt-[10vh] pb-6 2xl:items-center bg-png min-h-[90vh]">
        <div className="flex flex-col w-5/6 py-6 gap-9 items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3 2xl:w-screen 2xl:px-60  ">
          <WorkBox
            image={tournesol}
            title={t('MyWork.workBoxes.tournesol.title')}
            description={t('MyWork.workBoxes.tournesol.description')}
            techs={[SkillsDetails.Apple, SkillsDetails.Swift]}
            extension="swift"
            link="https://tournesol.app/"
            appStore={['https://apps.apple.com/fr/app/tournesol-nano/id6737498377']}
            github="https://github.com/NanoPek/tournesol-nano"
            startDate={new Date(2024, 4, 4)}
            color="#FFE259"
          />
          <WorkBox
            image={lunabeeStudio}
            title={t('MyWork.workBoxes.lunabeeStudio.title')}
            description={t('MyWork.workBoxes.lunabeeStudio.description')}
            techs={[
              SkillsDetails.Apple,
              SkillsDetails.Swift,
              SkillsDetails.KMP,
              SkillsDetails.Firebase,
            ]}
            extension="swift"
            link="https://www.lunabee.studio/"
            appStore={[
              'https://apps.apple.com/fr/app/runmotion-coach-running/id1370327708',
              'https://apps.apple.com/fr/app/onesafe-6/id1593282910',
              'https://apps.apple.com/fr/app/karmine-corp/id6477527559',
            ]}
            startDate={new Date(2023, 5, 6)}
            endDate={new Date(2024, 7, 31)}
            color="#8E69D8"
          />
          <WorkBox
            image={N7CLogo}
            title={t('MyWork.workBoxes.N7C.title')}
            description={t('MyWork.workBoxes.N7C.description')}
            techs={[SkillsDetails['React Native'], SkillsDetails.Python]}
            extension="tsx"
            link="https://n7consulting.fr/"
            startDate={new Date(2023, 6, 10)}
            endDate={new Date(2024, 1, 20)}
            color="#4488CA"
          />
          <WorkBox
            image={kuri}
            title={t('MyWork.workBoxes.kuri.title')}
            description={t('MyWork.workBoxes.kuri.description')}
            techs={[SkillsDetails.Apple, SkillsDetails.Swift, SkillsDetails.Firebase]}
            extension="swift"
            link="https://apps.apple.com/us/app/kuri-recipes-meal-planning/id1510387870"
            appStore={['https://apps.apple.com/us/app/kuri-recipes-meal-planning/id1510387870']}
            startDate={new Date(2023, 0, 20)}
            endDate={new Date(2023, 3, 20)}
            color="#9ad2ac"
          />
          <WorkBox
            image={moonalisaImage}
            title={t('MyWork.workBoxes.moonalisa.title')}
            description={t('MyWork.workBoxes.moonalisa.description')}
            techs={[
              SkillsDetails['React Native'],
              SkillsDetails.Firebase,
              SkillsDetails.Retool,
            ]}
            extension="tsx"
            link="https://moona.health"
            figma="https://www.figma.com/file/LwTFuqp0aKhcEz62kLsRSc/moonalisa-Sketch?node-id=0%3A1&t=awjlHnumlw3EqMmK-1"
            startDate={new Date(2022, 5, 3)}
            endDate={new Date(2023, 7, 31)}
            color="#ff7644"
          />
          <WorkBox
            image={portfolio}
            title={t('MyWork.workBoxes.portfolio.title')}
            description={t('MyWork.workBoxes.portfolio.description')}
            techs={[SkillsDetails['React.js'], SkillsDetails.TailwindCSS]}
            extension="tsx"
            link="https://jecarrez.vercel.app/"
            github="https://github.com/NanoPek/neo-portfolio"
            startDate={new Date(2022, 12, 10)}
          />
          <WorkBox
            image={hi7hautImage}
            title={t('MyWork.workBoxes.hi7haut.title')}
            description={t('MyWork.workBoxes.hi7haut.description')}
            techs={[
              SkillsDetails.VueJS,
              SkillsDetails.TailwindCSS,
            ]}
            extension="tsx"
            link="https://pieces.hi7haut.fr/"
            startDate={new Date(2021, 11, 20)}
            endDate={new Date(2022, 1, 20)}
            color="#FFE259"
          />
          <WorkBox
            image={hi7hautWeb}
            title={t('MyWork.workBoxes.hi7hautWeb.title')}
            description={t('MyWork.workBoxes.hi7hautWeb.description')}
            techs={[SkillsDetails.VueJS, SkillsDetails.TailwindCSS]}
            extension="vue"
            link="https://hi7haut.fr/"
            github="https://github.com/NanoPek/hi7haut-vitrine"
            startDate={new Date(2021, 11, 20)}
            endDate={new Date(2022, 1, 20)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyWork;
