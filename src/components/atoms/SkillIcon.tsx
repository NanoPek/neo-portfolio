import React from 'react';
import { SkillDetail } from '../../constants/skillData';

/** A devicon logo (in its own brand color), or a lucide icon in the muted text color. */
function SkillIcon({ icon, size }: { icon: SkillDetail['icon']; size: number }) {
  if (typeof icon === 'string') {
    return <i className={icon} style={{ fontSize: size }} aria-hidden />;
  }
  return React.createElement(icon, {
    size, strokeWidth: 1.5, className: 'text-fg-muted', 'aria-hidden': true,
  });
}

export default React.memo(SkillIcon);
