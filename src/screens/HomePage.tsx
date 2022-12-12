import React from 'react';
import Header from '../component/templates/Header';
import useWindowDimensions from '../component/hooks/useWindowDimensions';
import BigScreenRoute from '../component/atoms/BigScreenRoute';
import pdf from '../assets/resumeCARREZJeremie.pdf';
import Footer from '../component/templates/Footer';

function HomePage() {
  const { width } = useWindowDimensions();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-screen h-screen flex flex-col sm:flex-row ">
        <Header dark />
        <div className="w-full h-[60vh] bg-primary pt-[10vh] sm:w-2/3 sm:h-full sm:flex sm:items-center ">
          <div className="flex flex-col bg-primary text-secondary px-12 py-6 2xl:px-32 2xl:py-32 items-center h-full">
            <h1 className="text-4xl font-bold sm:text-6xl xl:text-7xl">
              Full-Stack & Mobile Developer.
            </h1>
            <h2 className="text-md text-white pt-3 sm:py-9 sm:text-xl lg:text-justify xl:text-2xl 2xl:pr-56   ">
              I&apos;m a full-stack & mobile developer with a passion for creating innovative
              digital solutions.
            </h2>
            <div className="flex flex-row justify-between text-xs gap-4 h-full items-end sm:h-fit sm:items-center sm:text-base xl:justify-evenly xl:py-10 xl:w-full">
              <span className="xl:w-56">
                Eager to learn new tech,
                consistently staying up to date with latest tools & trends in software dev.
              </span>
              <span className="xl:w-56">
                Experience designing, developing and deploying
                robust, secure, and high-performing applications
              </span>
            </div>
            {width >= 640 && (
              <div className="flex flex-col justify-between pt-8 pb-4 gap-4 xl:flex-row w-full items-center">
                <BigScreenRoute title="My Work" route="/my-work" />
                <BigScreenRoute title="My Skills & Tools" route="/my-skills-&-tools" />
                <BigScreenRoute title="My Résumé" route={pdf} newTab />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center bg-secondary h-[40vh] bg-macaronis bg-center sm:pt-[10vh] sm:w-1/3 sm:h-full animate-animatedBackgroundMobile xl:animate-animatedBackground">
          <div className="h-48 w-48 bg-accent border-4 mb-9 mr-8 absolute border-black z-10 bg-pp bg-cover xl:h-64 xl:w-64 2xl:h-96 2xl:w-96" />
          <div className="h-48 w-48 bg-dark opacity-60 xl:h-64 xl:w-64 2xl:h-96 2xl:w-96 " />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
