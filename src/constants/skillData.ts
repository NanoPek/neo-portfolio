enum SkillCategory {
  mobileTools = 'Mobile Tools',
  webTools = 'Web Tools',
  otherTools = 'Other Tools',
}

import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';

interface SkillDetail {
  name: Skill;
  /** Section on the Skills page; skills without one only show as tech chips on work cards */
  category?: SkillCategory;
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
  Bash = 'Bash',
  Git = 'Git',
  Github = 'Github',
  GithubActions = 'Github Actions',
  Retool = 'Retool',
  Figma = 'Figma',
  Python = 'Python',
  OCaml = 'OCaml',
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
  [Skill.KMP]: {
    name: Skill.KMP, category: SkillCategory.mobileTools, icon: 'devicon-kotlin-plain colored',
  },
  [Skill.Swift]: {
    name: Skill.Swift, category: SkillCategory.mobileTools, icon: 'devicon-swift-plain colored',
  },
  [Skill.Xcode]: {
    name: Skill.Xcode, category: SkillCategory.mobileTools, icon: 'devicon-xcode-plain colored',
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
  [Skill.ReactNative]: {
    name: Skill.ReactNative, category: SkillCategory.mobileTools, icon: 'devicon-react-original colored',
  },

  // Other Tools
  [Skill.Bash]: {
    name: Skill.Bash, category: SkillCategory.otherTools, icon: 'devicon-bash-plain colored',
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
  [Skill.Figma]: {
    name: Skill.Figma, category: SkillCategory.otherTools, icon: 'devicon-figma-plain colored',
  },
  [Skill.OCaml]: {
    name: Skill.OCaml, category: SkillCategory.otherTools, icon: 'devicon-ocaml-plain colored',
  },

  // Only used as tech chips on work cards
  [Skill.Retool]: {
    name: Skill.Retool, icon: LayoutDashboard,
  },
  [Skill.Python]: {
    name: Skill.Python, icon: 'devicon-python-plain colored',
  },
};

export {
  Skill, SkillsDetails, SkillCategory,
};

export type { SkillDetail };
