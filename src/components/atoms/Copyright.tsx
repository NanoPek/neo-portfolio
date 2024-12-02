import React from 'react';
import { useTranslation } from 'react-i18next';
import LINKS from '../../constants/links';

function Copyright() {
  const { t } = useTranslation();

  return (
    <div className="text-accent text-lg">
      {t('Footer.copyright')}
      {' '}
      <a href={LINKS.GITHUB_PORTFOLIO} className="underline">
        {LINKS.GITHUB_PORTFOLIO}
      </a>
    </div>
  );
}

export default Copyright;
