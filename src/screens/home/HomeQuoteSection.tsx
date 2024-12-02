import React from 'react';
import { useTranslation } from 'react-i18next';
import Quote from '../../components/atoms/Quote';

function HomeQuoteSection() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-row w-full gap-4 justify-between md:justify-around"
    >
      <Quote text={t('HomePage.quotes.1')} />
      <Quote text={t('HomePage.quotes.2')} />
    </div>
  );
}

export default HomeQuoteSection;
