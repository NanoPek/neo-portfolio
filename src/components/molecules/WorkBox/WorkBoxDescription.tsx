import React from 'react';
import SkillView from '../../atoms/SkillView';
import { SkillDetail } from '../../../constants/skillData';
import WorkBoxButtons from './WorkBoxButtons';

type WorkBoxDescriptionProps = {
  title: string;
  description: string;
  techs: SkillDetail[];
  link: string;
  figma?: string;
  github?: string;
  appStore?: string[];
};

function WorkBoxDescription({
  title, description, techs, link, figma, github, appStore,
}: WorkBoxDescriptionProps) {
  return (
    <div className="w-full flex flex-col justify-between gap-4 p-4 text-primary text-2xl border-dark border-t-[3px]">
      <span className="text-dark font-bold ">
        {title}
      </span>
      <div className="flex flex-row gap-2">
        {techs.map((tech) => (
          <SkillView
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
            key={tech.icon}
            isSmall
          />
        ))}
      </div>
      <span className="flex text-dark text-sm" style={{ whiteSpace: 'pre-line' }}>
        {description}
      </span>
      <WorkBoxButtons
        title={title}
        link={link}
        figma={figma}
        github={github}
        appStore={appStore}
      />
    </div>
  );
}

export default React.memo(WorkBoxDescription);
