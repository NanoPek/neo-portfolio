import React from 'react';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import { paletteColors } from '../../components/styles/colors';

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-screen min-h-screen flex flex-col sm:flex-row">
        <Header textColor="text-accent" logoColor={paletteColors.primary} smallLogoColor={paletteColors.accent} />
        <HomeLeft />
        <HomeRight />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
