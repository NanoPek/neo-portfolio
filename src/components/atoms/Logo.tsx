import React from 'react';
import { useLocation } from 'react-router-dom';

function Logo() {
  const location = useLocation();

  return (
    <div>
      { location.pathname !== '/' ? (
        <a href="/" className="flex flex-row font-extrabold text-3xl 2xl:text-5xl">
          jecarrez
        </a>
      ) : (
        <div className="font-extrabold text-3xl 2xl:text-5xl cursor-default">
          jecarrez
        </div>
      )}
    </div>
  );
}

export default React.memo(Logo);
