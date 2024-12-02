enum SkillCategory {
  mobileTools = 'Mobile Tools',
  webTools = 'Web Tools',
  backendTools = 'Backend Tools',
  otherTools = 'Other Tools',
}

interface SkillDetail {
  name: Skill;
  category: SkillCategory;
  icon: string;
  color: string;
}

enum Skill {
  HTML = 'HTML',
  CSS = 'CSS',
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  NodeJS = 'Node.js',
  ReactJS = 'React.js',
  VueJS = 'VueJS',
  NuxtJS = 'NuxtJS',
  SASS_SCSS = 'SASS & SCSS',
  TailwindCSS = 'TailwindCSS',
  Swift = 'Swift',
  KMP = 'KMP',
  Xcode = 'Xcode',
  ReactNative = 'React Native',
  Firebase = 'Firebase',
  Apple = 'Apple',
  Android = 'Android',
  JetBrains = 'JetBrains',
  VSCode = 'VSCode',
  Bash = 'Bash',
  ESLint = 'ESLint',
  Git = 'Git',
  Github = 'Github',
  GithubActions = 'Github Actions',
  Retool = 'Retool',
  Figma = 'Figma',
  Java = 'Java',
  Python = 'Python',
  C = 'C',
  CPlusPlus = 'C++',
  OCaml = 'OCaml',
  Linux = 'Linux',
}

const SkillsDetails: Record<Skill, SkillDetail> = {
  // Web Skills
  [Skill.HTML]: {
    name: Skill.HTML, category: SkillCategory.webTools, icon: 'devicon-html5-plain colored', color: '#f98c6b',
  },
  [Skill.CSS]: {
    name: Skill.CSS, category: SkillCategory.webTools, icon: 'devicon-css3-plain colored', color: '#67a1d0',
  },
  [Skill.JavaScript]: {
    name: Skill.JavaScript, category: SkillCategory.webTools, icon: 'devicon-javascript-plain colored', color: '#007acc',
  },
  [Skill.TypeScript]: {
    name: Skill.TypeScript, category: SkillCategory.webTools, icon: 'devicon-typescript-plain colored', color: '#f0db4f',
  },
  [Skill.NodeJS]: {
    name: Skill.NodeJS, category: SkillCategory.webTools, icon: 'devicon-nodejs-plain colored', color: '#bcdc77',
  },
  [Skill.ReactJS]: {
    name: Skill.ReactJS, category: SkillCategory.webTools, icon: 'devicon-react-original colored', color: '#a1e7fc',
  },
  [Skill.VueJS]: {
    name: Skill.VueJS, category: SkillCategory.webTools, icon: 'devicon-vuejs-plain colored', color: '#89d0ab',
  },
  [Skill.NuxtJS]: {
    name: Skill.NuxtJS, category: SkillCategory.webTools, icon: 'devicon-nuxtjs-plain colored', color: '#7ed9b2',
  },
  [Skill.SASS_SCSS]: {
    name: Skill.SASS_SCSS, category: SkillCategory.webTools, icon: 'devicon-sass-original colored', color: '#d680a9',
  },
  [Skill.TailwindCSS]: {
    name: Skill.TailwindCSS, category: SkillCategory.webTools, icon: 'devicon-tailwindcss-original-wordmark colored', color: '#85bcd1',
  },

  // Mobile Skills
  [Skill.Swift]: {
    name: Skill.Swift, category: SkillCategory.mobileTools, icon: 'devicon-swift-plain colored', color: '#f58f7e',
  },
  [Skill.Xcode]: {
    name: Skill.Xcode, category: SkillCategory.mobileTools, icon: 'devicon-xcode-plain colored', color: '#85bcf3',
  },
  [Skill.ReactNative]: {
    name: Skill.ReactNative, category: SkillCategory.mobileTools, icon: 'devicon-react-original colored', color: '#a1e7fc',
  },
  [Skill.Firebase]: {
    name: Skill.Firebase, category: SkillCategory.mobileTools, icon: 'devicon-firebase-plain colored', color: '#ffd616',
  },
  [Skill.Apple]: {
    name: Skill.Apple, category: SkillCategory.mobileTools, icon: 'devicon-apple-original text-white', color: '#A2AAAD',
  },
  [Skill.Android]: {
    name: Skill.Android, category: SkillCategory.mobileTools, icon: 'devicon-android-plain colored', color: '#8cac1d',
  },
  [Skill.KMP]: {
    name: Skill.KMP, category: SkillCategory.mobileTools, icon: 'devicon-kotlin-plain text-white', color: '#7253ce',
  },

  // Other Tools
  [Skill.JetBrains]: {
    name: Skill.JetBrains, category: SkillCategory.otherTools, icon: 'devicon-jetbrains-plain colored', color: '#ffdc78',
  },
  [Skill.VSCode]: {
    name: Skill.VSCode, category: SkillCategory.otherTools, icon: 'devicon-vscode-plain colored', color: '#8bbae3',
  },
  [Skill.Bash]: {
    name: Skill.Bash, category: SkillCategory.otherTools, icon: 'devicon-bash-plain colored', color: '#696f74',
  },
  [Skill.ESLint]: {
    name: Skill.ESLint, category: SkillCategory.otherTools, icon: 'devicon-eslint-original colored', color: '#7253ce',
  },
  [Skill.Git]: {
    name: Skill.Git, category: SkillCategory.otherTools, icon: 'devicon-git-plain colored', color: '#ff8f6e',
  },
  [Skill.Github]: {
    name: Skill.Github, category: SkillCategory.otherTools, icon: 'devicon-github-original colored', color: '#696f74',
  },
  [Skill.GithubActions]: {
    name: Skill.GithubActions, category: SkillCategory.otherTools, icon: 'devicon-github-original colored', color: '#696f74',
  },
  [Skill.Retool]: {
    name: Skill.Retool, category: SkillCategory.otherTools, icon: 'devicon-codepen-plain text-[#6875d9]', color: '#8690E0',
  },
  [Skill.Figma]: {
    name: Skill.Figma, category: SkillCategory.otherTools, icon: 'devicon-figma-plain colored', color: '#ff8e68',
  },

  // Backend Tools
  [Skill.Java]: {
    name: Skill.Java, category: SkillCategory.backendTools, icon: 'devicon-java-plain colored', color: '#fd806f',
  },
  [Skill.Python]: {
    name: Skill.Python, category: SkillCategory.backendTools, icon: 'devicon-python-plain colored', color: '#336d9c',
  },
  [Skill.C]: {
    name: Skill.C, category: SkillCategory.backendTools, icon: 'devicon-c-plain colored', color: '#4972ac',
  },
  [Skill.CPlusPlus]: {
    name: Skill.CPlusPlus, category: SkillCategory.backendTools, icon: 'devicon-cplusplus-plain colored', color: '#c56876',
  },
  [Skill.OCaml]: {
    name: Skill.OCaml, category: SkillCategory.backendTools, icon: 'devicon-ocaml-plain colored', color: '#ffaf67',
  },
  [Skill.Linux]: {
    name: Skill.Linux, category: SkillCategory.backendTools, icon: 'devicon-linux-plain text-[#f5bd0c]', color: '#000',
  },
};

export {
  Skill, SkillsDetails, SkillCategory,
};

export type { SkillDetail };
