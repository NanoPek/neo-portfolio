import React from 'react';
import Skill from '../atoms/Skill';

function Toolbox() {
  return (
    <div className="w-full flex flex-col ">
      <h2 className="text-4xl font-bold text-center text-dark p-6">Backend Tools</h2>
      <div className="grid grid-cols-2 w-screen place-items-stretch lg:grid-cols-3 xl:grid-cols-6">

        <Skill name="Java" icon="devicon-java-plain colored" color="#fd806f" />
        <Skill name="Python" icon="devicon-python-plain colored" color="#336d9c" />

        <Skill name="C" icon="devicon-c-plain colored" color="#4972ac " />
        <Skill name="C++" icon="devicon-cplusplus-plain colored" color="#c56876" />

        <Skill name="OCaml" icon="devicon-ocaml-plain colored" color="#ffaf67" />
        <Skill name="Linux" icon="devicon-linux-plain text-[#f5bd0c] " color="#000" />

      </div>
    </div>
  );
}

export default React.memo(Toolbox);
