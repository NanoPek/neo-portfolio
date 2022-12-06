import React from 'react';
import Skill from '../atoms/Skill';

function Toolbox() {
  return (
    <div className="w-full flex flex-col ">
      <h2 className="text-4xl font-bold text-center text-dark p-6">Mobile Dev Tools</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch sm:grid-cols-3 xl:grid-cols-6">

        <Skill name="React Native" icon="devicon-react-original colored" color="#a1e7fc" />
        <Skill name="Firebase" icon="devicon-firebase-plain colored " color="#ffd616" />

        <Skill name="Android" icon="devicon-android-plain colored" color="#8cac1d" />
        <Skill name="Apple" icon="devicon-apple-original text-white" color="#A2AAAD" />

        <Skill name="Android Studio" icon="devicon-androidstudio-plain colored " color="#37b2ff" />
        <Skill name="Xcode" icon="devicon-xcode-plain colored" color="#85bcf3" />

      </div>
    </div>
  );
}

export default Toolbox;
