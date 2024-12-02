import React from 'react';
import LanguageSwitcher from '../../molecules/LanguageSwitcher';
import Width from '../../styles/width';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ReactComponent as Face } from '../../../assets/Face.svg';
import Logo from '../../atoms/Logo';

type UntoggledHeaderProps = {
  faceColor: string;
  toggle: () => void;
  textColor?: string;
  smallLogoColor?: string;
  random?: boolean;
  generateRandomColor?: () => string;
};

function UntoggledHeader({
  faceColor, toggle, textColor, smallLogoColor, random, generateRandomColor,
}: UntoggledHeaderProps) {
  const { width } = useWindowDimensions();

  return (
    <header className="w-screen h-[10vh] flex flex-row justify-between items-center px-8 sm:px-8 2xl:px-20">
      <div className={`${textColor} flex flex-col md:flex-row items-center gap-2`}>
        <Logo random={random} generateRandomColor={generateRandomColor} />
        <LanguageSwitcher />
      </div>
      <button type="button" onClick={toggle}>
        <Face
          fill={smallLogoColor && width < Width.sm ? smallLogoColor : faceColor}
          transform={width < Width.lg ? '' : 'scale(1.5)'}
          className={width < Width.lg ? 'animate-pulse hover:scale-[1.5] hover:animate-none transition-all' : 'animate-pulse hover:scale-[2] hover:animate-none transition-all'}
        />
      </button>
    </header>
  );
}

export default UntoggledHeader;
