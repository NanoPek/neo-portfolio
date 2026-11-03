import React from 'react';
import { useTranslation } from 'react-i18next';
import LINKS from '../../constants/links';

const CURRENT_YEAR = new Date().getFullYear();

function Copyright() {
  const { t } = useTranslation();

  return (
    <p className="border-t border-on-ink/15 pt-6 text-sm text-on-ink-muted">
      {t('Footer.copyright', { year: CURRENT_YEAR })}
      {' · '}
      <a href={LINKS.GITHUB_PORTFOLIO} className="underline underline-offset-4 transition-colors hover:text-on-ink">
        {t('Footer.source')}
      </a>
    </p>
  );
}

export default Copyright;
