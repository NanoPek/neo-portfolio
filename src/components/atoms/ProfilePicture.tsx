import React from 'react';

function ProfilePicture() {
  return (
    <>
      <div
        className="h-48 w-48 bg-accent border-2 mb-9 mr-8 absolute border-primary z-10 bg-pp bg-cover xl:h-64 xl:w-64 2xl:h-96 2xl:w-96"
      />
      <div className="h-48 w-48 bg-accent opacity-90 xl:h-64 xl:w-64 2xl:h-96 2xl:w-96 " />
    </>
  );
}

export default ProfilePicture;
