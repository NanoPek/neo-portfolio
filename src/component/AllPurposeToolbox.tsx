import React, { useEffect } from 'react';
import Skill from './Skill';

function Toolbox() {
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
      <h2 className="text-3xl font-bold text-center text-dark p-6" style={{ color: color[0], backgroundColor: color[1] }}>All purpose Tools</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch">

        <Skill name="JetBrains" icon="devicon-jetbrains-plain colored" color="#ffdc78" />
        <Skill name="VSCode" icon="devicon-vscode-plain colored" color="#8bbae3" />

        <Skill name="Git" icon="devicon-git-plain colored" color="#ff8f6e" />
        <Skill name="ESLint" icon="devicon-eslint-original colored" color="#7253ce" />

        <Skill name="Command Line" icon="devicon-bash-plain colored" color="#696f74" />
        <Skill name="Figma" icon="devicon-figma-plain colored" color="#ff8e68" />

      </div>
    </div>
  );
}

export default Toolbox;
