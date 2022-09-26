import React from "react";
import Support from "pages/Support";
import SignUp from "pages/SignUp";
import Settings from "pages/Settings";
import PostGenerationwoPreview from "pages/PostGenerationwoPreview";
import SignIn from "pages/SignIn";
import GenerationPage from "pages/GenerationPage";
import Account from "pages/Account";
import PostGenerationwPreview from "pages/PostGenerationwPreview";
import Payment from "pages/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/postgenerationwpreview"
          element={<PostGenerationwPreview />}
        />
        <Route path="/account" element={<Account />} />
        <Route path="/generationpage" element={<GenerationPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/postgenerationwopreview"
          element={<PostGenerationwoPreview />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
