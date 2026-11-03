import React from 'react';
import Header from '../../components/organisms/header/Header';
import Footer from '../../components/organisms/Footer';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex min-h-[calc(100svh-4rem)] flex-col sm:flex-row">
        <HomeLeft />
        <HomeRight />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
