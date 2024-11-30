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
    <div className={`flex flex-col justify-center items-center w-full h-[${isSmall ? '10vh' : '15vh'}]`} style={{ backgroundColor: color }}>
      <i className={`${icon} text-[${isSmall ? '30px' : '60px'}]`} />
      <div className="text-center text-white text-xl ">
        {name}
      </div>
    </div>
  );
}

SkillView.defaultProps = {
  isSmall: false,
};

export default React.memo(SkillView);
