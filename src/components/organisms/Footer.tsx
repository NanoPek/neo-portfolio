import React from 'react';
import { useTranslation } from 'react-i18next';

import Icons from '../molecules/Icons';
import RoutersSection from '../molecules/RoutersSection';
import LINKS from '../../constants/links';
import Copyright from '../atoms/Copyright';
import Divider from '../atoms/Divider';

function Footer() {
  const { t } = useTranslation();

  const sections = [
    {
      text: t('Router.navigation'),
      routers: [
        { title: t('Router.home'), route: '/' },
        { title: t('Router.myWork'), route: '/my-work' },
        { title: t('Router.skillsAndTools'), route: '/my-skills-&-tools' },
        { title: t('Router.myLinkedin'), route: LINKS.LINKEDIN },
      ],
    },
    {
      text: t('Router.contactMe'),
      routers: [
        { title: LINKS.LINKEDIN_SHORT, route: LINKS.LINKEDIN },
        { title: LINKS.EMAIL, route: LINKS.MAIL_TO },
      ],
    },
  ];

  return (
    <div className="p-8 sm:px-16 md:px-32 flex flex-col w-screen gap-4 bg-ink text-on-ink">
      {sections.map((section) => (
        <RoutersSection
          key={section.text}
          header={{ text: section.text }}
          routers={section.routers}
        />
      ))}
      <Icons />
      <Divider />
      <Copyright />
    </div>
  );
}

export default React.memo(Footer);
