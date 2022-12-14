import React from 'react';
import Header from '../component/templates/Header';
import WorkBox from '../component/molecules/WorkBox';
import Footer from '../component/templates/Footer';

import moonalisaImage from '../assets/WorkBoxImages/moonalisa.png';
import hi7hautImage from '../assets/WorkBoxImages/hi7hautApp.png';
import hi7hautWeb from '../assets/WorkBoxImages/hi7hautWeb.png';
import portfolio from '../assets/WorkBoxImages/portfolio.png';

function MyWork() {
  return (
    <div className="flex flex-col ">
      <Header dark={false} />
      <div className="bg-light flex flex-col items-center pt-[10vh] mb-6 2xl:items-center">
        <div className="flex flex-col w-5/6 py-6 gap-9 items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3 2xl:w-screen 2xl:px-60  ">
          <WorkBox image={moonalisaImage} title="moonalisa App (private beta)" link="https://moonalisa.co" />
          <WorkBox image={hi7hautImage} title="Coin Game PWA" link="https://pieces.hi7haut.fr/" />
          <WorkBox image={hi7hautWeb} title="BDE Portfolio" link="https://www.hi7haut.fr/" />
          <WorkBox image={portfolio} title="This Portfolio !" link="https://jeremiecarrez.live" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyWork;
