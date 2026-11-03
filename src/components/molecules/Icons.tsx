import React from 'react';
import LinkedinIcon from '../../assets/linkedinIcon.svg?react';
import GithubIcon from '../../assets/githubIcon.svg?react';
import BranchIcon from '../../assets/branchIcon.svg?react';
import LINKS from '../../constants/links';
import Icon from '../atoms/Icon';

function Icons() {
  return (
    <div className="flex flex-row justify-around h-[40px]">
      <Icon href={LINKS.LINKEDIN} icon={LinkedinIcon} />
      <Icon href={LINKS.GITHUB_PROFILE} icon={GithubIcon} />
      <Icon href={LINKS.GITHUB_PORTFOLIO} icon={BranchIcon} />
    </div>
  );
}

export default React.memo(Icons);
