import React from 'react';
import useWindowDimensions from '../../components/hooks/useWindowDimensions';
import BigScreenRoutes from '../../components/molecules/BigScreenRoutes';
import HomeIntroduction from './HomeIntroduction';
import HomeQuoteSection from './HomeQuoteSection';
import Width from '../../components/styles/width';

function HomeLeft() {
  const { width } = useWindowDimensions();

  return (
    <div className="w-full sm:w-2/3 min-h-[60vh] sm:h-auto bg-primary flex flex-col gap-8 justify-around text-secondary p-8 sm:p-12 pt-[10vh] 2xl:p-32">
      <HomeIntroduction />
      <HomeQuoteSection />
      { width >= Width.sm && <BigScreenRoutes /> }
    </div>
  );
}

export default HomeLeft;
