import React from 'react';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedinIcon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitterIcon.svg';
import { ReactComponent as GithubIcon } from '../../assets/githubIcon.svg';

// eslint-disable-next-line react/require-default-props
function Icons(props: { colors?: string[] }) {
  const { colors } = props;
  return (
    <div className="flex flex-row justify-evenly h-[40px]">
      <a href="https://www.linkedin.com/in/jeremiecarrez/" target="_blank" rel="noreferrer" className="hover:animate-bounce">
        <LinkedinIcon className="fill-current text-accent" style={colors ? { color: colors[0] } : {}} />
      </a>
      <a href="https://twitter.com/NanoPekTo" target="_blank" rel="noreferrer" className="hover:animate-bounce">
        <TwitterIcon className="fill-current text-accent" style={colors ? { color: colors[1] } : {}} />
      </a>
      <a href="https://github.com/NanoPek" target="_blank" rel="noreferrer" className="hover:animate-bounce">
        <GithubIcon className="fill-current text-accent" style={colors ? { color: colors[2] } : {}} />
      </a>
    </div>
  );
}

export default Icons;
