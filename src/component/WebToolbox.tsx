import React from 'react';
import Skill from './Skill';

function WebToolbox() {
  return (
    <div className="w-full flex flex-col ">
      <h2 className="text-4xl font-bold text-center text-dark p-6">Web Dev Tools</h2>
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
