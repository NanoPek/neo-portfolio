import React from 'react';
import ProfilePicture from '../../components/atoms/ProfilePicture';

function HomeRight() {
  return (
    <section className="flex items-center justify-center bg-paper px-6 py-16 sm:w-2/5 lg:w-1/3">
      <ProfilePicture />
    </section>
  );
}

export default HomeRight;
