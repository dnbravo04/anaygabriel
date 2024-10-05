import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { Gallery } from './routes/Gallery';
import {Bogota} from './routes/Bogota'
import ErrorPage from './routes/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/galeria',
    element: <Gallery />,
  },
  {
    path: '/bogota',
    element: <Bogota />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
