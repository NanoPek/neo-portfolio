import React from 'react';
import Router from '../atoms/Router';

type RouterType = {
  title: string;
  route: string;
};

type RoutersSectionProps = {
  label: string;
  routers: RouterType[];
  labelClassName: string;
  listClassName: string;
  linkClassName: string;
  activeClassName: string;
};

function RoutersSection({
  label, routers, labelClassName, listClassName, linkClassName, activeClassName,
}: RoutersSectionProps) {
  return (
    <nav aria-label={label} className="flex flex-col gap-3">
      <h2 className={`text-sm font-medium ${labelClassName}`}>{label}</h2>
      <ul className={`flex flex-col ${listClassName}`}>
        {routers.map((router) => (
          <Router
            key={router.route + router.title}
            title={router.title}
            route={router.route}
            className={linkClassName}
            activeClassName={activeClassName}
          />
        ))}
      </ul>
    </nav>
  );
}

export default React.memo(RoutersSection);
