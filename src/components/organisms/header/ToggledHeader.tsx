import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../molecules/LanguageSwitcher';
import { paletteColors } from '../../styles/colors';
import pdf from '../../../assets/resumeCARREZJeremie.pdf';
import LINKS from '../../../constants/links';
import Icons from '../../molecules/Icons';
import { ReactComponent as FaceOpen } from '../../../assets/FaceOpen.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import RoutersSection from '../../molecules/RoutersSection';
import Logo from '../../atoms/Logo';
import Width from '../../styles/width';

type ToggledHeaderProps = {
  toggle: () => void;
};

function ToggledHeader({ toggle }: ToggledHeaderProps) {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const navSections = [
    {
      text: t('Router.navigation'),
      routers: [
        { title: t('Router.home'), route: '/' },
        { title: t('Router.myWork'), route: '/my-work' },
        { title: t('Router.skillsAndTools'), route: '/my-skills-&-tools' },
        { title: t('Router.myResume'), route: pdf },
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
    <div className="w-screen h-screen flex flex-col items-center px-4 bg-secondary">
      <header className="w-screen h-[10vh] flex flex-row justify-between items-center px-4 sm:px-8 2xl:px-20">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Logo />
          <LanguageSwitcher />
        </div>
        <button type="button" onClick={toggle}>
          <FaceOpen
            fill={paletteColors.primary}
            transform={width < Width.lg ? '' : 'scale(1.5)'}
            className={width < Width.lg ? 'animate-pulse hover:scale-[1.5] hover:animate-none transition-all' : 'animate-pulse hover:scale-[2] hover:animate-none transition-all'}
          />
        </button>
      </header>
      <div className="w-screen h-[90vh] flex flex-col justify-evenly px-8 md:px-[15vw]">
        {navSections.map((section) => (
          <RoutersSection
            key={section.text}
            header={{ text: section.text, color: paletteColors.accent }}
            routers={section.routers}
          />
        ))}
        <Icons />
      </div>
    </div>
  );
}

export default React.memo(ToggledHeader);
