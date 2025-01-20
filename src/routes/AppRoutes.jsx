import LandingPage from "@/pages/Landing";
import Layout from "@/ui/layouts";
import DetailAnime from "@/pages/DetailAnime";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="detail-anime/:id" element={<DetailAnime />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
