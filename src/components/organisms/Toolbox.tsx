import React from 'react';
import { SkillDetail } from '../../constants/skillData';
import SkillView from '../atoms/SkillView';

type ToolboxProps = {
  title: string;
  skills: SkillDetail[];
  sticker?: string;
};

function Toolbox({ title, skills, sticker }: ToolboxProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-row items-baseline gap-3">
        <h2 className="text-2xl font-medium">{title}</h2>
        <span className="font-mono text-sm text-fg-muted tabular-nums">{skills.length}</span>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => (
          <li key={skill.name}><SkillView skill={skill} sticker={sticker} /></li>
        ))}
      </ul>
    </section>
  );
}

export default React.memo(Toolbox);
