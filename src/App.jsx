import { BrowserRouter, Routes, Route,Link } from "react-router-dom"

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

 export function App() {

  return (
    <BrowserRouter>
   <nav>
   <Link to="/Home">VanLife</Link>
   <Link to="/About">About</Link>
   </nav> 
   <Routes>
   <Route path="/" elements={<Home />} />
   <Route path="/About" elements={<About />} />
   </Routes>
   </BrowserRouter>
    
   
  )
}

export default App

function Home(){
  return (
    <h1>You got the</h1>
  )
}