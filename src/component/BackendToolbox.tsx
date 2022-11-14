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
      <h2 className="text-3xl font-bold text-center text-dark p-6" style={{ color: color[0], backgroundColor: color[1] }}>Backend Tools</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch">

        <Skill name="Java" icon="devicon-java-plain colored" color="#fd806f" />
        <Skill name="Python" icon="devicon-python-plain colored" color="#336d9c" />

        <Skill name="C" icon="devicon-c-plain colored" color="#4972ac " />
        <Skill name="C++" icon="devicon-cplusplus-plain colored" color="#c56876" />

        <Skill name="OCaml" icon="devicon-ocaml-plain colored" color="#ffaf67" />
        <Skill name="Linux" icon="devicon-linux-plain text-[#f5bd0c] " color="#000" />

      </div>
    </div>
  );
}

export default Toolbox;
