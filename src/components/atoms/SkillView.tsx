import React from 'react';

type SkillProps = {
  name: string;
  icon: string;
  color: string;
  isSmall?: boolean;
  sticker?: string;
};

function SkillView({
  name, icon, color, isSmall, sticker,
}: SkillProps) {
  return (
    <div
      className={`relative flex flex-col justify-center items-center w-full ${isSmall ? 'h-[10vh]' : 'h-[15vh]'}`}
      style={{ backgroundColor: color }}
    >
      {sticker && (
        <span className="absolute top-1 right-1 sm:top-2 sm:right-2 rotate-6 rounded-full border-2 border-dark bg-light px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-bold text-dark shadow-[3px_3px_0_0_rgba(25,11,40,0.8)]">
          {sticker}
        </span>
      )}
      <i className={`${icon} ${isSmall ? 'text-[30px]' : 'text-[60px]'}`} />
      {
        !isSmall && (
          <div className="text-center text-white text-xl ">
            {name}
          </div>
        )
      }
    </div>
  );
}

export default React.memo(SkillView);
