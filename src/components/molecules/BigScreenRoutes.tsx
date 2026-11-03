import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import Button from '../atoms/Button';
import LINKS from '../../constants/links';

function BigScreenRoutes() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
      <div className="flex flex-row flex-wrap gap-4">
        <Button variant="paper" href="/my-work">{t('Router.myWork')}</Button>
        <Button variant="outline-on-accent" href="/my-skills-&-tools">{t('Router.skillsAndTools')}</Button>
      </div>
      <a
        href={LINKS.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-on-accent-secondary underline-offset-4 transition-colors hover:text-on-accent hover:underline"
      >
        {t('Router.myLinkedin')}
        <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden />
      </a>
    </div>
  );
}

export default BigScreenRoutes;
