import LandingPage from "@/pages/Landing";
import Layout from "@/ui/layouts";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
