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
      <h2 className="text-3xl font-bold text-center text-dark p-6" style={{ color: color[0], backgroundColor: color[1] }}>Mobile Dev Tools</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch">

        <Skill name="Android" icon="devicon-android-plain colored" color="#8cac1d" />
        <Skill name="Apple" icon="devicon-apple-original text-white" color="#A2AAAD" />

        <Skill name="Android Studio" icon="devicon-androidstudio-plain colored " color="#37b2ff" />
        <Skill name="Xcode" icon="devicon-xcode-plain colored" color="#85bcf3" />

        <Skill name="Google Cloud" icon="devicon-googlecloud-plain colored" color="#92a7d4" />
        <Skill name="Firebase" icon="devicon-firebase-plain colored " color="#ffd616" />

      </div>
    </div>
  );
}

export default Toolbox;
