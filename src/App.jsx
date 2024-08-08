import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import { Home } from "./routes/Home";
import { Gallery } from "./routes/Gallery";
import ErrorPage from "./routes/ErrorPage";

const basename = '/anaygabriel';

const router = createBrowserRouter([
  {
    path: `${basename}/`,
    element: <Home />
  },
  {
    path: `${basename}/galeria`,
    element: <Gallery />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

function App() {
  return (
    <BrowserRouter basename={basename}>
      <RouterProvider router={router} />
    </BrowserRouter>
  );
}

export default App;
