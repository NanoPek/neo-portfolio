import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../molecules/LanguageSwitcher';
import Logo from '../../atoms/Logo';
import Face from '../../../assets/Face.svg?react';
import FaceOpen from '../../../assets/FaceOpen.svg?react';
import Menu from './Menu';

function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.classList.add('overflow-hidden');
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const FaceIcon = isOpen ? FaceOpen : Face;

  return (
    <>
      <header className="relative z-50 flex h-16 shrink-0 flex-row items-center justify-between gap-4 border-b-3 border-ink bg-paper px-6 sm:px-8">
        <div className="flex flex-row items-baseline gap-6">
          <Logo />
          <LanguageSwitcher />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label={t(isOpen ? 'Router.closeMenu' : 'Router.openMenu')}
          className="-mr-2 inline-flex h-12 w-14 items-center justify-center rounded-lg text-fg transition-colors hover:bg-raised"
        >
          <FaceIcon fill="currentColor" className="h-7 w-auto" aria-hidden />
        </button>
      </header>
      {isOpen && <Menu />}
    </>
  );
}

export default React.memo(Header);
