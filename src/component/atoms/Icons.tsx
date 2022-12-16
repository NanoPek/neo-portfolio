import React from 'react';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedinIcon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitterIcon.svg';
import { ReactComponent as GithubIcon } from '../../assets/githubIcon.svg';
import { ReactComponent as BranchIcon } from '../../assets/branchIcon.svg';

// eslint-disable-next-line react/require-default-props
function Icons(props: { colors?: string[] }) {
  const { colors } = props;
  return (
    <div className="flex flex-row justify-evenly h-[40px]">
      <a href="https://www.linkedin.com/in/jeremiecarrez/" target="_blank" rel="noreferrer" className="hover:animate-pulse hover:scale-[1.2] transition-all">
        <LinkedinIcon className="fill-current text-accent" style={colors ? { color: colors[0] } : {}} />
      </a>
      <a href="https://twitter.com/NanoPekTo" target="_blank" rel="noreferrer" className="hover:animate-pulse hover:scale-[1.2] transition-all">
        <TwitterIcon className="fill-current text-accent" style={colors ? { color: colors[1] } : {}} />
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

export default Icons;
