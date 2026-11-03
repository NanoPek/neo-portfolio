import React from 'react';
import { MapPin } from 'lucide-react';
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
          <span className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-raised px-2.5 py-1 text-sm font-medium text-fg">
            <MapPin size={16} strokeWidth={1.5} aria-hidden />
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
