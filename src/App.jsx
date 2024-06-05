import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 *
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 *
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

export default function App() {
  return (
    <BrowserRouter>
    <div className="site-wrapper">
      <header>
      <nav>
        <Link to="/home">#VANLIFE</Link>
        <Link to="/about">About</Link>
      </nav>
      </header>

    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>

      <footer>
        <p>© 2024 VanLife</p>
      </footer>
      </div>
    </BrowserRouter>
  )
  }



