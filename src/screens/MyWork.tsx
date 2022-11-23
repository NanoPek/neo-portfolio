import React from 'react';
import Header from '../component/templates/Header';
import WorkBox from '../component/molecules/WorkBox';
import Footer from '../component/templates/Footer';

import moonalisaImage from '../assets/WorkBoxImages/moonalisa.png';
import hi7hautImage from '../assets/WorkBoxImages/hi7hautApp.png';
import portfolio from '../assets/WorkBoxImages/portfolio.png';

function MyWork() {
  return (
    <div className="w-screen flex flex-col ">
      <Header dark={false} />
      <div className="w-full bg-light flex flex-col items-center pt-[10vh] mb-6 sm:items-center">
        <div className="flex flex-col w-5/6 py-6 gap-y-9 items-center sm:grid sm:grid-cols-3 sm:w-screen sm:px-60 sm:place-items-stretch ">
          <WorkBox image={moonalisaImage} title="moonalisa mobile App" link="https://moonalisa.co" />
          <WorkBox image={hi7hautImage} title="Hi7Haut PWA" link="" />
          <WorkBox image={portfolio} title="This Portfolio !" link="https://jeremiecarrez.live" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyWork;
