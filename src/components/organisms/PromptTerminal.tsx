import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MacOSButtons from '../atoms/MacOSButtons';

const LINE_KEYS = ['prompt', 'working', 'bug', 'push'] as const;
const LINE_DELAY_MS = 900;

const prefersReducedMotion = () => typeof window !== 'undefined'
  && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

type PromptTerminalProps = {
  aiMode: boolean;
  onToggle: (aiMode: boolean) => void;
};

function PromptTerminal({ aiMode, onToggle }: PromptTerminalProps) {
  const { t } = useTranslation();
  const [visibleLines, setVisibleLines] = useState(() => (prefersReducedMotion() ? LINE_KEYS.length : 0));

  useEffect(() => {
    if (visibleLines >= LINE_KEYS.length) return undefined;
    const timeout = setTimeout(() => setVisibleLines((count) => count + 1), LINE_DELAY_MS);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  const lineClass: Record<typeof LINE_KEYS[number], string> = {
    prompt: 'text-on-ink',
    working: 'text-on-ink-secondary',
    bug: 'text-on-ink-secondary',
    push: 'text-on-ink',
  };

  return (
    <div className="w-10/12 max-w-3xl mb-16 bg-surface border-ink border-3 shadow-block">
      <div className="h-12 flex flex-row items-center gap-4 px-4 bg-raised border-ink border-b-3">
        <MacOSButtons />
        <span className="font-bold text-fg">how-i-code-in-2026.sh</span>
      </div>
      <div className="min-h-[11rem] p-4 bg-ink font-mono text-sm sm:text-base text-on-ink" aria-live="polite">
        {LINE_KEYS.slice(0, visibleLines).map((key) => (
          <p key={key} className={lineClass[key]}>
            {(key === 'prompt' || key === 'push') && <span className="text-accent-on-ink">$ </span>}
            {t(`MySkills.ai.lines.${key}`)}
          </p>
        ))}
        <span className="inline-block w-2.5 h-5 align-middle bg-on-ink animate-pulse" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4">
        <span className="text-fg font-bold">{t('MySkills.ai.toggleLabel')}</span>
        <div className="flex flex-row border-ink border-3 rounded-full overflow-hidden" role="group" aria-label={t('MySkills.ai.toggleLabel')}>
          {[false, true].map((mode) => (
            <button
              key={String(mode)}
              type="button"
              aria-pressed={aiMode === mode}
              onClick={() => onToggle(mode)}
              className={`px-3 sm:px-4 py-1 text-sm sm:text-base whitespace-nowrap font-bold transition-colors ${aiMode === mode ? 'bg-ink text-on-ink' : 'bg-surface text-fg hover:bg-raised'}`}
            >
              {t(mode ? 'MySkills.ai.now' : 'MySkills.ai.past')}
            </button>
          ))}
        </div>
      </div>
      <p className="px-4 pb-4 text-fg text-sm">
        {t(aiMode ? 'MySkills.ai.captionNow' : 'MySkills.ai.captionPast')}
      </p>
    </div>
  );
}

export default PromptTerminal;
