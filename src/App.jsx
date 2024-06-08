import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VanDetail from "./VanDetail";
import Dashboard from "../src/Host/Dashboard";
import Income from "../src/Host/Income";
import Reviews from "../src/Host/Reviews";
import HostVans from "../src/Host/HostVans";
import HostVanDetail from "../src/Host/HostVanDetail";
import HostVanInfo from "../src/Host/HostVanInfo";
import HostVanPhotos from "../src/Host/HostVanPhotos";
import HostVanPricing from "../src/Host/HostVanPricing";
import Layout from "../src/components/Layout";
import HostLayout from "../src/components/HostLayout";

import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={HostVanInfo} />
              <Route path="pricing" element={HostVanPhotos} />
              <Route path="photos" element={HostVanPricing} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
