// Icon.tsx
import React from 'react';

type IconProps = {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

function Icon({ href, icon: IconComponent }: IconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:animate-pulse hover:scale-[1.2] transition-all"
    >
      <IconComponent
        className="fill-current"
      />
    </a>
  );
}

export default Icon;
