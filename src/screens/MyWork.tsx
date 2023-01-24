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
      <Header textColor="text-black" logoColor="#000" />
      <div className="bg-light flex flex-col items-center mt-[10vh] pb-6 2xl:items-center bg-png min-h-[90vh]">
        <div className="flex flex-col w-5/6 py-6 gap-9 items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3 2xl:w-screen 2xl:px-60  ">
          <WorkBox
            image={moonalisaImage}
            title="moonalisa App (private beta)"
            description="I am working on the frontend with React Native and the backend with Firebase for the entire app development of a French startup in the health field."
            link="https://moonalisa.co"
            figma="https://www.figma.com/file/LwTFuqp0aKhcEz62kLsRSc/moonalisa-Sketch?node-id=0%3A1&t=awjlHnumlw3EqMmK-1"
            date={new Date(2022, 9, 15)}
          />
          <WorkBox
            image={hi7hautImage}
            title="Coin Game PWA"
            description="A simple coin reward web app to build customer loyalty made with VueJS & Strapi. "
            link="https://pieces.hi7haut.fr/"
            date={new Date(2022, 2, 20)}
          />
          <WorkBox
            image={hi7hautWeb}
            title="BDE Portfolio"
            description="A portfolio for a french student association made with VueJS."
            link="https://www.hi7haut.fr/"
            date={new Date(2022, 2, 20)}
          />
          <WorkBox
            image={portfolio}
            title="This Portfolio !"
            description="This portfolio is made with ReactJS and TailwindCSS. Wanted to try a neo memphis design, hope you like it :)"
            link="https://jeremiecarrez.live"
            date={new Date(2023, 0, 1)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyWork;
