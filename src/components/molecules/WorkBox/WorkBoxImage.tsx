import React from 'react';

type WorkBoxImageProps = {
  title: string;
  image: string;
};

function workBoxImage({ title, image }: WorkBoxImageProps) {
  return (
    <div className="overflow-hidden">
      <img
        src={image}
        alt="work"
        className="h-auto object-contain  aspect-[600/375] bg-dark grayscale transition-all duration-500"
        id={`workbox-image-${title}`}
      />
    </div>
  );
}

export default React.memo(workBoxImage);
