import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Face } from '../../assets/Face.svg';
import { ReactComponent as FaceOpen } from '../../assets/FaceOpen.svg';

import pdf from '../../assets/resumeCARREZJeremie.pdf';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Router from '../atoms/Router';
import Icons from '../atoms/Icons';

// eslint-disable-next-line react/require-default-props
function Header(props: { dark: boolean, random?: boolean }) {
  const { dark, random } = props;
  const [isToggle, setIsToggle] = React.useState(false);
  const [faceColor, setFaceColor] = React.useState(dark ? '#BEE5BF' : '#8338EC');

  const textColor = dark ? 'text-secondary' : 'text-primary';
  const { width } = useWindowDimensions();

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
      setInterval(randomizeText, 5000);
      setInterval(() => setFaceColor(generateRandomColor), 5000);
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
    <div className="z-50 absolute sm:right-0 flex flex-row">
      {
        !isToggle ? (
          <header className="flex flex-row justify-between items-center px-4 w-screen h-[10vh] sm:px-20 sm:h-[18vh] ">
            {
              location.pathname !== '/'
                ? (
                  <a href="/Users/jerem/WebstormProjects/new-portfolio-ts/public" className={` ${textColor} font-extrabold text-3xl sm:text-5xl`} id="title">
                    Nanȯ
                  </a>
                )
                : (
                  <div className={` ${textColor} font-extrabold text-3xl sm:text-5xl`}>
                    Nanȯ
                  </div>
                )
            }
            <button type="button" onClick={toggle}>
              <Face stroke={width < 640 ? faceColor : '#8338EC'} transform={width < 640 ? '' : 'scale(1.5)'} />
            </button>
          </header>
        ) : (
          <div className="bg-light flex flex-col  items-center px-4 w-screen h-screen ">
            <header className=" flex flex-row justify-between items-center px-4 w-screen h-[10vh] sm:px-20 sm:h-[18vh] ">
              {
                location.pathname !== '/'
                  ? (
                    <a href="/Users/jerem/WebstormProjects/new-portfolio-ts/public" className={` ${textColor} font-extrabold text-3xl sm:text-5xl`}>
                      Nanȯ
                    </a>
                  )
                  : (
                    <div className={` ${textColor} font-extrabold text-3xl sm:text-5xl`}>
                      Nanȯ
                    </div>
                  )
              }
              <button type="button" onClick={toggle}>
                <FaceOpen transform={width < 640 ? '' : 'scale(1.5)'} />
              </button>
            </header>
            <div className="flex flex-col justify-evenly w-screen px-[15vw] h-[90vh]">
              <div className="flex flex-col h-1/4 justify-between">
                <Router title="Home" route="/" />
                <Router title="My Work" route="/my-work" />
                <Router title="My Skills & Tools" route="/my-skills-&-tools" />
                <Router title="My Résumé" route={pdf} />
              </div>
              <div className="flex flex-col h-[15vh] justify-between">
                <div className="text-primary text-2xl opacity-50">
                  CONTACT ME
                </div>
                <Router title="linkedin" route="https://www.linkedin.com/in/jeremiecarrez/" />
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
export default Header;
