import React from 'react';
import { SkillDetail } from '../../constants/skillData';
import SkillView from '../atoms/SkillView';

function Toolbox(props: {
  title: string;
  search: string;
  skills: SkillDetail[];
  sticker?: string;
}) {
  const {
    title, search, skills, sticker,
  } = props;
  const filteredSkills = search.length > 0
    ? skills.filter((skill) => skill.name.toLowerCase().includes(search.toLowerCase()))
    : skills;
  if (filteredSkills.length === 0) return null;
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-4xl font-bold text-center text-fg p-6">{title}</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch lg:grid-cols-3 xl:grid-cols-6">
        {filteredSkills.map(({ name, icon }) => (
          <SkillView name={name} icon={icon} key={name} sticker={sticker} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Toolbox);
