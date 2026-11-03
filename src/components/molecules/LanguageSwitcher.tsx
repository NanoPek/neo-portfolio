import React from 'react';
import { useTranslation } from 'react-i18next';

const languages: Record<string, { nativeName: string; short: string }> = {
  en: { nativeName: 'English', short: 'EN' },
  fr: { nativeName: 'Français', short: 'FR' },
  ko: { nativeName: '한국어', short: 'KO' },
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-3 text-sm">
      {Object.keys(languages).map((lng) => {
        const active = i18n.resolvedLanguage === lng;
        return (
          <button
            key={lng}
            type="button"
            lang={lng}
            aria-pressed={active}
            aria-label={languages[lng].nativeName}
            className={`transition-colors ${active ? 'font-medium text-fg' : 'text-fg-muted hover:text-fg'}`}
            onClick={() => i18n.changeLanguage(lng)}
          >
            <span className="sm:hidden">{languages[lng].short}</span>
            <span className="hidden sm:inline">{languages[lng].nativeName}</span>
          </button>
        );
      })}
    </div>
  );
}

export default React.memo(LanguageSwitcher);
