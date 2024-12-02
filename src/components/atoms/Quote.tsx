import React from 'react';

function Quote({ text }: { text: string }) {
  return (
    <span className="md:w-60 xl:w-72 2xl:w-96 text-xs sm:text-base xl:text-2xl 2xl:text-3xl text-justify leading-5">
      {text}
    </span>
  );
}

export default React.memo(Quote);
