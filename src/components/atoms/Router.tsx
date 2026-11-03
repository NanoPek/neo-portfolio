import React from 'react';
import { useLocation } from 'react-router-dom';

type RouterProps = {
  title: string;
  route: string;
  className: string;
  activeClassName: string;
};

function Router({
  title, route, className, activeClassName,
}: RouterProps) {
  const location = useLocation();
  const isActive = location.pathname === route;
  const isExternal = /^(https?:|mailto:)/.test(route);

  return (
    <li>
      <a
        href={route}
        aria-current={isActive ? 'page' : undefined}
        className={`transition-colors ${isActive ? activeClassName : className}`}
        target={isExternal && !route.startsWith('mailto:') ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {title}
      </a>
    </li>
  );
}

export default React.memo(Router);
