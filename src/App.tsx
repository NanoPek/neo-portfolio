import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './screens/HomePage';
import MyWork from './screens/MyWork';
import MySkills from './screens/MySkills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/my-work',
    element: <MyWork />,
  },
  {
    path: '/my-skills-&-tools',
    element: <MySkills />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
