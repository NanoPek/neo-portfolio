import React from 'react';
import { SkillDetail } from '../../../constants/skillData';
import Window from '../Window';
import useWorkFileName from './useWorkFileName';
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
  const fileName = useWorkFileName(startDate, endDate, extension);

  return (
    <article className="h-full min-w-0">
      <Window title={fileName} className="h-full">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full border-b-3 border-ink bg-ink object-contain"
        />
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
      </Window>
    </article>
  );
}

export default React.memo(WorkBox);
