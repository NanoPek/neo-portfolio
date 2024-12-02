import React from 'react';
import { useTranslation } from 'react-i18next';

const languages: Record<string, { nativeName: string }> = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
  ko: { nativeName: '한국어' },
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-row gap-x-1.5">
      {Object.keys(languages).map((lng) => (
        <button
          key={lng}
          className={i18n.resolvedLanguage === lng ? 'font-bold' : 'font-normal'}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {languages[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default React.memo(LanguageSwitcher);
