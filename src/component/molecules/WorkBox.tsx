import React, { useEffect } from 'react';

function WorkBox(props: { image: string; title: string; link: string; }) {
  const { image, title, link } = props;

  function removeHttp(url : string) {
    return url.replace(/^https?:\/\//, '');
  }

  useEffect(() => {
    const box = document.getElementById(`workbox-${title}`);
    const imageElm = document.getElementById(`workbox-image-${title}`);

    if (box) {
      box.addEventListener('mouseover', () => {
        if (imageElm) {
          imageElm.style.transform = 'scale(1.1)';
          imageElm.style.transition = 'transform 0.5s cubic-bezier(0.04, 0.3, 0.1, 1)';
        }
      });
      box.addEventListener('mouseout', () => {
        if (imageElm) {
          imageElm.style.transform = 'scale(1)';
        }
      });
    }
  }, []);

  return (
    <a
      href={link}
      className="bg-white border-[3px] border-dark shadow-[16px_16px_1px_0_rgba(25,11,40,0.8)]
        w-full flex flex-col max-w-[400px] hover:animate-pulse"
      id={`workbox-${title}`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt="work"
          className="h-1/2 object-contain 2xl:h-auto 2xl:aspect-[600/375] 2xl:bg-dark transition-all"
          id={`workbox-image-${title}`}
        />
      </div>
      <div className="text-primary text-2xl p-4 w-full ">
        <div className="text-dark font-bold ">
          {title}
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="text-link underline">
          {removeHttp(link)}
        </a>
      </div>
    </a>
  );
}

export default WorkBox;
