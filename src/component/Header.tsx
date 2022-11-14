import React, { useEffect } from 'react';
import { ReactComponent as Face } from '../assets/Face.svg';
import imageOpen from '../assets/FaceOpen.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';

import pdf from '../assets/resumeCARREZJeremie.pdf';

// eslint-disable-next-line react/require-default-props
function Header(props: { dark: boolean, random?: boolean }) {
  const { dark, random } = props;
  const [isToggle, setIsToggle] = React.useState(false);
  const [faceColor, setFaceColor] = React.useState(dark ? '#BEE5BF' : '#8338EC');

  const textColor = dark ? 'text-secondary' : 'text-primary';
  const bgColor = dark ? 'bg-primary' : 'bg-light';

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

  return (
    <div className="z-50 absolute">
      {
        !isToggle ? (
          <header className={`${bgColor} flex flex-row justify-between items-center px-4 w-screen h-[10vh] `}>
            <div className={` ${textColor} font-extrabold text-3xl`} id="title">
              Nanȯ
            </div>
            <button type="button" onClick={toggle}>
              <Face stroke={faceColor} />
            </button>
          </header>
        ) : (
          <div className="bg-light flex flex-col  items-center px-4 w-screen h-screen">
            <header className=" flex flex-row justify-between items-center px-4 w-screen h-[10vh] ">
              <div className="font-extrabold text-primary text-3xl">
                Nanȯ
              </div>
              <button type="button" onClick={toggle}>
                <img src={imageOpen} alt="Menu" />
              </button>
            </header>
            <div className="flex flex-col justify-evenly w-screen px-[15vw] h-[90vh]">
              <div className="flex flex-col h-1/4 justify-between">
                <a href="/" className="text-primary text-xl">
                  Home
                </a>
                <a href="my-work" className="text-primary text-xl">
                  My Work
                </a>
                <a href="my-skills-&-tools" className="text-primary text-xl">
                  My Skills & Tools
                </a>
                <a href={pdf} target="_blank" rel="noreferrer" className="text-primary text-xl">
                  My Résumé
                </a>
              </div>
              <div className="flex flex-col h-[10vh] justify-between">
                <div className="text-primary text-2xl opacity-50">
                  CONTACT ME
                </div>
                <a href="mailto:jecarrez.pro@gmail.com" className="text-primary text-xl underline underline-offset-2  ">
                  jecarrez.pro@gmail.com
                </a>
              </div>
              <div className="flex flex-row justify-evenly h-[40px]">
                <a href="https://www.linkedin.com/in/jeremiecarrez/" target="_blank" rel="noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/NanoPekTo" target="_blank" rel="noreferrer">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="https://github.com/NanoPek" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
export default Header;
