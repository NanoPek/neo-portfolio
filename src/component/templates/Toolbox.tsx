import React from 'react';
import { SkillDetail } from '../atoms/Skills';
import SkillView from '../atoms/SkillView';

function Toolbox(props: {
  title: string;
  search: string;
  skills: SkillDetail[];
}) {
  const { title, search, skills } = props;
  const filteredSkills = search.length > 0
    ? skills.filter((skill) => skill.name.toLowerCase().includes(search.toLowerCase()))
    : skills;
  if (filteredSkills.length === 0) return null;
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-4xl font-bold text-center text-dark p-6">{title}</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch lg:grid-cols-3 xl:grid-cols-6">
        {filteredSkills.map(({ name, icon, color }) => (
          <SkillView name={name} icon={icon} color={color} key={icon} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Toolbox);
