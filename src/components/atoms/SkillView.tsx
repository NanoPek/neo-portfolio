import React from 'react';

type SkillProps = {
  name: string;
  icon: string;
  isSmall?: boolean;
  sticker?: string;
};

function SkillView({
  name, icon, isSmall, sticker,
}: SkillProps) {
  return (
    <div
      className={`relative flex flex-col justify-center items-center w-full bg-surface ${isSmall ? 'h-[10vh]' : 'h-[15vh]'}`}
    >
      {sticker && (
        <span className="absolute top-1 right-1 sm:top-2 sm:right-2 rotate-6 rounded-full border-2 border-ink bg-paper px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-bold text-fg shadow-[3px_3px_0_0_rgba(25,11,40,0.8)]">
          {sticker}
        </span>
      )}
      <i className={`${icon} ${isSmall ? 'text-[30px]' : 'text-[60px]'}`} />
      {
        !isSmall && (
          <div className="text-center text-fg text-xl">
            {name}
          </div>
        )
      }
    </div>
  );
}

export default React.memo(SkillView);
