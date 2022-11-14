import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import WebToolbox from '../component/WebToolbox';
import MobileToolbox from '../component/MobileToolbox';
import AllPurposeToolbox from '../component/AllPurposeToolbox';
import BackendToolbox from '../component/BackendToolbox';

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
