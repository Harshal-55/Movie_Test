import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
