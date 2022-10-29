import React from 'react';
import image from '../assets/Face.svg';

function Header() {
  return (
    <header className="bg-primary flex flex-row justify-between py-6 px-4">
      <div className="font-extrabold text-secondary text-3xl">
        Nanȯ
      </div>
      <img src={image} alt="Menu" />
    </header>
  );
}

export default Header;
