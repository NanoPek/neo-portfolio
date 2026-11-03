import React from 'react';
import ProfilePicture from '../../components/atoms/ProfilePicture';

function HomeRight() {
  return (
    <div className="sm:w-1/3 h-[40vh] sm:h-auto flex justify-center items-center sm:pt-[10vh] bg-paper">
      <ProfilePicture />
    </div>
  );
}

export default HomeRight;
