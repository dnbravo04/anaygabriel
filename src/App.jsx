import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./routes/Home";
import { Gallery } from "./routes/Gallery";
import ErrorPage from "./routes/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/anaygabriel/" element={<Home />} />
        <Route path="/anaygabriel/galeria" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
