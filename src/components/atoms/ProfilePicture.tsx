import React from 'react';
import portrait from '../../assets/pp.jpeg';
import Window from '../molecules/Window';

function ProfilePicture() {
  return (
    <Window title="jeremie.jpeg" className="w-56 sm:w-full sm:max-w-72 2xl:max-w-96">
      <img
        src={portrait}
        alt="Jérémie Carrez"
        width={800}
        height={800}
        {...{ fetchpriority: 'high' }}
        className="aspect-square w-full object-cover"
      />
    </Window>
  );
}

export default ProfilePicture;
