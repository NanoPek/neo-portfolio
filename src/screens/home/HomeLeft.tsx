import React from 'react';
import BigScreenRoutes from '../../components/molecules/BigScreenRoutes';
import HomeIntroduction from './HomeIntroduction';

function HomeLeft() {
  return (
    <section className="flex flex-col justify-center gap-10 bg-accent px-6 py-16 text-on-accent sm:w-3/5 sm:px-12 lg:w-2/3 lg:px-16 xl:px-24">
      <HomeIntroduction />
      <BigScreenRoutes />
    </section>
  );
}

export default HomeLeft;
