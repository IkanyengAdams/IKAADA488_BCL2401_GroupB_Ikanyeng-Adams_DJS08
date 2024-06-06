import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VansDetail from "./pages/VansDetail";

import "./server"


export default function App() {
  return (
    <BrowserRouter>
    <div className="site-wrapper">
      <header>
      <Link className="site-logo"  to="/home">#VANLIFE</Link>
      <nav>
        <Link  to="/about">About</Link>
        <Link  to="/vans">Vans</Link>
      </nav>
      </header>

    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetail />} />
      </Routes>
      </main>

      <footer>
        <p>© 2024 VanLife</p>
      </footer>
      </div>
    </BrowserRouter>
  )
  }

  



