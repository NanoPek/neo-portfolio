import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Face } from '../../assets/Face.svg';
import { ReactComponent as FaceOpen } from '../../assets/FaceOpen.svg';

import pdf from '../../assets/resumeCARREZJeremie.pdf';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Router from '../atoms/Router';
import Icons from '../atoms/Icons';
import MyColors from '../atoms/MyColors';
import LanguageSwitcher from '../molecules/LanguageSwitcher';

type HeaderProps = {
  textColor: string;
  logoColor: string;
  random?: boolean;
  smallLogoColor?: string;
};

function Header({
  textColor, logoColor, random, smallLogoColor,
}: HeaderProps) {
  const [isToggle, setIsToggle] = React.useState(false);
  const [faceColor, setFaceColor] = React.useState(logoColor);

  const { width } = useWindowDimensions();

  const { t } = useTranslation();
  const location = useLocation();

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  const generateRandomColor = () => {
    const colors = ['#f98c6b', '#67a1d0', '#007acc', '#f0db4f', '#bcdc77', '#a1e7fc', '#89d0ab', '#7ed9b2', '#d680a9',
      '#85bcd1', '#8cac1d', '#A2AAAD', '#37b2ff', '#85bcf3', '#92a7d4', '#ffd616', '#ffdc78', '#8bbae3', '#ff8f6e',
      '#7253ce', '#696f74', '#ff8f6e', '#fd806f', '#ff8f6e', '#336d9c', '#4972ac', '#c56876', '#ffaf67', '#000'];
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  };

  function spanIt(str: string) {
    return str.split('').map((letter) => `<span>${letter}</span>`).join('');
  }

  function randomizeText() {
    const elem = document.getElementById('title');
    if (elem) {
      elem.style.color = generateRandomColor();

      elem.innerHTML = spanIt(elem.innerText);
      // now each letter
      const spans = elem.querySelectorAll('span');
      // eslint-disable-next-line no-return-assign,no-param-reassign
      spans.forEach((span) => span.style.color = generateRandomColor());
    }
  }

  useEffect(() => {
    if (random) {
      setFaceColor(generateRandomColor);
      randomizeText();
      setInterval(randomizeText, 4000);
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
      {
        !isToggle ? (
          <header className="flex flex-row justify-between items-center px-8 w-screen h-[10vh] sm:px-8 2xl:px-20  ">
            <div className={` ${textColor} flex flex-col md:flex-row items-center gap-2`}>
              {
              location.pathname !== '/'
                ? (
                  <a href="/" className="font-extrabold text-3xl 2xl:text-5xl flex flex-row items-center" id="title">
                    { location.pathname === '/my-work' && (
                    <img
                      src="https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085c39c02c107_mac.svg"
                      alt="CartoonLogo"
                      className="w-10 2xl:w-14 mr-2"
                    />
                    )}
                    jecarrez
                  </a>
                )
                : (
                  <div className="font-extrabold text-3xl 2xl:text-5xl cursor-default flex flex-row gap-2 items-center">
                    jecarrez
                  </div>
                )
            }
              <LanguageSwitcher />
            </div>
            <button type="button" onClick={toggle}>
              <Face
                fill={smallLogoColor && width < 640 ? smallLogoColor : faceColor}
                transform={width < 1536 ? '' : 'scale(1.5)'}
                className={width < 1536 ? 'animate-pulse hover:scale-[1.5] hover:animate-none transition-all' : 'animate-pulse hover:scale-[2] hover:animate-none transition-all'}
              />
            </button>
          </header>
        ) : (
          <div className="bg-secondary flex flex-col  items-center px-4 w-screen h-screen ">
            <header className=" flex flex-row justify-between items-center px-4 w-screen h-[10vh] sm:px-8 2xl:px-20  ">
              <div className="flex flex-col md:flex-row items-center gap-2">
                {
                  location.pathname !== '/'
                    ? (
                      <a href="/" className=" text-primary font-extrabold text-3xl 2xl:text-5xl">
                        jecarrez
                      </a>
                    )
                    : (
                      <div className=" text-primary font-extrabold text-3xl 2xl:text-5xl cursor-default">
                        jecarrez
                      </div>
                    )
                }
                <LanguageSwitcher />
              </div>
              <button type="button" onClick={toggle}>
                <FaceOpen
                  fill={MyColors.primary}
                  transform={width < 1536 ? '' : 'scale(1.5)'}
                  className={width < 1536 ? 'animate-pulse hover:scale-[1.5] hover:animate-none transition-all' : 'animate-pulse hover:scale-[2] hover:animate-none transition-all'}
                />
              </button>
            </header>
            <div className="flex flex-col justify-evenly w-screen px-[15vw] h-[90vh]">
              <div className="flex flex-col h-1/3 justify-between">
                <Router title={t('Router.home')} route="/" />
                <Router title={t('Router.myWork')} route="/my-work" />
                <Router title={t('Router.skillsAndTools')} route="/my-skills-&-tools" />
                <Router title={t('Router.myResume')} route={pdf} newTab />
              </div>
              <div className="flex flex-col h-1/4 justify-between">
                <div className="text-primary text-2xl opacity-50">
                  {t('Router.contactMe')}
                </div>
                <Router title={width < 640 ? 'linkedin.com' : 'linkedin.com/in/jecarrez'} route="https://www.linkedin.com/in/jecarrez/" newTab />
                <Router title="jecarrez.pro@gmail.com" route="mailto:jecarrez.pro@gmail.com" />
              </div>
              <Icons />
            </div>
          </div>
        )
      }
    </div>
  );
}

Header.defaultProps = {
  random: false,
  smallLogoColor: '',
};

export default React.memo(Header);
