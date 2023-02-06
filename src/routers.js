import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Carcassonne = lazy(() => import("./pages/carcassonne"));

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carcassonne" element={<Carcassonne />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routers;
