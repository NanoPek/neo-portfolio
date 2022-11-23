import React from 'react';
import Skill from './Skill';

function Toolbox() {
  return (
    <div className="w-full flex flex-col ">
      <h2 className="text-4xl font-bold text-center text-dark p-6">All purpose Tools</h2>
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
