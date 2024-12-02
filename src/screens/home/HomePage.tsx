import React from 'react';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import MyColors from '../../components/atoms/MyColors';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-screen min-h-screen flex flex-col sm:flex-row">
        <Header textColor="text-accent" logoColor={MyColors.primary} smallLogoColor={MyColors.accent} />
        <HomeLeft />
        <HomeRight />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
