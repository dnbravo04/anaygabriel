import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { Home } from "./routes/Home";
import { Gallery } from "./routes/Gallery";
import ErrorPage from "./routes/ErrorPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/anaygabriel/" element={<Home />} />
        <Route path="/anaygabriel/galeria" element={<Gallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
