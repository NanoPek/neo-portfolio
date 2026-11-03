import React from 'react';
import { useTranslation } from 'react-i18next';

function HomeIntroduction() {
  const { t } = useTranslation();

  return (
    <div className="pt-6 items-start">
      <h1 className="text-4xl font-bold sm:text-6xl xl:text-7xl">
        {t('HomePage.title')}
      </h1>
      <p className="text-md pt-3 sm:py-9 sm:text-xl xl:text-3xl 2xl:pr-56 text-on-accent-secondary">
        {t('HomePage.intro')}
      </p>
    </div>
  );
}

export default HomeIntroduction;
