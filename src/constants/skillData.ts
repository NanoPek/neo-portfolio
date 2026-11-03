enum SkillCategory {
  mobileTools = 'Mobile Tools',
  webTools = 'Web Tools',
  backendTools = 'Backend Tools',
  otherTools = 'Other Tools',
}

import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';

interface SkillDetail {
  name: Skill;
  category: SkillCategory;
  /** devicon class, or a lucide icon for tools devicon does not cover */
  icon: string | LucideIcon;
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
    name: Skill.HTML, category: SkillCategory.webTools, icon: 'devicon-html5-plain colored',
  },
  [Skill.CSS]: {
    name: Skill.CSS, category: SkillCategory.webTools, icon: 'devicon-css3-plain colored',
  },
  [Skill.JavaScript]: {
    name: Skill.JavaScript, category: SkillCategory.webTools, icon: 'devicon-javascript-plain colored',
  },
  [Skill.TypeScript]: {
    name: Skill.TypeScript, category: SkillCategory.webTools, icon: 'devicon-typescript-plain colored',
  },
  [Skill.NodeJS]: {
    name: Skill.NodeJS, category: SkillCategory.webTools, icon: 'devicon-nodejs-plain colored',
  },
  [Skill.ReactJS]: {
    name: Skill.ReactJS, category: SkillCategory.webTools, icon: 'devicon-react-original colored',
  },
  [Skill.VueJS]: {
    name: Skill.VueJS, category: SkillCategory.webTools, icon: 'devicon-vuejs-plain colored',
  },
  [Skill.NuxtJS]: {
    name: Skill.NuxtJS, category: SkillCategory.webTools, icon: 'devicon-nuxtjs-plain colored',
  },
  [Skill.SASS_SCSS]: {
    name: Skill.SASS_SCSS, category: SkillCategory.webTools, icon: 'devicon-sass-original colored',
  },
  [Skill.TailwindCSS]: {
    name: Skill.TailwindCSS, category: SkillCategory.webTools, icon: 'devicon-tailwindcss-original colored',
  },

  // Mobile Skills
  [Skill.Swift]: {
    name: Skill.Swift, category: SkillCategory.mobileTools, icon: 'devicon-swift-plain colored',
  },
  [Skill.Xcode]: {
    name: Skill.Xcode, category: SkillCategory.mobileTools, icon: 'devicon-xcode-plain colored',
  },
  [Skill.ReactNative]: {
    name: Skill.ReactNative, category: SkillCategory.mobileTools, icon: 'devicon-react-original colored',
  },
  [Skill.Firebase]: {
    name: Skill.Firebase, category: SkillCategory.mobileTools, icon: 'devicon-firebase-plain colored',
  },
  [Skill.Apple]: {
    name: Skill.Apple, category: SkillCategory.mobileTools, icon: 'devicon-apple-original colored',
  },
  [Skill.Android]: {
    name: Skill.Android, category: SkillCategory.mobileTools, icon: 'devicon-android-plain colored',
  },
  [Skill.KMP]: {
    name: Skill.KMP, category: SkillCategory.mobileTools, icon: 'devicon-kotlin-plain colored',
  },

  // Other Tools
  [Skill.JetBrains]: {
    name: Skill.JetBrains, category: SkillCategory.otherTools, icon: 'devicon-jetbrains-plain colored',
  },
  [Skill.VSCode]: {
    name: Skill.VSCode, category: SkillCategory.otherTools, icon: 'devicon-vscode-plain colored',
  },
  [Skill.Bash]: {
    name: Skill.Bash, category: SkillCategory.otherTools, icon: 'devicon-bash-plain colored',
  },
  [Skill.ESLint]: {
    name: Skill.ESLint, category: SkillCategory.otherTools, icon: 'devicon-eslint-plain colored',
  },
  [Skill.Git]: {
    name: Skill.Git, category: SkillCategory.otherTools, icon: 'devicon-git-plain colored',
  },
  [Skill.Github]: {
    name: Skill.Github, category: SkillCategory.otherTools, icon: 'devicon-github-original colored',
  },
  [Skill.GithubActions]: {
    name: Skill.GithubActions, category: SkillCategory.otherTools, icon: 'devicon-githubactions-plain colored',
  },
  [Skill.Retool]: {
    name: Skill.Retool, category: SkillCategory.otherTools, icon: LayoutDashboard,
  },
  [Skill.Figma]: {
    name: Skill.Figma, category: SkillCategory.otherTools, icon: 'devicon-figma-plain colored',
  },

  // Backend Tools
  [Skill.Java]: {
    name: Skill.Java, category: SkillCategory.backendTools, icon: 'devicon-java-plain colored',
  },
  [Skill.Python]: {
    name: Skill.Python, category: SkillCategory.backendTools, icon: 'devicon-python-plain colored',
  },
  [Skill.C]: {
    name: Skill.C, category: SkillCategory.backendTools, icon: 'devicon-c-plain colored',
  },
  [Skill.CPlusPlus]: {
    name: Skill.CPlusPlus, category: SkillCategory.backendTools, icon: 'devicon-cplusplus-plain colored',
  },
  [Skill.OCaml]: {
    name: Skill.OCaml, category: SkillCategory.backendTools, icon: 'devicon-ocaml-plain colored',
  },
  [Skill.Linux]: {
    name: Skill.Linux, category: SkillCategory.backendTools, icon: 'devicon-linux-plain colored',
  },
};

export {
  Skill, SkillsDetails, SkillCategory,
};

export type { SkillDetail };
