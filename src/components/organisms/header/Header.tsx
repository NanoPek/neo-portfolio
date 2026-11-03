import React, { useEffect } from 'react';
import UntoggledHeader from './UntoggledHeader';
import ToggledHeader from './ToggledHeader';

type HeaderProps = {
  onAccent?: boolean;
};

function Header({ onAccent }: HeaderProps) {
  const [isToggle, setIsToggle] = React.useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    if (isToggle) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isToggle]);

  return (
    <div className="z-50 absolute 2xl:right-0 flex flex-row ">
      { !isToggle ? (
        <UntoggledHeader toggle={toggle} onAccent={onAccent} />
      ) : (
        <ToggledHeader toggle={toggle} />
      )}
    </div>
  );
}

export default React.memo(Header);
