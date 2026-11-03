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
        alt={title}
        className="h-auto object-contain  aspect-[600/375] bg-ink"
      />
    </div>
  );
}

export default React.memo(workBoxImage);
