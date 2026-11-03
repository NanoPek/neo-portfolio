import { useTranslation } from 'react-i18next';

const formatMonth = (date: Date) => `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;

/** The card's file name, e.g. from-2025-08-ongoing.kt */
function useWorkFileName(startDate: Date, endDate: Date | undefined, extension: string) {
  const { t } = useTranslation();

  return endDate
    ? t('MyWork.project', { startDate: formatMonth(startDate), endDate: formatMonth(endDate), extension })
    : t('MyWork.ongoing', { startDate: formatMonth(startDate), extension });
}

export default useWorkFileName;
