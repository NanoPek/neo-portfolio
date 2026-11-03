import React from 'react';
import { useTranslation } from 'react-i18next';
import MacOSButtons from '../../atoms/MacOSButtons';

type WorkBoxHeaderProps = {
  startDate: Date;
  endDate?: Date;
  extension: string;
};

function WorkBoxHeader({
  startDate, endDate, extension,
}: WorkBoxHeaderProps) {
  const { t } = useTranslation();

  const dateFormatter = (dateToFormat: Date) => {
    const year = dateToFormat.getFullYear();
    const month = (dateToFormat.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
  };

  return (
    <div
      className="w-full h-12 flex flex-row items-center justify-between px-4 bg-raised border-ink border-b-3"
    >
      <MacOSButtons />
      <span className="text-fg text-md font-semibold">
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
