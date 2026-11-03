import React from 'react';
import { useLocation } from 'react-router-dom';

type RouterProps = {
  title: string;
  route: string;
  newTab?: boolean;
};

function Router({
  title, route, newTab,
}: RouterProps) {
  const location = useLocation();

  const isActiveRoute = location.pathname === route;

  return (
    <div className="text-xl transition-all">
      {isActiveRoute ? (
        <span className="font-bold underline decoration-2 underline-offset-4">
          {title}
        </span>
      ) : (
        <a
          href={route}
          className="border-b-2 border-transparent hover:border-current"
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
