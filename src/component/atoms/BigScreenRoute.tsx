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
      className="flex justify-center items-center text-white text-xl border-2 border-white rounded-2xl
      transition transition-all p-6 2xl:p-8
      hover:border-primary hover:text-primary hover:bg-white hover:text-2xl hover:font-bold max-h-2
      shadow-inner shadow-lg hover:shadow-2xl"
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {title}
    </a>
  );
}

BigScreenRoute.defaultProps = {
  newTab: false,
};

export default React.memo(BigScreenRoute);
