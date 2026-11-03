import React from 'react';
import LinkedinIcon from '../../assets/linkedinIcon.svg?react';
import GithubIcon from '../../assets/githubIcon.svg?react';
import BranchIcon from '../../assets/branchIcon.svg?react';
import LINKS from '../../constants/links';
import Icon from '../atoms/Icon';

type IconsProps = {
  colors?: string[];
};

function Icons({ colors }: IconsProps) {
  return (
    <div className="flex flex-row justify-around h-[40px]">
      <Icon href={LINKS.LINKEDIN} icon={LinkedinIcon} color={colors?.[0]} />
      <Icon href={LINKS.GITHUB_PROFILE} icon={GithubIcon} color={colors?.[2]} />
      <Icon href={LINKS.GITHUB_PORTFOLIO} icon={BranchIcon} color={colors?.[3]} />
    </div>
  );
}

export default React.memo(Icons);
