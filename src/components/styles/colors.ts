import { SkillsDetails } from '../../constants/skillData';

const paletteColors = {
  primary: '#004E89',
  secondary: '#FCD757',
  accent: '#FC5656',
  light: '#F5F4FC',
  link: '#0D2996',
  dark: '#190B28',
  grey: '#C8C8C8',
  purple: '#ab7edb',
};

const skillsColors = Object.values(SkillsDetails).map((skill) => skill.color);

export { paletteColors, skillsColors };
