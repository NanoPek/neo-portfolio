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

  return (
    <div>
      {
        location.pathname !== route
          ? (
            <a
              href={route}
              className="text-primary text-xl border-b-2 border-transparent hover:border-primary transition transition-all"
              style={color ? { color } : {}}
              target={newTab ? '_blank' : ''}
              rel="noopener noreferrer"
            >
              {title}
            </a>
          )
          : (
            <div className="text-accent text-xl" style={color ? { color } : {}}>
              {title}
            </div>
          )
    }
    </div>
  );
}

Router.defaultProps = {
  color: '',
  newTab: false,
};

export default React.memo(Router);
