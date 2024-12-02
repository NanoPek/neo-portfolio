import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type LogoProps = {
  random?: boolean;
  generateRandomColor?: () => string;
};

function Logo({ random, generateRandomColor }: LogoProps) {
  const location = useLocation();

  function spanIt(str: string) {
    return str.split('').map((letter) => `<span>${letter}</span>`).join('');
  }

  function randomizeText() {
    const elem = document.getElementById('title');
    if (!elem) return;

    if (generateRandomColor) {
      elem.style.color = generateRandomColor();
    }
    elem.innerHTML = spanIt(elem.innerText);

    const spans = elem.querySelectorAll('span');
    spans.forEach((span) => {
      if (generateRandomColor) {
        // eslint-disable-next-line no-param-reassign
        span.style.color = generateRandomColor();
      }
    });
  }

  useEffect(() => {
    if (random) {
      randomizeText();
      setInterval(randomizeText, 4000);
    }
  }, [random, generateRandomColor]);

  return (
    <div>
      { location.pathname !== '/' ? (
        <a href="/" className="flex flex-row font-extrabold text-3xl 2xl:text-5xl" id="title">
          {location.pathname === '/my-work' && (
            <img
              src="https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085c39c02c107_mac.svg"
              alt="CartoonLogo"
              className="w-10 2xl:w-14 mr-2"
            />
          )}
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
