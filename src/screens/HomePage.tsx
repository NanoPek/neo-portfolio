import React from 'react';
import Header from '../component/templates/Header';
import useWindowDimensions from '../component/hooks/useWindowDimensions';
import BigScreenRoute from '../component/atoms/BigScreenRoute';
import pdf from '../assets/resumeCARREZJeremie.pdf';

function HomePage() {
  const { width } = useWindowDimensions();

  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row  ">
      <Header dark />
      <div className="w-full h-[55%] bg-primary pt-[10vh] sm:w-2/3 sm:h-full sm:flex sm:items-center ">
        <div className="flex flex-col bg-primary text-secondary px-12 py-6 sm:px-32 sm:py-32 ">
          <h1 className="text-5xl font-bold sm:text-7xl">
            Full-Stack & Mobile Developer.
          </h1>
          <h2 className="text-xl pt-8 sm:text-2xl">
            I&apos;m a french developer spending most of my time
            learning developing various projects.
          </h2>
          {width > 640 && (
            <div className="flex flex-row justify-evenly pt-8">
              <BigScreenRoute title="My Work" route="/my-work" />
              <BigScreenRoute title="My Skills & Tools" route="/my-skills-&-tools" />
              <BigScreenRoute title="My Résumé" route={pdf} newTab />

            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center bg-secondary h-[45%] bg-macaronis bg-center sm:pt-[10vh] sm:w-1/3 sm:h-full animate-animatedBackgroundMobile sm:animate-animatedBackground">
        <div className="h-56 w-56 bg-accent border-4 border-black z-10 bg-pp bg-cover sm:h-96 sm:w-96" />
        <div className="h-56 w-56 bg-dark opacity-60 ml-6 mt-6 absolute sm:h-96 sm:w-96 " />
      </div>
    </div>
  );
}

export default HomePage;
