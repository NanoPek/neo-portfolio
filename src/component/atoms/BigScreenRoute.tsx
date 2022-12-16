import React from 'react';

// eslint-disable-next-line react/require-default-props
function BigScreenRoute(props: { route: string; title: string; newTab?: boolean; }) {
  const { route, title, newTab } = props;

  return (
    <a
      href={route}
      className="flex justify-center items-center text-white text-xl border-2 border-white rounded-2xl
      transition transition-all p-6 2xl:p-8
      hover:border-primary hover:text-primary hover:bg-white hover:text-2xl hover:font-bold max-h-2
      shadow-inner shadow-lg hover:shadow-2xl"
      target={newTab ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}

export default BigScreenRoute;
