import React, { useEffect } from 'react';
import { skillsColors } from '../../styles/colors';
import UntoggledHeader from './UntoggledHeader';
import ToggledHeader from './ToggledHeader';

type HeaderProps = {
  logoColor: string;
  textColor?: string;
  random?: boolean;
  smallLogoColor?: string;
};

function Header({
  logoColor, textColor, random, smallLogoColor,
}: HeaderProps) {
  const [isToggle, setIsToggle] = React.useState(false);
  const [faceColor, setFaceColor] = React.useState(smallLogoColor ?? logoColor);

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  const generateRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * skillsColors.length);
    return skillsColors[randomNumber];
  };

  useEffect(() => {
    if (random) {
      setFaceColor(generateRandomColor);
      setInterval(() => setFaceColor(generateRandomColor), 4000);
    }
  }, [random]);

  useEffect(() => {
    if (isToggle) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isToggle]);

  return (
    <div className="z-50 absolute 2xl:right-0 flex flex-row ">
      { !isToggle ? (
        <UntoggledHeader
          faceColor={faceColor}
          toggle={toggle}
          textColor={textColor}
          smallLogoColor={smallLogoColor}
          random={random}
          generateRandomColor={generateRandomColor}
        />
      ) : (
        <ToggledHeader toggle={toggle} />
      )}
    </div>
  );
}

export default React.memo(Header);
