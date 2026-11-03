import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/organisms/header/Header';
import WorkBox from '../components/molecules/WorkBox/WorkBox';
import Footer from '../components/organisms/Footer';
import workBoxes from '../constants/workData';

const FIRST_YEAR = Math.min(...workBoxes.map((work) => work.startDate.getFullYear()));

function MyWork() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 sm:px-8 sm:py-16">
        <h1 className="text-4xl font-medium tracking-[-0.02em] sm:text-5xl">{t('MyWork.title')}</h1>
        <p className="mt-3 font-mono text-sm text-fg-muted">
          {t('MyWork.summary', { count: workBoxes.length, year: FIRST_YEAR })}
        </p>
        <div className="mt-10 grid gap-10 sm:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {workBoxes.map((work) => (
            <WorkBox
              key={work.titleKey}
              image={work.image}
              title={t(work.titleKey)}
              description={t(work.descriptionKey)}
              location={'location' in work && work.location ? t(work.location) : undefined}
              techs={work.techs}
              extension={work.extension}
              link={work.link}
              appStore={work.appStore}
              github={work.github}
              startDate={work.startDate}
              endDate={work.endDate}
              figma={work.figma}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyWork;
