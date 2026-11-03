import React from 'react';
import { useTranslation } from 'react-i18next';
import LINKS from '../../../constants/links';
import Icons from '../../molecules/Icons';
import RoutersSection from '../../molecules/RoutersSection';

function Menu() {
  const { t } = useTranslation();

  return (
    <div id="site-menu" className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <RoutersSection
            label={t('Router.navigation')}
            labelClassName="text-fg-muted"
            listClassName="gap-2"
            linkClassName="text-3xl font-medium text-fg hover:text-accent sm:text-4xl"
            activeClassName="text-3xl font-medium text-accent sm:text-4xl"
            routers={[
              { title: t('Router.home'), route: '/' },
              { title: t('Router.myWork'), route: '/my-work' },
              { title: t('Router.skillsAndTools'), route: '/my-skills-&-tools' },
              { title: t('Router.myLinkedin'), route: LINKS.LINKEDIN },
            ]}
          />
          <RoutersSection
            label={t('Router.contactMe')}
            labelClassName="text-fg-muted"
            listClassName="gap-2"
            linkClassName="text-xl text-fg-secondary hover:text-accent"
            activeClassName="text-xl text-accent"
            routers={[
              { title: LINKS.LINKEDIN_SHORT, route: LINKS.LINKEDIN },
              { title: LINKS.EMAIL, route: LINKS.MAIL_TO },
            ]}
          />
        </div>
        <Icons className="text-fg-secondary [&_a:hover]:text-accent" />
      </div>
    </div>
  );
}

export default Menu;
