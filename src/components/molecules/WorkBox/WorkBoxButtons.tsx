import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import appStoreIcon from '../../../assets/appStoreIcon.svg';
import Button from '../../atoms/Button';

type WorkBoxButtonsProps = {
  link?: string;
  figma?: string;
  github?: string;
  appStore?: string[];
};

function WorkBoxButtons({
  link, figma, github, appStore,
}: WorkBoxButtonsProps) {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-row flex-wrap items-center gap-3 list-none">
      {link && (
        <li>
          <Button size="sm" href={link} newTab icon={ArrowUpRight}>
            {t('MyWork.viewProject')}
          </Button>
        </li>
      )}
      {figma && (
        <li>
          <Button
            size="sm"
            href={figma}
            newTab
            aria-label="Figma"
            iconOnly={<i className="devicon-figma-plain text-xl" aria-hidden />}
          />
        </li>
      )}
      {github && (
        <li>
          <Button
            size="sm"
            href={github}
            newTab
            aria-label="GitHub"
            iconOnly={<i className="devicon-github-plain text-xl" aria-hidden />}
          />
        </li>
      )}
      {appStore && appStore.map((appStoreLink) => (
        <li key={appStoreLink}>
          <Button
            size="sm"
            href={appStoreLink}
            newTab
            aria-label="App Store"
            iconOnly={<img src={appStoreIcon} alt="" className="h-6 w-6" />}
          />
        </li>
      ))}
    </ul>
  );
}

export default React.memo(WorkBoxButtons);
