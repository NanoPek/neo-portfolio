import React from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/require-default-props
function Router(props: { title: string, route: string, color?: string, newTab?: boolean }) {
  const {
    title, route, color, newTab,
  } = props;

  const location = useLocation();

  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
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
            <div className="text-accent text-xl " style={color ? { color } : {}}>
              {title}
            </div>
          )
    }
    </div>
  );
}

export default Router;
