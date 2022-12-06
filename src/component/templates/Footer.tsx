import React, { useEffect } from 'react';
import pdf from '../../assets/resumeCARREZJeremie.pdf';

import Router from '../atoms/Router';
import Icons from '../atoms/Icons';
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
      setInterval(setAllRandomColors, 4000);
    }
  }, [random]);

  return (
    <div className="flex flex-col justify-between w-screen h-[65vh] px-[15vw] bg-dark py-6 ">
      <div className="flex flex-col h-[45%] justify-between">
        <Router title="Home" route="/" color={colors[0]} />
        <Router title="My Work" route="/my-work" color={colors[1]} />
        <Router title="My Skills & Tools" route="/my-skills-&-tools" color={colors[2]} />
        <Router title="My Résumé" route={pdf} color={colors[3]} />
      </div>
      <div className="flex flex-col h-[20%] justify-between">
        <div className={`text-[${colors[4]}] text-xl`} style={{ color: colors[4] }}>
          CONTACT ME
        </div>
        <Router title="linkedin" route="https://www.linkedin.com/in/jeremiecarrez/" color={colors[5]} />
        <Router title="jecarrez.pro@gmail.com" route="mailto:jecarrez.pro@gmail.com" color={colors[6]} />
      </div>
      <Icons colors={colors.slice(7, colors.length)} />
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
