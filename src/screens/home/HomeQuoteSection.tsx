import React from 'react';
import { useTranslation } from 'react-i18next';
import Quote from '../../components/atoms/Quote';

function HomeQuoteSection() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-row w-full gap-4 justify-between md:justify-around"
    >
      <Quote label={t('HomePage.facts.nowLabel')} text={t('HomePage.facts.now')} />
      <Quote label={t('HomePage.facts.beforeLabel')} text={t('HomePage.facts.before')} />
    </div>
  );
}

export default HomeQuoteSection;
