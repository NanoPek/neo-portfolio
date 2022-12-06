import React from 'react';
import Header from '../component/templates/Header';
import Footer from '../component/templates/Footer';
import WebToolbox from '../component/templates/WebToolbox';
import MobileToolbox from '../component/templates/MobileToolbox';
import AllPurposeToolbox from '../component/templates/AllPurposeToolbox';
import BackendToolbox from '../component/templates/BackendToolbox';

function MySkills() {
  return (
    <div className="w-screen flex flex-col ">
      <Header dark={false} random />
      <div className="w-full bg-light flex flex-col pt-[10vh]">
        <WebToolbox />
        <MobileToolbox />
        <AllPurposeToolbox />
        <BackendToolbox />
      </div>
      <Footer random />
    </div>
  );
}

export default MySkills;
