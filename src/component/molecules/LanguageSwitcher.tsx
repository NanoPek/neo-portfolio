import React from 'react';
import { useTranslation } from 'react-i18next';

const languages: Record<string, { nativeName: string }> = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      {Object.keys(languages).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
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
