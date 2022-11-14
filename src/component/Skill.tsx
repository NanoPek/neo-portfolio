import React from 'react';

function Skill(props: { name: string, icon:string, color: string }) {
  const { name, icon, color } = props;
  return (
    <div className=" flex flex-col justify-center items-center w-full h-[15vh] " style={{ backgroundColor: color }}>
      <i className={`${icon} text-[60px]`} />
      <div className="text-center text-white text-xl ">
        {name}
      </div>
    </div>
  );
}

export default Skill;
