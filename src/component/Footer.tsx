import React, { useEffect } from 'react';
import pdf from '../assets/resumeCARREZJeremie.pdf';

import { ReactComponent as LinkedinIcon } from '../assets/linkedinIcon.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitterIcon.svg';
import { ReactComponent as GithubIcon } from '../assets/githubIcon.svg';

// eslint-disable-next-line react/require-default-props
function Footer(props: { random?: boolean }) {
  const { random } = props;

  const [colors, setColors] = React.useState(['#FF9505', '#FF9505', '#FF9505', '#FF9505', '#FF9505', '#BEE5BF', '#BEE5BF',
    '#FF9505', '#FF9505', '#FF9505']);

  const generateRandomColor = () => {
    const allColors = ['#f98c6b', '#67a1d0', '#007acc', '#f0db4f', '#bcdc77', '#a1e7fc', '#89d0ab', '#7ed9b2', '#d680a9',
      '#85bcd1', '#8cac1d', '#A2AAAD', '#37b2ff', '#85bcf3', '#92a7d4', '#ffd616', '#ffdc78', '#8bbae3', '#ff8f6e',
      '#7253ce', '#ff8f6e', '#fd806f', '#ff8f6e', '#336d9c', '#4972ac', '#c56876', '#ffaf67'];
    const randomNumber = Math.floor(Math.random() * allColors.length);
    return allColors[randomNumber];
  };

  const setAllRandomColors = () => {
    const localColors = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < colors.length; i++) {
      localColors.push(generateRandomColor());
    }
    setColors(localColors);
  };

  useEffect(() => {
    if (random) {
      setAllRandomColors();
      setInterval(setAllRandomColors, 5000);
    }
  }, [random]);

  return (
    <div className="flex flex-col justify-between w-screen h-[65vh] px-[15vw] bg-dark py-6 ">
      <div className="flex flex-col h-[40%] justify-between">
        <a href="/" className={`text-[${colors[0]}] text-xl`} style={{ color: colors[0] }}>
          Home
        </a>
        <a href="my-work" className={`text-[${colors[1]}] text-xl`} style={{ color: colors[1] }}>
          My Work
        </a>
        <a href="my-skills-&-tools" className={`text-[${colors[2]}] text-xl`} style={{ color: colors[2] }}>
          My Skills & Tools
        </a>
        <a href={pdf} target="_blank" rel="noreferrer" className={`text-[${colors[3]}] text-xl`} style={{ color: colors[3] }}>
          My Résumé
        </a>
      </div>
      <div className="flex flex-col h-[20%] justify-between">
        <div className={`text-[${colors[4]}] text-xl`} style={{ color: colors[4] }}>
          CONTACT ME
        </div>
        <a href="https://www.linkedin.com/in/jeremiecarrez/" className={`text-[${colors[5]}] text-xl underline underline-offset-2`} style={{ color: colors[5] }}>
          linkedin
        </a>
        <a href="mailto:jecarrez.pro@gmail.com" className={`text-[${colors[6]}] text-xl underline underline-offset-2`} style={{ color: colors[6] }}>
          jecarrez.pro@gmail.com
        </a>
      </div>
      <div className="flex flex-row justify-evenly h-[40px]">
        <a href="https://www.linkedin.com/in/jeremiecarrez/" target="_blank" rel="noreferrer">
          <LinkedinIcon className={`fill-current text-[${colors[7]}]`} style={{ color: colors[7] }} />
        </a>
        <a href="https://twitter.com/NanoPekTo" target="_blank" rel="noreferrer">
          <TwitterIcon className={`fill-current text-[${colors[9]}]`} style={{ color: colors[8] }} />
        </a>
        <a href="https://github.com/NanoPek" target="_blank" rel="noreferrer">
          <GithubIcon className={` fill-current text-[${colors[9]}]`} style={{ color: colors[9] }} />
        </a>
      </div>
      <div className="flex flex-col justify-between h-[10%] w-full">
        <div className="h-px w-full bg-secondary" />
        <div className="text-accent text-lg ">
          © Jérémie Carrez 2022
        </div>
      </div>
    </div>
  );
}

export default Footer;
