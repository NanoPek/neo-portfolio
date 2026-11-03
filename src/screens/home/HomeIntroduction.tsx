import React from 'react';
import { useTranslation } from 'react-i18next';

function HomeIntroduction() {
  const { t } = useTranslation();

  const facts = [
    { label: t('HomePage.facts.nowLabel'), text: t('HomePage.facts.now') },
    { label: t('HomePage.facts.beforeLabel'), text: t('HomePage.facts.before') },
  ];

  return (
    <div className="flex max-w-3xl flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl xl:text-7xl xl:tracking-[-0.03em]">
          {t('HomePage.title')}
        </h1>
        <p className="max-w-[36rem] text-lg leading-8 text-on-accent-secondary sm:text-xl">
          {t('HomePage.intro')}
        </p>
      </div>
      <dl className="grid gap-6 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-2 border-t-3 border-on-accent/30 pt-4">
            <dt className="font-mono text-sm text-on-accent-secondary">{fact.label}</dt>
            <dd className="text-base leading-7">{fact.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default HomeIntroduction;
