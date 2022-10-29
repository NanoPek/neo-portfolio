import React from 'react';
import Header from '../component/Header';
import welcomeRound from '../assets/welcome.svg';

function HomePage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="w-full bg-primary">
        <div className="flex flex-col bg-primary text-secondary px-12 py-6 ">
          <h1 className="text-5xl font-bold">
            Full-Stack Developer.
          </h1>
          <h2 className="text-xl pt-8">
            I&apos;m a french developer spending most of my time
            learning developing various projects.
          </h2>
          <div className="w-full flex justify-end">
            <img src={welcomeRound} alt="welcome" className="relative -top-5 animate-spinSlow " />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-secondary h-96 bg-macaronis bg-center">
        <div className="h-56 w-56 bg-accent border-4 border-black z-10 bg-pp bg-cover" />
        <div className="h-56 w-56 bg-dark opacity-60 ml-6 mt-6 absolute " />
      </div>
    </div>
  );
}

export default HomePage;
