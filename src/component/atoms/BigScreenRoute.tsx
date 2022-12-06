import React from 'react';

// eslint-disable-next-line react/require-default-props
function BigScreenRoute(props: { route: string; title: string; newTab?: boolean; }) {
  const { route, title, newTab } = props;

  return (

    <a
      href={route}
      className="text-white text-xl border-2 border-white rounded-2xl hover:border-primary hover:text-primary hover:bg-white hover:text-2xl hover:font-bold transition transition-all p-8"
      target={newTab ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}

export default BigScreenRoute;
