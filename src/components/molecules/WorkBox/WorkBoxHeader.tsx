import React from 'react';
import { useTranslation } from 'react-i18next';
import MacOSButtons from '../../atoms/MacOSButtons';

type WorkBoxHeaderProps = {
  title: string;
  startDate: Date;
  endDate?: Date;
  extension: string;
};

function WorkBoxHeader({
  title, startDate, endDate, extension,
}: WorkBoxHeaderProps) {
  const { t } = useTranslation();

  const dateFormatter = (dateToFormat: Date) => {
    const year = dateToFormat.getFullYear();
    const month = (dateToFormat.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
  };

  return (
    <div
      className="w-full h-12 flex flex-row items-center justify-between px-4 bg-grey border-dark border-b-[3px] hover:bg-purple"
      id={`workbox-grey-${title}`}
    >
      <MacOSButtons />
      <span className="text-dark text-md font-semibold">
        {endDate ? t('MyWork.project', {
          startDate: dateFormatter(startDate),
          endDate: dateFormatter(endDate),
          extension,
        }) : t('MyWork.ongoing', {
          startDate: dateFormatter(startDate),
          extension,
        })}
      </span>
      <div />
    </div>
  );
}

export default React.memo(WorkBoxHeader);
