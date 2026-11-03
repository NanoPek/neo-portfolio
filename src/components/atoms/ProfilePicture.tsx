import React from 'react';
import portrait from '../../assets/pp.jpeg';

function ProfilePicture() {
  return (
    <img
      src={portrait}
      alt="Jérémie Carrez"
      width={800}
      height={800}
      className="h-48 w-48 border-3 border-ink shadow-block object-cover xl:h-64 xl:w-64 2xl:h-96 2xl:w-96"
    />
  );
}

export default ProfilePicture;
