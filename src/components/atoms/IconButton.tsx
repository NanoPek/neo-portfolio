import React from 'react';

type IconButtonProps = {
  href: string,
  label?: string,
  ariaLabel?: string,
  icon?: JSX.Element,
  imageSrc?: string,
  imageAlt?: string,
  className?: string,
  id?: string
};

function IconButton({
  href,
  label,
  ariaLabel,
  icon,
  imageSrc,
  imageAlt,
  className,
  id,
}: IconButtonProps) {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel || label}
      className={`flex items-center justify-center ${className || ''}`}
    >
      {icon}
      {imageSrc && <img src={imageSrc} alt={imageAlt || 'Button image'} className="w-9 h-9" />}
      {label && <span className="text-base font-semibold">{label}</span>}
    </a>
  );
}

export default React.memo(IconButton);
