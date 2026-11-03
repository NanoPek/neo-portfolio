import React from 'react';
import { useTranslation } from 'react-i18next';
import LINKS from '../../constants/links';

const CURRENT_YEAR = new Date().getFullYear();

function Copyright() {
  const { t } = useTranslation();

  return (
    <div className="text-on-ink-muted text-lg">
      {t('Footer.copyright', { year: CURRENT_YEAR })}
      {' · '}
      <a href={LINKS.GITHUB_PORTFOLIO} className="underline">
        {t('Footer.source')}
      </a>
    </div>
  );
}

export default Copyright;
