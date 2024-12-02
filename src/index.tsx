import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import LINKS from './constants/links';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

console.log('    ,__                   __\n'
    + "    '~~****Nm_    _mZ*****~~\n"
    + '            _8@mm@K_\n'
    + "           W~@`  '@~W\n"
    + '          ][][    ][][\n'
    + "    gz    'W'W.  ,W`W`    es\n"
    + '  ,Wf    gZ****MA****Ns    VW.\n'
    + " gA`   ,Wf     ][     VW.   'Ms\n"
    + "Wf    ,@`      ][      '@.    VW\n"
    + "M.    W`  _mm_ ][ _mm_  'W    ,A\n"
    + "'W   ][  i@@@@i][i@@@@i  ][   W`\n"
    + ' !b  @   !@@@@!][!@@@@!   @  d!\n'
    + '  VWmP    ~**~ ][ ~**~    YmWf\n'
    + '    ][         ][         ][\n'
    + '  ,mW[         ][         ]Wm.\n'
    + " ,A` @  ,gms.  ][  ,gms.  @ 'M.\n"
    + " W`  Yi W@@@W  ][  W@@@W iP  'W\n"
    + "d!   'W M@@@A  ][  M@@@A W`   !b\n"
    + "@.    !b'V*f`  ][  'V*f`d!    ,@\n"
    + "'Ms    VW.     ][     ,Wf    gA`\n"
    + "  VW.   'Ms.   ][   ,gA`   ,Wf\n"
    + "   'Ms    'V*mmWWmm*f`    gA`\n\n"
    + '     Hey there little bug 🐛👋!\n'
    + '     Are you intrigued by this website?\n'
    + `     If so, you can take a look at the code behind it on GitHub here : ${LINKS.GITHUB_PORTFOLIO}.
`
    + `     Also, don't hesitate to reach out to me on LinkedIn at ${LINKS.LINKEDIN} or via email at ${LINKS.EMAIL} ✨.`);
