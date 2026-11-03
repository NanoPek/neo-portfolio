import React from 'react';
import { SkillDetail } from '../../constants/skillData';
import SkillIcon from './SkillIcon';

function TechChip({ skill }: { skill: SkillDetail }) {
  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-md bg-raised px-2.5 text-sm text-fg-secondary">
      <SkillIcon icon={skill.icon} size={16} />
      {skill.name}
    </span>
  );
}

export default React.memo(TechChip);
