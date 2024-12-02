import React from 'react';
import { useTranslation } from 'react-i18next';
import appStoreIcon from '../../../assets/appStoreIcon.svg';
import IconButton from '../../atoms/IconButton';

type WorkBoxButtonsProps = {
  title: string;
  link: string;
  figma?: string;
  github?: string;
  appStore?: string[];
};

function WorkBoxButtons({
  title, link, figma, github, appStore,
}: WorkBoxButtonsProps) {
  const { t } = useTranslation();

  return (
    <ul className="h-12 flex flex-row items-center gap-3 list-none">
      <li
        className="h-full"
      >
        <IconButton
          id={`workbox-button-${title}`}
          href={link}
          label={t('MyWork.viewProject')}
          className="h-full w-32 bg-grey border-dark border-[3px] text-dark hover:bg-black hover:text-white"
        />
      </li>
      {figma && (
        <li>
          <IconButton
            href={figma}
            ariaLabel="Open Figma in a new tab"
            icon={<i className="devicon-figma-plain text-3xl text-dark" />}
          />
        </li>
      )}
      {github && (
        <li>
          <IconButton
            href={github}
            ariaLabel="Open Github in a new tab"
            icon={<i className="devicon-github-plain text-3xl text-dark" />}
          />
        </li>
      )}
      {appStore && appStore.map((appStoreLink) => (
        <li key={appStoreLink}>
          <IconButton
            href={appStoreLink}
            imageSrc={appStoreIcon}
            imageAlt="AppStore Icon"
          />
        </li>
      ))}
    </ul>
  );
}

export default React.memo(WorkBoxButtons);
