import React from "react";
import MVP from "pages";
import MacBookPro14One from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MacBookPro14One />} />
        <Route path="/mint" element={<MVP />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
