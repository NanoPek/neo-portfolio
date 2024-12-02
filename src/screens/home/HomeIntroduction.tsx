import React from 'react';
import { useTranslation } from 'react-i18next';

function HomeIntroduction() {
  const { t } = useTranslation();

  return (
    <div className="pt-6 items-start">
      <h1 className="text-4xl font-bold sm:text-6xl xl:text-7xl">
        {t('HomePage.title')}
      </h1>
      <h2 className="text-xl pt-3 sm:pt-9 sm:text-2xl lg:text-justify xl:text-5xl text-white">
        {t('HomePage.hi')}
        {' '}
        <span className="font-bold text-accent">
          {t('HomePage.name')}
        </span>
        {' '}
        👋
      </h2>
      <h3 className="text-md pt-3 sm:py-9 sm:text-xl lg:text-justify xl:text-3xl 2xl:pr-56 text-white">
        {t('HomePage.description')}
      </h3>
    </div>
  );
}

export default HomeIntroduction;
