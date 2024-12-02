import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/organisms/header/Header';
import WorkBox from '../components/molecules/WorkBox/WorkBox';
import Footer from '../components/organisms/Footer';
import workBoxes from '../constants/workData';

function MyWork() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <Header textColor="text-black" logoColor="#000" smallLogoColor="#000" />
      <div className="min-h-[90vh] flex flex-col items-center 2xl:items-center mt-[10vh] pb-6 bg-png">
        <div className="w-5/6 2xl:w-screen flex flex-col lg:grid lg:grid-cols-2 2xl:grid-cols-3 items-center gap-9 py-6 2xl:px-60">
          {workBoxes.map((work) => (
            <WorkBox
              key={work.titleKey}
              image={work.image}
              title={t(work.titleKey)}
              description={t(work.descriptionKey)}
              techs={work.techs}
              extension={work.extension}
              link={work.link}
              appStore={work.appStore}
              github={work.github}
              startDate={work.startDate}
              endDate={work.endDate}
              color={work.color}
              figma={work.figma}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyWork;
