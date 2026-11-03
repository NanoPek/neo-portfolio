import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import Header from '../components/organisms/header/Header';
import Footer from '../components/organisms/Footer';
import Toolbox from '../components/organisms/Toolbox';
import PromptTerminal from '../components/organisms/PromptTerminal';
import { SkillCategory, SkillsDetails } from '../constants/skillData';

const CATEGORIES = [
  { category: SkillCategory.mobileTools, titleKey: 'MySkills.categories.mobileTools' },
  { category: SkillCategory.webTools, titleKey: 'MySkills.categories.webTools' },
  { category: SkillCategory.backendTools, titleKey: 'MySkills.categories.backendTools' },
  { category: SkillCategory.otherTools, titleKey: 'MySkills.categories.otherTools' },
];

const ALL_SKILLS = Object.values(SkillsDetails);

function MySkills() {
  const [search, setSearch] = React.useState('');
  const [aiMode, setAiMode] = React.useState(true);
  const { t } = useTranslation();

  const query = search.trim().toLowerCase();
  const sections = CATEGORIES
    .map(({ category, titleKey }) => ({
      titleKey,
      skills: ALL_SKILLS.filter((skill) => skill.category === category
        && skill.name.toLowerCase().includes(query)),
    }))
    .filter((section) => section.skills.length > 0);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-medium tracking-[-0.02em] sm:text-5xl">{t('MySkills.title')}</h1>
          <PromptTerminal aiMode={aiMode} onToggle={setAiMode} />
        </div>
        <label className="relative w-full sm:max-w-sm">
          <span className="sr-only">{t('MySkills.search')}</span>
          <Search size={18} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-fg-muted" aria-hidden />
          <input
            type="search"
            className="h-12 w-full rounded-lg border-3 border-ink bg-surface pl-11 pr-4 text-base text-fg placeholder:text-fg-muted"
            placeholder={t('MySkills.search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        {sections.map((section) => (
          <Toolbox
            key={section.titleKey}
            title={t(section.titleKey)}
            skills={section.skills}
            sticker={aiMode ? t('MySkills.ai.stamp') : undefined}
          />
        ))}
        {sections.length === 0 && (
          <p className="text-xl text-fg-secondary">{t('MySkills.noSkills', { query: search.trim() })}</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default MySkills;
