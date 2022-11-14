import React, { useEffect } from 'react';
import Skill from './Skill';

function WebToolbox() {
  const [color, setColor] = React.useState(['#f98c6b', '#7253ce']);
  const allColors = ['#f98c6b', '#67a1d0', '#007acc', '#f0db4f', '#bcdc77', '#a1e7fc', '#89d0ab', '#7ed9b2', '#d680a9',
    '#85bcd1', '#8cac1d', '#A2AAAD', '#37b2ff', '#85bcf3', '#92a7d4', '#ffd616', '#ffdc78', '#8bbae3', '#ff8f6e',
    '#7253ce', '#ff8f6e', '#fd806f', '#ff8f6e', '#336d9c', '#4972ac', '#c56876', '#ffaf67'];
  function generateRandomColor() {
    return Math.floor(Math.random() * allColors.length);
  }

  useEffect(() => {
    const localColors = [];
    localColors.push(allColors[generateRandomColor()]);
    localColors.push(allColors[generateRandomColor()]);
    setColor(localColors);
    setInterval(() => {
      const localColors2 = [];
      localColors2.push(allColors[generateRandomColor()]);
      localColors2.push(allColors[generateRandomColor()]);
      setColor(localColors2);
    }, 5000);
  }, []);

  return (
    <div className="w-full flex flex-col ">
      <h2 className="text-3xl font-bold text-center text-dark p-6" style={{ color: color[0], backgroundColor: color[1] }}>Web Dev Tools</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch">

        <Skill name="HTML" icon="devicon-html5-plain colored" color="#f98c6b" />
        <Skill name="CSS" icon="devicon-css3-plain colored" color="#67a1d0" />

        <Skill name="JavaScript" icon="devicon-javascript-plain colored" color="#007acc" />
        <Skill name="TypeScript" icon="devicon-typescript-plain colored" color="#f0db4f" />

        <Skill name="NodeJS" icon="devicon-nodejs-plain colored" color="#bcdc77" />
        <Skill name="ReactJS" icon="devicon-react-original colored" color="#a1e7fc" />

        <Skill name="VueJS" icon="devicon-vuejs-plain colored" color="#89d0ab" />
        <Skill name="NuxtJS" icon="devicon-nuxtjs-plain colored" color="#7ed9b2" />

        <Skill name="SASS & SCSS" icon="devicon-sass-original colored" color="#d680a9" />
        <Skill name="TailwindCSS" icon="devicon-tailwindcss-original-wordmark colored" color="#85bcd1" />

      </div>
    </div>
  );
}

export default WebToolbox;
