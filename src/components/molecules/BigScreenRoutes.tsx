import React from 'react';
import { useTranslation } from 'react-i18next';
import BigScreenRoute from '../atoms/BigScreenRoute';
import pdf from '../../assets/resumeCARREZJeremie.pdf';

function BigScreenRoutes() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col xl:flex-row items-center justify-around gap-y-4 pt-8 pb-4">
      <BigScreenRoute title={t('Router.myWork')} route="/my-work" />
      <BigScreenRoute title={t('Router.skillsAndTools')} route="/my-skills-&-tools" />
      <BigScreenRoute title={t('Router.myResume')} route={pdf} newTab />
    </div>
  );
}

export default BigScreenRoutes;
