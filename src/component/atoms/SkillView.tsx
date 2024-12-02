import React from 'react';

type SkillProps = {
  name: string;
  icon: string;
  color: string;
  isSmall?: boolean;
};

function SkillView({
  name, icon, color, isSmall,
}: SkillProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full ${isSmall ? 'h-[10vh]' : 'h-[15vh]'}`}
      style={{ backgroundColor: color }}
    >
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

SkillView.defaultProps = {
  isSmall: false,
};

export default React.memo(SkillView);
