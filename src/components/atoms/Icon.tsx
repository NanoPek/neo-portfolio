import React from 'react';

type IconProps = {
  href: string;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

function Icon({ href, label, icon: IconComponent }: IconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center transition-colors"
    >
      <IconComponent className="h-6 w-6 fill-current" aria-hidden />
    </a>
  );
}

export default Icon;
