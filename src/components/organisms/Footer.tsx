import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import pdf from '../../assets/resumeCARREZJeremie.pdf';

import Icons from '../molecules/Icons';
import RoutersSection from '../molecules/RoutersSection';
import LINKS from '../../constants/links';
import { paletteColors, skillsColors } from '../styles/colors';
import Copyright from '../atoms/Copyright';
import Divider from '../atoms/Divider';

type FooterProps = {
  random?: boolean;
};

function Footer({ random }: FooterProps) {
  const { t } = useTranslation();

  const [colors, setColors] = React.useState([paletteColors.accent, paletteColors.secondary,
    paletteColors.secondary, paletteColors.secondary, paletteColors.secondary, paletteColors.accent,
    paletteColors.secondary, paletteColors.secondary, paletteColors.accent, paletteColors.accent,
    paletteColors.accent, paletteColors.accent]);

  function setAllRandomColors() {
    const localColors = [];
    for (let i = 0; i < colors.length; i += 1) {
      const randomNumber = Math.floor(Math.random() * skillsColors.length);
      localColors.push(skillsColors[randomNumber]);
    }
    setColors(localColors);
  }

  useEffect(() => {
    if (random) {
      setAllRandomColors();
      setInterval(setAllRandomColors, 4000);
    }
  }, [random]);

  const colorSections = [
    {
      text: t('Router.navigation'),
      routers: [
        { title: t('Router.home'), route: '/', color: colors[1] },
        { title: t('Router.myWork'), route: '/my-work', color: colors[2] },
        { title: t('Router.skillsAndTools'), route: '/my-skills-&-tools', color: colors[3] },
        { title: t('Router.myResume'), route: pdf, color: colors[4] },
      ],
    },
    {
      text: t('Router.contactMe'),
      routers: [
        { title: LINKS.LINKEDIN_SHORT, route: LINKS.LINKEDIN, color: colors[6] },
        { title: LINKS.EMAIL, route: LINKS.MAIL_TO, color: colors[7] },
      ],
    },
  ];

  return (
    <div className="p-8 sm:px-16 md:px-32 flex flex-col w-screen gap-4 bg-dark">
      {colorSections.map((section, index) => (
        <RoutersSection
          key={section.text}
          header={{ text: section.text, color: colors[index * 5] }}
          routers={section.routers}
        />
      ))}
      <Icons colors={colors.slice(8, colors.length)} />
      <Divider />
      <Copyright />
    </div>
  );
}

export default React.memo(Footer);
