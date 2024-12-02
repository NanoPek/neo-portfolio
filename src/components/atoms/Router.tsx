import React from 'react';
import { useLocation } from 'react-router-dom';

type RouterProps = {
  title: string;
  route: string;
  color?: string;
  newTab?: boolean;
};

function Router({
  title, route, color, newTab,
}: RouterProps) {
  const location = useLocation();

  const isActiveRoute = location.pathname === route;
  const linkStyles = color ? { color } : {};

  return (
    <div className="text-xl transition-all">
      {isActiveRoute ? (
        <span className="text-accent font-bold" style={linkStyles}>
          {title}
        </span>
      ) : (
        <a
          href={route}
          className="text-primary border-b-2 border-transparent hover:border-primary"
          style={linkStyles}
          target={newTab ? '_blank' : ''}
          rel="noopener noreferrer"
        >
          {title}
        </a>
      )}
    </div>
  );
}

export default React.memo(Router);
