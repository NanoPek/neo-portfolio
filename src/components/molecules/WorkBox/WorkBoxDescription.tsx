import React from 'react';
import SkillView from '../../atoms/SkillView';
import { SkillDetail } from '../../../constants/skillData';
import WorkBoxButtons from './WorkBoxButtons';

type WorkBoxDescriptionProps = {
  title: string;
  description: string;
  location?: string;
  techs: SkillDetail[];
  link?: string;
  figma?: string;
  github?: string;
  appStore?: string[];
};

function WorkBoxDescription({
  title, description, location, techs, link, figma, github, appStore,
}: WorkBoxDescriptionProps) {
  return (
    <div className="w-full flex flex-col justify-between gap-4 p-4 text-2xl border-ink border-t-3">
      <div className="flex flex-col items-start gap-2">
        <span className="text-fg font-bold ">
          {title}
        </span>
        {location && (
          <span className="rounded-full border-2 border-ink bg-paper px-3 py-0.5 text-sm font-semibold text-fg">
            📍
            {' '}
            {location}
          </span>
        )}
      </div>
      <div className="flex flex-row gap-2">
        {techs.map((tech) => (
          <SkillView
            name={tech.name}
            icon={tech.icon}
            key={tech.name}
            isSmall
          />
        ))}
      </div>
      <span className="flex text-fg text-sm" style={{ whiteSpace: 'pre-line' }}>
        {description}
      </span>
      <WorkBoxButtons
        link={link}
        figma={figma}
        github={github}
        appStore={appStore}
      />
    </div>
  );
}

export default React.memo(WorkBoxDescription);
