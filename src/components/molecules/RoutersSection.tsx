import React from 'react';
import Router from '../atoms/Router';

type RouterType = {
  title: string;
  route: string;
  color: string;
};

type HeaderType = {
  text: string;
  color: string;
};

function RoutersSection({ header, routers }: { header: HeaderType; routers: RouterType[] }) {
  return (
    <div className="flex flex-col gap-2">
      <text className={`text-[${header.color}] text-xl font-medium`} style={{ color: header.color }}>
        {header.text}
      </text>
      {routers.map((router) => (
        <Router
          key={router.route}
          title={router.title}
          route={router.route}
          color={router.color}
        />
      ))}
    </div>
  );
}

export default React.memo(RoutersSection);
