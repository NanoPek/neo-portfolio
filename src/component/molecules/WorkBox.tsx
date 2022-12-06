import React from 'react';

function WorkBox(props: { image: string; title: string; link: string; }) {
  const { image, title, link } = props;

  function removeHttp(url : string) {
    return url.replace(/^https?:\/\//, '');
  }
  return (
    <div className="bg-white border-[3px] border-dark shadow-[16px_16px_1px_0_rgba(25,11,40,0.8)] w-full flex flex-col max-w-[400px]">
      <img src={image} alt="work" className="h-1/2 sm:h-auto sm:aspect-[600/375] sm:object-contain sm:bg-dark" />
      <div className="text-primary text-2xl p-4 w-full ">
        <div className="text-dark font-bold ">
          {title}
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="text-link underline">
          {removeHttp(link)}
        </a>
      </div>
    </div>
  );
}

export default WorkBox;
