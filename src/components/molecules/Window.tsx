import React from 'react';
import MacOSButtons from '../atoms/MacOSButtons';

type WindowProps = {
  /** File name shown in the title bar, set in mono like an editor tab. */
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/** The site's one container: an editor window with an ink border and a hard offset shadow. */
function Window({ title, children, className }: WindowProps) {
  return (
    <div className={`flex min-w-0 flex-col overflow-hidden rounded-xl border-3 border-ink bg-surface shadow-block ${className ?? ''}`}>
      <div className="flex h-11 shrink-0 flex-row items-center gap-3 border-b-3 border-ink bg-raised px-4">
        <MacOSButtons />
        <span className="min-w-0 truncate font-mono text-[13px] text-fg-secondary">{title}</span>
      </div>
      {children}
    </div>
  );
}

export default Window;
