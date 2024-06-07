import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VanDetail from "./VanDetail";
import Dashboard from "../src/Host/Dashboard";
import Income from "../src/Host/Income";
import Reviews from "../src/Host/Reviews";
import Layout from "../src/components/Layout";

import "./server"


export default function App() {
  return (
    <BrowserRouter>
    <div className="site-wrapper">
      <main>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="/host" element={<Dashboard />} />
        <Route path="/host/income" element={<Income />} />
        <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </main>

      <footer>
        <p>© 2024 VanLife</p>
      </footer>
      </div>
    </BrowserRouter>
  )
  }

  



