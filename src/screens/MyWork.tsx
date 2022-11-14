import React from 'react';
import Header from '../component/Header';
import WorkBox from '../component/WorkBox';
import Footer from '../component/Footer';

import moonalisaImage from '../assets/WorkBoxImages/moonalisa.png';
import hi7hautImage from '../assets/WorkBoxImages/hi7hautApp.png';

function MyWork() {
  return (
    <div className="w-screen flex flex-col ">
      <Header dark={false} />
      <div className="w-full bg-light flex flex-col items-center pt-[10vh] mb-6">
        <div className="flex flex-col w-5/6 py-6 gap-y-9 ">
          <WorkBox image={moonalisaImage} title="moonalisa mobile App" link="https://moonalisa.co" />
          <WorkBox image={hi7hautImage} title="Hi7Haut PWA" link="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyWork;
