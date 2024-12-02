import React from 'react';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedinIcon.svg';
import { ReactComponent as GithubIcon } from '../../assets/githubIcon.svg';
import { ReactComponent as BranchIcon } from '../../assets/branchIcon.svg';

type IconsProps = {
  colors?: string[];
};

function Icons({ colors }: IconsProps) {
  return (
    <div className="flex flex-row justify-around h-[40px]">
      <a href="https://www.linkedin.com/in/jecarrez/" target="_blank" rel="noreferrer" className="hover:animate-pulse hover:scale-[1.2] transition-all">
        <LinkedinIcon className="fill-current text-accent" style={colors ? { color: colors[0] } : {}} />
      </a>
      <a href="https://github.com/NanoPek" target="_blank" rel="noreferrer" className="hover:animate-pulse hover:scale-[1.2] transition-all">
        <GithubIcon className="fill-current text-accent" style={colors ? { color: colors[2] } : {}} />
      </a>
      <a href="https://github.com/NanoPek/neo-portfolio" target="_blank" rel="noreferrer" className="hover:animate-pulse hover:scale-[1.2] transition-all">
        <BranchIcon className="fill-current text-accent" style={colors ? { color: colors[3] } : {}} />
      </a>
    </div>
  );
}

export default React.memo(Icons);
