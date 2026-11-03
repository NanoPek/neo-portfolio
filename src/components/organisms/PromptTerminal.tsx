import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Window from '../molecules/Window';

const LINE_KEYS = ['prompt', 'working', 'bug', 'push'] as const;
const LINE_DELAY_MS = 900;

const prefersReducedMotion = () => typeof window !== 'undefined'
  && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const lineClass: Record<typeof LINE_KEYS[number], string> = {
  prompt: 'text-on-ink',
  working: 'text-on-ink-secondary',
  bug: 'text-on-ink-secondary',
  push: 'text-on-ink',
};

type PromptTerminalProps = {
  aiMode: boolean;
  onToggle: (aiMode: boolean) => void;
};

function PromptTerminal({ aiMode, onToggle }: PromptTerminalProps) {
  const { t } = useTranslation();
  const [visibleLines, setVisibleLines] = useState(() => (prefersReducedMotion() ? LINE_KEYS.length : 0));
  const isTyping = visibleLines < LINE_KEYS.length;

  useEffect(() => {
    if (!isTyping) return undefined;
    const timeout = setTimeout(() => setVisibleLines((count) => count + 1), LINE_DELAY_MS);
    return () => clearTimeout(timeout);
  }, [isTyping, visibleLines]);

  return (
    <Window title="how-i-code-in-2026.sh" className="w-full max-w-3xl">
      <div className="min-h-44 bg-ink p-5 font-mono text-sm leading-7 sm:text-[15px]" aria-live="polite">
        {LINE_KEYS.slice(0, visibleLines).map((key) => (
          <p key={key} className={lineClass[key]}>
            {(key === 'prompt' || key === 'push') && <span className="text-accent-on-ink">$ </span>}
            {t(`MySkills.ai.lines.${key}`)}
          </p>
        ))}
        {isTyping && <span className="inline-block h-4 w-2 bg-on-ink align-middle" aria-hidden />}
      </div>
      <div className="flex flex-col gap-4 border-t-3 border-ink p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-fg">{t('MySkills.ai.toggleLabel')}</span>
          <p className="text-sm text-fg-secondary">
            {t(aiMode ? 'MySkills.ai.captionNow' : 'MySkills.ai.captionPast')}
          </p>
        </div>
        <div
          className="inline-flex shrink-0 self-start rounded-lg border-3 border-ink bg-surface p-1 sm:self-auto"
          role="group"
          aria-label={t('MySkills.ai.toggleLabel')}
        >
          {[false, true].map((mode) => (
            <button
              key={String(mode)}
              type="button"
              aria-pressed={aiMode === mode}
              onClick={() => onToggle(mode)}
              className={`h-9 whitespace-nowrap rounded px-3 text-sm font-medium transition-colors sm:text-[15px] ${aiMode === mode ? 'bg-ink text-on-ink' : 'text-fg-secondary hover:bg-raised hover:text-fg'}`}
            >
              {t(mode ? 'MySkills.ai.now' : 'MySkills.ai.past')}
            </button>
          ))}
        </div>
      </div>
    </Window>
  );
}

export default PromptTerminal;
