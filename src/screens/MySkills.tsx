import React, { useEffect } from 'react';
import Header from '../component/templates/Header';
import Footer from '../component/templates/Footer';
import Toolbox from '../component/templates/Toolbox';
import MyColors from '../component/atoms/MyColors';

const WebSkills = [
  { name: 'HTML', icon: 'devicon-html5-plain colored', color: '#f98c6b' },
  { name: 'CSS', icon: 'devicon-css3-plain colored', color: '#67a1d0' },

  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', color: '#007acc' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', color: '#f0db4f' },

  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', color: '#bcdc77' },
  { name: 'React.js', icon: 'devicon-react-original colored', color: '#a1e7fc' },

  { name: 'VueJS', icon: 'devicon-vuejs-plain colored', color: '#89d0ab' },
  { name: 'NuxtJS', icon: 'devicon-nuxtjs-plain colored', color: '#7ed9b2' },

  { name: 'SASS & SCSS', icon: 'devicon-sass-original colored', color: '#d680a9' },
  { name: 'TailwindCSS', icon: 'devicon-tailwindcss-original-wordmark colored', color: '#85bcd1' },
];

const MobileSkills = [
  { name: 'React Native', icon: 'devicon-react-original colored', color: '#a1e7fc' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored', color: '#ffd616' },

  { name: 'Android', icon: 'devicon-android-plain colored', color: '#8cac1d' },
  { name: 'Apple', icon: 'devicon-apple-original text-white', color: '#A2AAAD' },

  { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored', color: '#37b2ff' },
  { name: 'Xcode', icon: 'devicon-xcode-plain colored', color: '#85bcf3' },
];

const OtherTools = [
  { name: 'JetBrains', icon: 'devicon-jetbrains-plain colored', color: '#ffdc78' },
  { name: 'VSCode', icon: 'devicon-vscode-plain colored', color: '#8bbae3' },

  { name: 'Bash', icon: 'devicon-bash-plain colored', color: '#696f74' },

  { name: 'ESLint', icon: 'devicon-eslint-original colored', color: '#7253ce' },

  { name: 'Git', icon: 'devicon-git-plain colored', color: '#ff8f6e' },
  { name: 'Github', icon: 'devicon-github-original colored', color: '#696f74' },

  { name: 'Github Actions', icon: 'devicon-github-original colored', color: '#696f74' },

  { name: 'Retool', icon: 'devicon-codepen-plain text-[#6875d9] ', color: '#8690E0' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', color: '#ff8e68' },
];

const BackendTools = [
  { name: 'Java', icon: 'devicon-java-plain colored', color: '#fd806f' },
  { name: 'Python', icon: 'devicon-python-plain colored', color: '#336d9c' },
  { name: 'C', icon: 'devicon-c-plain colored', color: '#4972ac' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored', color: '#c56876' },
  { name: 'OCaml', icon: 'devicon-ocaml-plain colored', color: '#ffaf67' },
  { name: 'Linux', icon: 'devicon-linux-plain text-[#f5bd0c]', color: '#000' },
];

function MySkills() {
  const [search, setSearch] = React.useState('');
  const [isEmpty, setIsEmpty] = React.useState(false);

  useEffect(() => {
    const isEmptyDiv = document.getElementById('checkEmptyDiv');
    if (isEmptyDiv) {
      if (isEmptyDiv.innerHTML === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
    }
  }, [search]);

  return (
    <div className="w-screen flex flex-col ">
      <Header textColor={MyColors.secondary} logoColor={MyColors.secondary} random />
      <div className="w-full bg-light flex flex-col pt-[10vh]">
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-[85%] sm:w-96 h-12 rounded border-[3px] border-dark text-dark text-xl text-center"
            placeholder="Search for a specific skill"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center" id="checkEmptyDiv">
          <Toolbox title="Web Tools" search={search} skills={WebSkills} />
          <Toolbox title="Mobile Tools" search={search} skills={MobileSkills} />
          <Toolbox title="Backend Tools" search={search} skills={BackendTools} />
          <Toolbox title="Other Tools" search={search} skills={OtherTools} />
        </div>
        {isEmpty && (
        <div className="flex flex-col items-center justify-center h-[20vh]">
          <h1 className="text-4xl text-dark font-bold">No skills found</h1>
        </div>
        )}
      </div>
      <Footer random />
    </div>
  );
}
export default MySkills;
