import React from 'react';

type BigScreenRouteProps = {
  route: string;
  title: string;
  newTab?: boolean;
};

function BigScreenRoute({ route, title, newTab }: BigScreenRouteProps) {
  return (
    <a
      href={route}
      className="flex justify-center items-center text-on-accent text-xl border-2 border-on-accent rounded-2xl p-6 2xl:p-8 max-h-2 transition-all
  hover:text-fg hover:bg-paper hover:text-2xl hover:font-bold shadow-lg hover:shadow-2xl"
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {title}
    </a>
  );
}

export default React.memo(BigScreenRoute);
