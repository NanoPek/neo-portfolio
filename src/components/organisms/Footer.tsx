import React from 'react';
import { useTranslation } from 'react-i18next';

import Icons from '../molecules/Icons';
import RoutersSection from '../molecules/RoutersSection';
import LINKS from '../../constants/links';
import Copyright from '../atoms/Copyright';

const linkClasses = {
  labelClassName: 'text-on-ink-muted',
  listClassName: 'gap-2',
  linkClassName: 'text-on-ink-secondary hover:text-on-ink',
  activeClassName: 'text-on-ink',
};

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-ink text-on-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1fr_auto_auto] sm:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold tracking-tight">jecarrez</span>
            <Icons className="text-on-ink-secondary [&_a:hover]:text-on-ink" />
          </div>
          <RoutersSection
            label={t('Router.navigation')}
            {...linkClasses}
            routers={[
              { title: t('Router.home'), route: '/' },
              { title: t('Router.myWork'), route: '/my-work' },
              { title: t('Router.skillsAndTools'), route: '/my-skills-&-tools' },
              { title: t('Router.myLinkedin'), route: LINKS.LINKEDIN },
            ]}
          />
          <RoutersSection
            label={t('Router.contactMe')}
            {...linkClasses}
            routers={[
              { title: LINKS.LINKEDIN_SHORT, route: LINKS.LINKEDIN },
              { title: LINKS.EMAIL, route: LINKS.MAIL_TO },
            ]}
          />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}

export default React.memo(Footer);
