import React from 'react';
import LinkedinIcon from '../../assets/linkedinIcon.svg?react';
import GithubIcon from '../../assets/githubIcon.svg?react';
import BranchIcon from '../../assets/branchIcon.svg?react';
import LINKS from '../../constants/links';
import Icon from '../atoms/Icon';

function Icons({ className }: { className?: string }) {
  return (
    <div className={`-ml-2 flex flex-row gap-2 ${className ?? ''}`}>
      <Icon href={LINKS.LINKEDIN} label="LinkedIn" icon={LinkedinIcon} />
      <Icon href={LINKS.GITHUB_PROFILE} label="GitHub" icon={GithubIcon} />
      <Icon href={LINKS.GITHUB_PORTFOLIO} label="Source code" icon={BranchIcon} />
    </div>
  );
}

export default React.memo(Icons);
