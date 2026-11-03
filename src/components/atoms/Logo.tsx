import React from 'react';
import { useLocation } from 'react-router-dom';

function Logo() {
  const location = useLocation();
  const className = 'text-xl font-semibold tracking-tight text-fg';

  return location.pathname !== '/'
    ? <a href="/" className={`${className} transition-colors hover:text-accent`}>jecarrez</a>
    : <span className={className}>jecarrez</span>;
}

export default React.memo(Logo);
