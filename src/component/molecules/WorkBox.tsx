import React, { useEffect } from 'react';
import MyColors from '../atoms/MyColors';

import appStoreIcon from '../../assets/appStoreIcon.svg';

const deviceWidth = window.innerWidth;
function WorkBox(props: {
  image: string;
  title: string;
  description: string;
  link: string;
  // eslint-disable-next-line react/require-default-props
  color?: string;
  // eslint-disable-next-line react/require-default-props
  date?: Date;
  // eslint-disable-next-line react/require-default-props
  figma?: string;
  // eslint-disable-next-line react/require-default-props
  github?: string;
  // eslint-disable-next-line react/require-default-props
  appStore?: string;
}) {
  const {
    image, title, link, date, description, figma, github, color, appStore,
  } = props;

  useEffect(() => {
    const divElm = document.getElementById(`workbox-div-${title}`);
    const imageElm = document.getElementById(`workbox-image-${title}`);
    const greyElm = document.getElementById(`workbox-grey-${title}`);
    const buttonElm = document.getElementById(`workbox-button-${title}`);
    const highlightColor = color || MyColors.purple;

    if (divElm) {
      if (imageElm) {
        if (deviceWidth > 768) {
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

  const dateFormatter = (dateToFormat: Date) => {
    // Format a date to a string, format ex : 2022-04-08-project.html
    const year = dateToFormat.getFullYear();
    const month = dateToFormat.getMonth() + 1;
    const day = dateToFormat.getDate();
    return `${year}-${month}-${day}-project.html`;
  };

  return (
    <div
      className="bg-white border-[3px] border-dark shadow-[16px_16px_1px_0_rgba(25,11,40,0.8)]
        w-full flex flex-col max-w-[400px] h-full"
      id={`workbox-div-${title}`}
    >
      <div
        className="w-full h-12 bg-grey border-dark border-b-[3px] flex flex-row items-center justify-between px-4 hover:bg-purple"
        id={`workbox-grey-${title}`}
      >
        <div className="flex flex-row items-center w-11 justify-between">
          <div className="w-[18px] h-[18px] rounded-2xl bg-white border-dark border-[3px]" />
          <div className="w-[18px] h-[18px] rounded-2xl bg-white border-dark border-[3px]" />
        </div>
        <span className="text-dark text-md font-semibold">
          {date ? dateFormatter(date) : 'my-project.html'}
        </span>
        <div />
      </div>
      <div className="overflow-hidden ">
        <img
          src={image}
          alt="work"
          className=" object-contain h-auto aspect-[600/375] bg-dark transition-all grayscale transition-all duration-500 "
          id={`workbox-image-${title}`}
        />
      </div>
      <div className="flex-1 text-primary text-2xl p-4 w-full border-dark border-t-[3px] flex flex-col gap-4  justify-between ">
        <div className="text-dark font-bold ">
          {title}
        </div>
        <div className="text-dark text-sm flex-1" style={{ whiteSpace: 'pre-line' }}>
          {description}
        </div>
        <div className="flex flex-row h-12 items-center">
          <a
            className="bg-grey h-full border-dark border-[3px] flex items-center justify-center w-32 text-dark hover:bg-black hover:text-white"
            id={`workbox-button-${title}`}
            type="button"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <span className=" text-base font-semibold">View project</span>
          </a>
          {figma && (
          <a href={figma} className="h-full px-4 flex items-center " target="_blank" rel="noreferrer" aria-label="Open Figma in a new tab">
            <i className="devicon-figma-plain text-[30px] text-dark" />
          </a>
          )}
          {github && (
          <a href={github} className="h-full px-4 flex items-center" target="_blank" rel="noreferrer" aria-label="Open Github in a new tab">
            <i className="devicon-github-plain text-[30px] text-dark" />
          </a>
          )}
          {appStore && (
          <a href={appStore} className="h-full px-4 flex items-center" target="_blank" rel="noreferrer">
            <img
              src={appStoreIcon}
              alt="App Store Icon"
              className="w-[35px] h-[35px]"
            />
          </a>
          )}
        </div>
        <div />
      </div>
    </div>
  );
}

export default WorkBox;
