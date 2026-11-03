import React from 'react';
import LanguageSwitcher from '../../molecules/LanguageSwitcher';
import Width from '../../styles/width';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Face from '../../../assets/Face.svg?react';
import Logo from '../../atoms/Logo';

type UntoggledHeaderProps = {
  toggle: () => void;
  onAccent?: boolean;
};

function UntoggledHeader({ toggle, onAccent }: UntoggledHeaderProps) {
  const { width } = useWindowDimensions();

  return (
    <header className="w-screen h-[10vh] flex flex-row justify-between items-center px-8 sm:px-8 2xl:px-20">
      <div className={`${onAccent ? 'text-on-accent' : 'text-fg'} flex flex-col md:flex-row items-center gap-2`}>
        <Logo />
        <LanguageSwitcher />
      </div>
      <button type="button" onClick={toggle} className={onAccent ? 'text-on-accent sm:text-fg' : 'text-fg'}>
        <Face
          fill="currentColor"
          transform={width < Width.lg ? '' : 'scale(1.5)'}
          className={width < Width.lg ? 'animate-pulse hover:scale-[1.5] hover:animate-none transition-all' : 'animate-pulse hover:scale-[2] hover:animate-none transition-all'}
        />
      </button>
    </header>
  );
}

export default UntoggledHeader;
