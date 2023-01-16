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
      <div className="w-screen min-h-screen flex flex-col sm:flex-row ">
        <Header dark />
        <div className="w-full min-h-[60vh] bg-primary pt-[10vh] sm:w-2/3 sm:h-auto sm:flex sm:items-center ">
          <div className="flex flex-col bg-primary text-secondary px-12 py-6 2xl:px-32 2xl:py-32 h-full">
            <h1 className="text-4xl font-bold sm:text-6xl xl:text-7xl">
              Full-Stack & Mobile Developer.
            </h1>
            <h2 className="text-xl text-white pt-3 sm:pt-9 sm:text-2xl lg:text-justify xl:text-5xl    ">
              Hey, I&apos;m
              {' '}
              <span className="text-accent font-bold">nanö</span>
              👋
            </h2>
            <h3 className="text-md text-white pt-3 sm:py-9 sm:text-xl lg:text-justify xl:text-3xl 2xl:pr-56   ">
              I craft robust, secure, and high-performing applications.
            </h3>
            <div className="flex flex-row justify-between text-xs leading-5 gap-4 h-full  py-12 sm:h-fit sm:items-center sm:text-base md:justify-around xl:py-10 ">
              <span className="md:w-48 text-justify">
                Eager to learn new tech,
                consistently staying up to date with latest tools & trends in software dev.
              </span>
              <span className="md:w-48 text-justify">
                I have a great passion for designing & developing,
                innovating & deploying creative digital solutions.
              </span>
            </div>
            {width >= 640 && (
              <div className="flex flex-col justify-around gap-y-4 pt-8 pb-4 xl:flex-row w-full items-center">
                <BigScreenRoute title="My Work👨‍💻" route="/my-work" />
                <BigScreenRoute title="Skills🤹 & Tools🛠️" route="/my-skills-&-tools" />
                <BigScreenRoute title="My Résumé📄" route={pdf} newTab />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center bg-secondary h-[40vh] bg-macaronis bg-center sm:pt-[10vh] sm:w-1/3 sm:h-auto">
          <div className="h-48 w-48 bg-accent border-4 mb-9 mr-8 absolute border-black z-10 bg-pp bg-cover xl:h-64 xl:w-64 2xl:h-96 2xl:w-96" />
          <div className="h-48 w-48 bg-dark opacity-60 xl:h-64 xl:w-64 2xl:h-96 2xl:w-96 " />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
