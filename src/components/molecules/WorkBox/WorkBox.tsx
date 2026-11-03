import React from 'react';
import { SkillDetail } from '../../../constants/skillData';
import WorkBoxHeader from './WorkBoxHeader';
import WorkBoxImage from './WorkBoxImage';
import WorkBoxDescription from './WorkBoxDescription';

type WorkBoxProps = {
  image: string;
  title: string;
  description: string;
  techs: SkillDetail[];
  extension: string;
  link?: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  figma?: string;
  github?: string;
  appStore?: string[];
};

function WorkBox({
  image, title, link, location, startDate, endDate, description,
  techs, extension, figma, github, appStore,
} : WorkBoxProps) {
  return (
    <div className="w-full max-w-[400px] h-full flex flex-col bg-surface border-3 border-ink shadow-block">
      <WorkBoxHeader startDate={startDate} endDate={endDate} extension={extension} />
      <WorkBoxImage image={image} title={title} />
      <WorkBoxDescription
        title={title}
        description={description}
        location={location}
        techs={techs}
        link={link}
        figma={figma}
        github={github}
        appStore={appStore}
      />
    </div>
  );
}

export default React.memo(WorkBox);
