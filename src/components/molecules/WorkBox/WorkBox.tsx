import React, { useEffect } from 'react';
import { SkillDetail } from '../../../constants/skillData';
import { paletteColors } from '../../styles/colors';
import Width from '../../styles/width';
import WorkBoxHeader from './WorkBoxHeader';
import WorkBoxImage from './WorkBoxImage';
import WorkBoxDescription from './WorkBoxDescription';

const deviceWidth = window.innerWidth;

type WorkBoxProps = {
  image: string;
  title: string;
  description: string;
  techs: SkillDetail[];
  extension: string;
  link: string;
  color?: string;
  startDate: Date;
  // eslint-disable-next-line react/require-default-props
  endDate?: Date;
  figma?: string;
  github?: string;
  appStore?: string[];
};

function WorkBox({
  image, title, link, startDate, endDate, description,
  techs, extension, figma, github, color, appStore,
} : WorkBoxProps) {
  useEffect(() => {
    const divElm = document.getElementById(`workbox-div-${title}`);
    const imageElm = document.getElementById(`workbox-image-${title}`);
    const greyElm = document.getElementById(`workbox-grey-${title}`);
    const buttonElm = document.getElementById(`workbox-button-${title}`);
    const highlightColor = color || paletteColors.purple;

    if (divElm) {
      if (imageElm) {
        if (deviceWidth > Width.md) {
          divElm.addEventListener('mouseover', () => {
            if (imageElm) {
              imageElm.style.transform = 'scale(1.1)';
              imageElm.style.transition = 'transform 0.5s cubic-bezier(0.04, 0.3, 0.1, 1)';
              imageElm.style.filter = 'grayscale(0%)';
            }
            if (greyElm) {
              greyElm.style.backgroundColor = highlightColor;
            }
            if (buttonElm) {
              buttonElm.style.backgroundColor = highlightColor;
            }
            divElm.style.boxShadow = '16px 16px 1px 0 rgba(67,49,86,0.8)';
          });
        } else {
          if (imageElm) {
            imageElm.style.transform = 'scale(1.1)';
            imageElm.style.transition = 'transform 0.5s cubic-bezier(0.04, 0.3, 0.1, 1)';
            imageElm.style.filter = 'grayscale(0%)';
          }
          if (greyElm) {
            greyElm.style.backgroundColor = highlightColor;
          }
          if (buttonElm) {
            buttonElm.style.backgroundColor = highlightColor;
          }
        }
      }
    }
  }, []);

  return (
    <div
      className="w-full max-w-[400px] h-full flex flex-col bg-white border-[3px] border-dark shadow-[16px_16px_1px_0_rgba(25,11,40,0.8)]"
      id={`workbox-div-${title}`}
    >
      <WorkBoxHeader title={title} startDate={startDate} endDate={endDate} extension={extension} />
      <WorkBoxImage image={image} title={title} />
      <WorkBoxDescription
        title={title}
        description={description}
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
