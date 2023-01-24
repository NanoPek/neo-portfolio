import React, { useEffect } from 'react';

function WorkBox(props: {
  // eslint-disable-next-line react/require-default-props
  image: string; title: string; description: string; link: string; date?: Date; figma?: string; }) {
  const {
    image, title, link, date, description, figma,
  } = props;

  // function removeHttp(url : string) {
  //   return url.replace(/^https?:\/\//, '');
  // }

  useEffect(() => {
    const imageElm = document.getElementById(`workbox-image-${title}`);

    if (imageElm) {
      imageElm.addEventListener('mouseover', () => {
        if (imageElm) {
          imageElm.style.transform = 'scale(1.1)';
          imageElm.style.transition = 'transform 0.5s cubic-bezier(0.04, 0.3, 0.1, 1)';
        }
      });
      imageElm.addEventListener('mouseout', () => {
        if (imageElm) {
          imageElm.style.transform = 'scale(1)';
        }
      });
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
    >
      <div className="w-full h-12 bg-grey border-dark border-b-[3px] flex flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center w-11 justify-between">
          <div className="w-[18px] h-[18px] rounded-2xl bg-white border-dark border-[3px]" />
          <div className="w-[18px] h-[18px] rounded-2xl bg-white border-dark border-[3px]" />
        </div>
        <span className="text-dark text-md font-semibold">
          {date ? dateFormatter(date) : 'my-project.html'}
        </span>
        <div />
      </div>
      <a href={link} className="overflow-hidden ">
        <img
          src={image}
          alt="work"
          className=" object-contain h-auto aspect-[600/375] bg-dark transition-all grayscale hover:grayscale-0 transition-all duration-500 "
          id={`workbox-image-${title}`}
        />
      </a>
      <div className="flex-1 text-primary text-2xl p-4 w-full border-dark border-t-[3px] flex flex-col gap-4  justify-between ">
        <div className="text-dark font-bold ">
          {title}
        </div>
        <div className="text-dark text-sm flex-1">
          {description}
        </div>
        <div className="flex flex-row h-12 items-center">
          <a className="bg-grey h-full border-dark border-[3px] flex items-center justify-center w-32 text-dark hover:bg-black hover:text-white" type="button" href={link}>
            <span className=" text-base font-semibold">View project</span>
          </a>
          {figma && (
          <a href={figma} className="h-full px-4 flex items-center">
            <i className="devicon-figma-plain text-[30px] text-dark" />
          </a>
          )}
        </div>
        <div />
      </div>
    </div>
  );
}

export default WorkBox;
