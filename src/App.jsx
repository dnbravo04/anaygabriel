import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { Gallery } from './routes/Gallery';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/anaygabriel/',
    element: <Home />,
  },
  {
    path: '/anaygabriel/galeria',
    element: <Gallery />,
  },
  {
    path: '/anaygabriel/bogota',
    element: <ErrorPage />,
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
