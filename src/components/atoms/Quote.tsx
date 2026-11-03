import React from 'react';

function Quote({ label, text }: { label: string; text: string }) {
  return (
    <p className="flex flex-col gap-1 md:w-60 xl:w-72 2xl:w-96 text-sm sm:text-base xl:text-2xl">
      <span className="font-mono text-xs sm:text-sm text-on-accent-secondary">{label}</span>
      {text}
    </p>
  );
}

export default React.memo(Quote);
