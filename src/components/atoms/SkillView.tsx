import React from 'react';
import { SkillDetail } from '../../constants/skillData';
import SkillIcon from './SkillIcon';

type SkillProps = {
  skill: SkillDetail;
  sticker?: string;
};

function SkillView({ skill, sticker }: SkillProps) {
  return (
    <div className="relative flex h-32 flex-col items-center justify-center gap-3 rounded-lg pt-4 sm:h-36 border-3 border-ink bg-surface px-3 sm:h-32">
      {sticker && (
        <span className="absolute right-2 top-2 rounded bg-raised px-1.5 py-0.5 font-mono text-xs text-fg-muted">
          {sticker}
        </span>
      )}
      <SkillIcon icon={skill.icon} size={40} />
      <span className="text-center text-[15px] text-fg-secondary">{skill.name}</span>
    </div>
  );
}

export default React.memo(SkillView);
