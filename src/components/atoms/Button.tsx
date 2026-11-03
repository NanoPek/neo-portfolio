import React from 'react';
import type { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'paper' | 'outline-on-accent';
type Size = 'md' | 'sm';

type ButtonProps = {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** Renders a link when set, a button otherwise. */
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  icon?: LucideIcon;
  /** Icon or image rendered alone; `aria-label` is then required. */
  iconOnly?: React.ReactNode;
  'aria-label'?: string;
  'aria-pressed'?: boolean;
  className?: string;
};

const base = 'inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border-3 font-medium whitespace-nowrap '
  + 'transition-[transform,box-shadow,background-color,color] active:translate-x-0.5 active:translate-y-0.5';

const variants: Record<Variant, string> = {
  primary: 'border-ink bg-accent text-on-accent shadow-block-sm hover:bg-accent-hover active:shadow-block-xs',
  secondary: 'border-ink bg-surface text-fg shadow-block-sm hover:bg-raised active:shadow-block-xs',
  paper: 'border-ink bg-paper text-fg shadow-block-sm hover:bg-white active:shadow-block-xs',
  'outline-on-accent': 'border-on-accent text-on-accent hover:bg-on-accent hover:text-accent',
};

const sizes: Record<Size, string> = {
  md: 'h-12 px-5 text-base',
  sm: 'h-10 px-4 text-[15px]',
};

const iconOnlySizes: Record<Size, string> = {
  md: 'h-12 w-12',
  sm: 'h-10 w-10',
};

function Button({
  children, variant = 'secondary', size = 'md', href, newTab, onClick, icon: Icon,
  iconOnly, className, ...aria
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${iconOnly ? iconOnlySizes[size] : sizes[size]} ${className ?? ''}`;
  const content = iconOnly ?? (
    <>
      {children}
      {Icon && <Icon size={18} strokeWidth={1.5} aria-hidden />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        {...aria}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...aria}>
      {content}
    </button>
  );
}

export default React.memo(Button);
